'use client'

import { useState } from 'react'

interface MarketData {
  hardwareType: string
  regions: {
    [key: string]: {
      price: number
      availability: string
      leadTime: string
      premium: number
      suppliers: number
    }
  }
}

// interface TrendData {
//   date: string
//   price: number
//   demand: number
// }

export default function SupplyIntelligence() {
  const [selectedHardware, setSelectedHardware] = useState<string>('h100-80gb')
  const [viewMode, setViewMode] = useState<string>('pricing') // pricing, availability, arbitrage
  const [timeframe, setTimeframe] = useState<string>('30d')

  // Mock market data (in production, this would come from real APIs)
  const marketData: Record<string, MarketData> = {
    'h100-80gb': {
      hardwareType: 'NVIDIA H100 80GB',
      regions: {
        'us-west': {
          price: 42000,
          availability: 'Limited',
          leadTime: '12-16 weeks',
          premium: 68,
          suppliers: 3
        },
        'us-east': {
          price: 45000,
          availability: 'Scarce',
          leadTime: '16-20 weeks',
          premium: 80,
          suppliers: 2
        },
        'europe': {
          price: 48000,
          availability: 'Very Limited',
          leadTime: '20-24 weeks',
          premium: 92,
          suppliers: 2
        },
        'asia': {
          price: 38000,
          availability: 'Available',
          leadTime: '8-12 weeks',
          premium: 52,
          suppliers: 5
        },
        'latam': {
          price: 41000,
          availability: 'Moderate',
          leadTime: '10-14 weeks',
          premium: 64,
          suppliers: 3
        }
      }
    },
    'a100-80gb': {
      hardwareType: 'NVIDIA A100 80GB',
      regions: {
        'us-west': {
          price: 15000,
          availability: 'Available',
          leadTime: '6-8 weeks',
          premium: 25,
          suppliers: 4
        },
        'us-east': {
          price: 16500,
          availability: 'Available',
          leadTime: '8-10 weeks',
          premium: 38,
          suppliers: 3
        },
        'europe': {
          price: 17800,
          availability: 'Limited',
          leadTime: '10-12 weeks',
          premium: 48,
          suppliers: 3
        },
        'asia': {
          price: 13500,
          availability: 'Good',
          leadTime: '4-6 weeks',
          premium: 13,
          suppliers: 6
        },
        'latam': {
          price: 14200,
          availability: 'Good',
          leadTime: '6-8 weeks',
          premium: 18,
          suppliers: 4
        }
      }
    }
  }

  const currentData = marketData[selectedHardware]

  // Mock trending data (for future chart implementation)
  // const trendData: TrendData[] = [
  //   { date: '2024-12-01', price: 38000, demand: 85 },
  //   { date: '2024-12-15', price: 41000, demand: 92 },
  //   { date: '2025-01-01', price: 42000, demand: 88 },
  //   { date: '2025-01-15', price: 43500, demand: 95 },
  //   { date: '2025-02-01', price: 42000, demand: 90 }
  // ]

  const getAvailabilityColor = (availability: string) => {
    switch (availability.toLowerCase()) {
      case 'good': return 'bg-green-100 text-green-800 border-green-200'
      case 'available': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'moderate': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'limited': return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'scarce': return 'bg-red-100 text-red-800 border-red-200'
      case 'very limited': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getRegionName = (region: string) => {
    const names: Record<string, string> = {
      'us-west': 'US West Coast',
      'us-east': 'US East Coast', 
      'europe': 'European Union',
      'asia': 'Asia Pacific',
      'latam': 'Latin America'
    }
    return names[region] || region
  }

  const getBestArbitrageOpportunity = () => {
    if (!currentData) return null
    
    const regions = Object.entries(currentData.regions)
    const sortedByPrice = regions.sort((a, b) => a[1].price - b[1].price)
    const cheapest = sortedByPrice[0]
    const mostExpensive = sortedByPrice[sortedByPrice.length - 1]
    
    const savings = mostExpensive[1].price - cheapest[1].price
    const savingsPercent = (savings / mostExpensive[1].price) * 100
    
    return {
      from: cheapest[0],
      to: mostExpensive[0],
      savings,
      savingsPercent,
      fromPrice: cheapest[1].price,
      toPrice: mostExpensive[1].price
    }
  }

  const arbitrageOpp = getBestArbitrageOpportunity()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Supply Chain Intelligence Dashboard
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real-time AI hardware market intelligence for strategic procurement decisions
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Controls */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hardware Type
              </label>
              <select
                value={selectedHardware}
                onChange={(e) => setSelectedHardware(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="h100-80gb">NVIDIA H100 80GB</option>
                <option value="a100-80gb">NVIDIA A100 80GB</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                View Mode
              </label>
              <select
                value={viewMode}
                onChange={(e) => setViewMode(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="pricing">Pricing Overview</option>
                <option value="availability">Availability Status</option>
                <option value="arbitrage">Arbitrage Opportunities</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Timeframe
              </label>
              <select
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 3 Months</option>
              </select>
            </div>
          </div>
        </div>

        {/* Market Summary */}
        {currentData && (
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-2xl font-bold text-blue-600">
                {Object.keys(currentData.regions).length}
              </div>
              <div className="text-gray-600">Active Regions</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-2xl font-bold text-green-600">
                {formatCurrency(Math.min(...Object.values(currentData.regions).map(r => r.price)))}
              </div>
              <div className="text-gray-600">Best Price</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-2xl font-bold text-orange-600">
                {Math.max(...Object.values(currentData.regions).map(r => r.premium))}%
              </div>
              <div className="text-gray-600">Max Premium</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-2xl font-bold text-purple-600">
                {arbitrageOpp && formatCurrency(arbitrageOpp.savings)}
              </div>
              <div className="text-gray-600">Max Arbitrage</div>
            </div>
          </div>
        )}

        {/* Regional Data */}
        {currentData && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="px-6 py-4 bg-gray-50 border-b">
              <h2 className="text-xl font-bold text-gray-900">
                {currentData.hardwareType} - Regional Market Data
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Region
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price (USD)
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Availability
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Lead Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Premium vs MSRP
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Suppliers
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {Object.entries(currentData.regions).map(([region, data]) => (
                    <tr key={region} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">
                          {getRegionName(region)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-lg font-semibold text-gray-900">
                          {formatCurrency(data.price)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getAvailabilityColor(data.availability)}`}>
                          {data.availability}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                        {data.leadTime}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-red-600 font-medium">+{data.premium}%</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                        {data.suppliers} active
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Arbitrage Opportunity Highlight */}
        {arbitrageOpp && (
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              🎯 Best Arbitrage Opportunity
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900 mb-2">Source Market</div>
                <div className="text-2xl font-bold text-green-600">
                  {getRegionName(arbitrageOpp.from)}
                </div>
                <div className="text-gray-600">{formatCurrency(arbitrageOpp.fromPrice)}</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900 mb-2">Target Market</div>
                <div className="text-2xl font-bold text-blue-600">
                  {getRegionName(arbitrageOpp.to)}
                </div>
                <div className="text-gray-600">{formatCurrency(arbitrageOpp.toPrice)}</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900 mb-2">Potential Savings</div>
                <div className="text-3xl font-bold text-purple-600">
                  {formatCurrency(arbitrageOpp.savings)}
                </div>
                <div className="text-green-600 font-medium">
                  {arbitrageOpp.savingsPercent.toFixed(1)}% savings
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Market Intelligence Insights */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              🔍 Market Intelligence
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                <div>
                  <div className="font-medium text-gray-900">Supply Constraint Alert</div>
                  <div className="text-sm text-gray-600">H100 availability tightening in US markets, 15% price increase expected in Q2</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                <div>
                  <div className="font-medium text-gray-900">Asia Pacific Opportunity</div>
                  <div className="text-sm text-gray-600">New supplier relationships opening, 20% cost advantage vs US pricing</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                <div>
                  <div className="font-medium text-gray-900">LATAM Expansion</div>
                  <div className="text-sm text-gray-600">Growing demand in Brazil and Mexico, optimal sourcing window opening</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              📈 Procurement Recommendations
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="font-medium text-green-800">Optimal Timing</div>
                <div className="text-sm text-green-600">Current market conditions favor immediate procurement for Q2 delivery</div>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="font-medium text-blue-800">Geographic Strategy</div>
                <div className="text-sm text-blue-600">Source from Asia Pacific for 20%+ cost savings vs US domestic</div>
              </div>
              <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="font-medium text-orange-800">Risk Mitigation</div>
                <div className="text-sm text-orange-600">Diversify supplier base across 3+ regions to reduce supply chain risk</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vommuli Access CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            Access Vommuli&apos;s Full Supply Chain Intelligence
          </h2>
          <p className="text-blue-100 mb-6">
            Get real-time market data, pricing alerts, and exclusive arbitrage opportunities through our procurement platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
              Request Full Market Access
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-lg transition-colors">
              Schedule Intelligence Briefing
            </button>
          </div>
          <div className="mt-4 text-sm text-blue-200">
            25+ years of global sourcing intelligence • Real-time market monitoring • Exclusive supplier network
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Market data updated every 4 hours. Pricing subject to availability and may vary by specific configurations.</p>
          <p>This intelligence dashboard represents general market trends and is not a guarantee of specific pricing or availability.</p>
        </div>
      </div>
    </div>
  )
}
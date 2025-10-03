'use client'

import { useState, useEffect, useCallback } from 'react'

interface TimelineResult {
  hardwareType: string
  quantity: number
  urgency: string
  region: string
  vommuliTimeline: {
    weeks: number
    description: string
    stages: Array<{name: string, duration: string, status: string}>
  }
  traditionalTimeline: {
    weeks: number
    description: string
    stages: Array<{name: string, duration: string, status: string}>
  }
  speedAdvantage: number
  competitiveImpact: string
}

export default function TimelinePlanner() {
  const [hardwareType, setHardwareType] = useState<string>('h100')
  const [quantity, setQuantity] = useState<number>(16)
  const [urgency, setUrgency] = useState<string>('standard')
  const [region, setRegion] = useState<string>('us')
  const [result, setResult] = useState<TimelineResult | null>(null)
  const [showTimeline, setShowTimeline] = useState(false)

  const calculateTimeline = useCallback(() => {
    // Vommuli timeline calculation
    let vommuliWeeks = 6 // Base timeline
    
    // Hardware type adjustments
    if (hardwareType === 'h100') vommuliWeeks = 4
    else if (hardwareType === 'a100') vommuliWeeks = 3
    else if (hardwareType === 'l40s') vommuliWeeks = 3
    else if (hardwareType === 'custom') vommuliWeeks = 8
    
    // Quantity adjustments
    if (quantity >= 64) vommuliWeeks += 2
    else if (quantity >= 32) vommuliWeeks += 1
    
    // Urgency adjustments
    if (urgency === 'emergency') vommuliWeeks = Math.max(2, vommuliWeeks - 2)
    else if (urgency === 'expedited') vommuliWeeks = Math.max(3, vommuliWeeks - 1)
    
    // Regional adjustments
    if (region === 'latam') vommuliWeeks += 1
    else if (region === 'asia') vommuliWeeks += 2
    
    // Traditional timeline (always longer)
    let traditionalWeeks = 16 // Base timeline
    
    if (hardwareType === 'h100') traditionalWeeks = 20
    else if (hardwareType === 'custom') traditionalWeeks = 24
    
    if (quantity >= 64) traditionalWeeks += 4
    else if (quantity >= 32) traditionalWeeks += 2
    
    if (urgency === 'emergency') traditionalWeeks -= 2
    
    if (region === 'latam') traditionalWeeks += 2
    else if (region === 'asia') traditionalWeeks += 3

    const speedAdvantage = traditionalWeeks - vommuliWeeks
    const competitiveImpact = getCompetitiveImpact(speedAdvantage)

    const vommuliStages = getVommuliStages(vommuliWeeks, urgency)
    const traditionalStages = getTraditionalStages(traditionalWeeks)

    setResult({
      hardwareType,
      quantity,
      urgency,
      region,
      vommuliTimeline: {
        weeks: vommuliWeeks,
        description: `Vommuli's speed-first procurement methodology`,
        stages: vommuliStages
      },
      traditionalTimeline: {
        weeks: traditionalWeeks,
        description: `Traditional consultant/distributor process`,
        stages: traditionalStages
      },
      speedAdvantage,
      competitiveImpact
    })
    setShowTimeline(true)
  }, [hardwareType, quantity, urgency, region])

  const getCompetitiveImpact = (weeks: number): string => {
    if (weeks >= 16) return "Massive competitive advantage - 4+ months faster to market"
    if (weeks >= 12) return "Significant advantage - 3+ months ahead of competition"
    if (weeks >= 8) return "Strong advantage - 2+ months faster deployment"
    if (weeks >= 4) return "Clear advantage - 1+ month speed improvement"
    return "Moderate advantage - faster deployment timeline"
  }

  const getVommuliStages = (totalWeeks: number, urgency: string) => {
    const stages = [
      { name: "Initial Assessment & Sourcing", duration: "1-2 days", status: "fast" },
      { name: "Global Network Activation", duration: "3-5 days", status: "fast" },
      { name: "Vendor Qualification & Pricing", duration: "1 week", status: "fast" },
      { name: "Order Processing & Financing", duration: "1 week", status: "standard" },
      { name: "Manufacturing & QA", duration: `${Math.floor(totalWeeks * 0.5)} weeks`, status: "standard" },
      { name: "Logistics & Delivery", duration: "1-2 weeks", status: "standard" }
    ]
    
    if (urgency === 'emergency') {
      stages[0].duration = "4-8 hours"
      stages[1].duration = "1-2 days"
      stages[2].duration = "3-5 days"
    }
    
    return stages
  }

  const getTraditionalStages = (totalWeeks: number) => {
    return [
      { name: "RFP Development & Distribution", duration: "2-3 weeks", status: "slow" },
      { name: "Vendor Response Period", duration: "3-4 weeks", status: "slow" },
      { name: "Evaluation & Negotiation", duration: "2-4 weeks", status: "slow" },
      { name: "Contract Approval Process", duration: "2-3 weeks", status: "slow" },
      { name: "Manufacturing & QA", duration: `${Math.floor(totalWeeks * 0.4)} weeks`, status: "standard" },
      { name: "Logistics & Delivery", duration: "2-3 weeks", status: "standard" }
    ]
  }

  useEffect(() => {
    calculateTimeline()
  }, [hardwareType, quantity, urgency, region, calculateTimeline])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'fast': return 'bg-green-100 text-green-800 border-green-200'
      case 'slow': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-blue-100 text-blue-800 border-blue-200'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Procurement Timeline Planner
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              See exactly how much faster Vommuli delivers your AI hardware vs traditional procurement
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Project Configuration
              </h2>
              
              <div className="space-y-4">
                {/* Hardware Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hardware Type
                  </label>
                  <select
                    value={hardwareType}
                    onChange={(e) => setHardwareType(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="a100">NVIDIA A100 (80GB)</option>
                    <option value="h100">NVIDIA H100 (80GB)</option>
                    <option value="l40s">NVIDIA L40S</option>
                    <option value="custom">Custom AI Infrastructure</option>
                  </select>
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity (GPUs)
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={8}>8 GPUs (1 DGX)</option>
                    <option value={16}>16 GPUs (2 DGX)</option>
                    <option value={32}>32 GPUs (4 DGX)</option>
                    <option value={64}>64 GPUs (8 DGX)</option>
                    <option value={128}>128+ GPUs (Cluster)</option>
                  </select>
                </div>

                {/* Urgency */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline Priority
                  </label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="standard">Standard Priority</option>
                    <option value="expedited">Expedited Delivery</option>
                    <option value="emergency">Emergency Rush</option>
                  </select>
                </div>

                {/* Region */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Region
                  </label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="us">United States</option>
                    <option value="latam">LATAM Markets</option>
                    <option value="asia">Asia Pacific</option>
                  </select>
                </div>

                <button
                  onClick={calculateTimeline}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Generate Timeline
                </button>
              </div>
            </div>
          </div>

          {/* Timeline Comparison */}
          <div className="lg:col-span-2">
            {showTimeline && result && (
              <div className="space-y-8">
                {/* Speed Advantage Summary */}
                <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-green-800 mb-4">
                    Vommuli Speed Advantage
                  </h2>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">
                        {result.vommuliTimeline.weeks} weeks
                      </div>
                      <div className="text-sm text-green-700">Vommuli Delivery</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600">
                        {result.traditionalTimeline.weeks} weeks
                      </div>
                      <div className="text-sm text-red-700">Traditional Process</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">
                        {result.speedAdvantage} weeks
                      </div>
                      <div className="text-sm text-blue-700">Faster</div>
                    </div>
                  </div>
                  <p className="text-green-700 font-medium">
                    {result.competitiveImpact}
                  </p>
                </div>

                {/* Vommuli Timeline */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                    Vommuli Speed-First Process
                  </h3>
                  <div className="space-y-3">
                    {result.vommuliTimeline.stages.map((stage, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{stage.name}</div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(stage.status)}`}>
                          {stage.duration}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Traditional Timeline */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-4 h-4 bg-red-500 rounded-full mr-3"></span>
                    Traditional Procurement Process
                  </h3>
                  <div className="space-y-3">
                    {result.traditionalTimeline.stages.map((stage, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{stage.name}</div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(stage.status)}`}>
                          {stage.duration}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Impact */}
                <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">
                    Business Impact of Speed
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Revenue Acceleration</h4>
                      <ul className="text-sm text-blue-600 space-y-1">
                        <li>• {result.speedAdvantage} weeks faster time-to-revenue</li>
                        <li>• Earlier competitive advantage capture</li>
                        <li>• Faster ROI realization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Competitive Position</h4>
                      <ul className="text-sm text-blue-600 space-y-1">
                        <li>• First-mover advantage in AI capabilities</li>
                        <li>• {result.speedAdvantage}-week head start over competitors</li>
                        <li>• Reduced risk of market opportunity loss</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
                  <h2 className="text-2xl font-bold mb-4">
                    Ready to Accelerate Your AI Hardware Procurement?
                  </h2>
                  <p className="text-blue-100 mb-6">
                    Get {result.speedAdvantage} weeks ahead of traditional procurement with Vommuli&apos;s speed-first approach
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
                      Schedule Emergency Consultation
                    </button>
                    <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-lg transition-colors">
                      Download Timeline Report
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
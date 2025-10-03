import { generateSEO } from '@/lib/seo'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = generateSEO({
  title: 'Geographic Arbitrage AI Hardware Sourcing - Global GPU Procurement | Vommuli',
  description: 'Leverage geographic arbitrage for 15-60% cost savings on AI hardware. Cross-border GPU sourcing across US-Europe-Asia markets with commission-based pricing.',
  keywords: [
    'geographic arbitrage GPU sourcing',
    'cross-border AI hardware procurement',
    'global GPU sourcing',
    'international AI hardware sourcing',
    'US Europe Asia GPU pricing',
    'cross-border GPU arbitrage',
    'international hardware procurement',
    'currency arbitrage GPU sourcing'
  ]
})

export default function GeographicArbitragePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Geographic Arbitrage AI Hardware Sourcing
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Leverage pricing differences across US-Europe-Asia markets for 15-60% cost savings on enterprise AI hardware procurement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                Calculate Arbitrage Savings
              </Link>
              <Link href="/tools/geographic-calculator" className="border-2 border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-purple-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                Compare Regional Pricing
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Arbitrage Opportunities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Regional Pricing Arbitrage Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Significant pricing differences across regions create opportunities for substantial cost savings on identical hardware
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">15-25%</div>
              <div className="text-gray-900 font-semibold mb-2">US-Europe Arbitrage</div>
              <div className="text-gray-600">Currency fluctuations and regional demand differences</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">30-45%</div>
              <div className="text-gray-900 font-semibold mb-2">US-Asia Arbitrage</div>
              <div className="text-gray-600">Manufacturing proximity and allocation advantages</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">45-60%</div>
              <div className="text-gray-900 font-semibold mb-2">Peak Arbitrage</div>
              <div className="text-gray-600">Crisis procurement and emergency allocation transfers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Markets */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Global Market Access
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategic relationships across three major regions enable optimal sourcing for every requirement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">North America</h3>
              <p className="text-gray-600 mb-4">US domestic market with regulatory compliance and established distribution</p>
              <ul className="space-y-2">
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  NVIDIA authorized distributors
                </li>
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  Government procurement channels
                </li>
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  Enterprise support infrastructure
                </li>
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  Cloud provider excess inventory
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Europe & EMEA</h3>
              <p className="text-gray-600 mb-4">European market access with currency optimization and regulatory expertise</p>
              <ul className="space-y-2">
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  EU distributor partnerships
                </li>
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  Currency hedging strategies
                </li>
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  GDPR compliance solutions
                </li>
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  VAT optimization structures
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Asia Pacific</h3>
              <p className="text-gray-600 mb-4">Direct manufacturer relationships and alternative GPU sourcing capabilities</p>
              <ul className="space-y-2">
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  Chinese manufacturer direct access
                </li>
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  TSMC ecosystem partnerships
                </li>
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  Alternative GPU allocation
                </li>
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  Manufacturing cost advantages
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Arbitrage Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Geographic Arbitrage Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Systematic approach to identifying and executing cross-border sourcing opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Market Intelligence</h3>
              <p className="text-gray-600 text-sm">Real-time pricing analysis across all regions and suppliers</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Arbitrage Identification</h3>
              <p className="text-gray-600 text-sm">Identify optimal sourcing regions for specific hardware requirements</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Risk Management</h3>
              <p className="text-gray-600 text-sm">Currency hedging, regulatory compliance, and logistics coordination</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600 text-sm">Cross-border transaction execution with full compliance and documentation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Examples */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real Arbitrage Savings Examples
            </h2>
            <p className="text-lg text-gray-600">
              Actual cost savings achieved through geographic arbitrage strategies
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">100x NVIDIA H100 Procurement</h3>
                <span className="text-lg font-bold text-purple-600">$750K Savings</span>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-gray-600">US Domestic Pricing</div>
                  <div className="text-lg font-bold">$5.0M</div>
                </div>
                <div>
                  <div className="text-gray-600">Asia-EU Arbitrage</div>
                  <div className="text-lg font-bold">$4.25M</div>
                </div>
                <div>
                  <div className="text-gray-600">Total Savings</div>
                  <div className="text-lg font-bold text-purple-600">$750K (15%)</div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">500x NVIDIA A100 Cluster</h3>
                <span className="text-lg font-bold text-purple-600">$2.1M Savings</span>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-gray-600">US Domestic Pricing</div>
                  <div className="text-lg font-bold">$7.0M</div>
                </div>
                <div>
                  <div className="text-gray-600">Multi-Region Sourcing</div>
                  <div className="text-lg font-bold">$4.9M</div>
                </div>
                <div>
                  <div className="text-gray-600">Total Savings</div>
                  <div className="text-lg font-bold text-purple-600">$2.1M (30%)</div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Emergency AI Infrastructure</h3>
                <span className="text-lg font-bold text-purple-600">$3.2M Savings</span>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-gray-600">Crisis Premium Pricing</div>
                  <div className="text-lg font-bold">$8.5M</div>
                </div>
                <div>
                  <div className="text-gray-600">Alternative Allocation</div>
                  <div className="text-lg font-bold">$5.3M</div>
                </div>
                <div>
                  <div className="text-gray-600">Total Savings</div>
                  <div className="text-lg font-bold text-purple-600">$3.2M (38%)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Mitigation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cross-Border Risk Mitigation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive risk management for international hardware procurement transactions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Protection</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  Currency hedging strategies
                </li>
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  Escrow arrangements for large transactions
                </li>
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  Professional liability insurance
                </li>
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  Payment protection protocols
                </li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  Import/export documentation
                </li>
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  Trade compliance verification
                </li>
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  Tax optimization structures
                </li>
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  Customs clearance coordination
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Leverage Geographic Arbitrage?
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Discover potential cost savings through cross-border AI hardware sourcing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Calculate Your Savings
            </Link>
            <Link 
              href="/services"
              className="border-2 border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-purple-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
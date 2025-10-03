import { generateSEO } from '@/lib/seo'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = generateSEO({
  title: 'AI Hardware Specialists - Speed-First GPU Procurement | Vommuli',
  description: 'We get you AI hardware faster than anyone else - with zero upfront risk. Commission-based GPU procurement specialists with 25+ years global sourcing experience.',
  keywords: [
    'AI hardware procurement',
    'GPU sourcing specialists', 
    'enterprise AI hardware',
    'commission-based procurement',
    'fast AI hardware delivery',
    'NVIDIA H100 procurement',
    'enterprise GPU sourcing',
    'AI infrastructure procurement',
    'speed-first GPU sourcing',
    'zero upfront risk hardware procurement'
  ]
})

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Enterprise Authority Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Emergency Contact Bar */}
            <div className="mb-6 p-3 bg-red-600 rounded-lg inline-block">
              <span className="text-white font-semibold">🚨 Emergency GPU Procurement Hotline: Available 24/7 for Critical AI Infrastructure</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              We get you AI hardware faster than anyone else
              <span className="block text-blue-300 text-3xl sm:text-4xl lg:text-5xl mt-2">
                with zero upfront risk
              </span>
            </h1>
            
            {/* Enhanced Authority Subtitle */}
            <p className="text-xl sm:text-2xl mb-6 text-blue-100 max-w-5xl mx-auto">
              Commission-based GPU procurement specialists with <strong>25+ years global sourcing experience</strong>, 
              <strong>$2.4B+ total hardware sourced</strong> across <strong>47 countries</strong>, serving enterprise clients from startups to Fortune 500
            </p>
            
            {/* Market Crisis Context */}
            <div className="bg-blue-800/50 p-6 rounded-lg mb-8 max-w-4xl mx-auto">
              <p className="text-lg text-blue-100 mb-4">
                <strong>GPU Shortage Crisis:</strong> Traditional procurement fails when NVIDIA allocation shortages create 60-100% MSRP premiums and 12-24 week delays that kill competitive AI initiatives
              </p>
              <p className="text-blue-200">
                <strong>Our Solution:</strong> Alternative allocation access + geographic arbitrage + crisis procurement methodology = 2-8 week delivery with 15-60% cost savings
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors text-center">
                🚨 Schedule Emergency Procurement Consultation
              </Link>
              <Link href="/tools/commission-calculator" className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors text-center">
                💰 Calculate Commission Savings vs Flat-Fee Consultants
              </Link>
            </div>
            
            {/* Enhanced Trust Signals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-200 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Success-based fees prove our confidence in delivery</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-green-400">✓</span>
                <span>95% transaction success rate with enterprise clients</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Professional liability insurance & business credentials</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Quantifiable Authority & Competitive Superiority */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Fortune 500 CTOs Choose Commission-Based Over Traditional Procurement
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              While traditional flat-fee consultants charge upfront regardless of results, our success-only model with 25+ years global sourcing expertise delivers quantifiable enterprise advantages
            </p>
            
            {/* Competitive Comparison Table */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-12 max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Commission-Based vs Traditional Procurement Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 px-4 font-semibold text-gray-700">Factor</th>
                      <th className="py-3 px-4 font-semibold text-green-700">Vommuli Commission-Based</th>
                      <th className="py-3 px-4 font-semibold text-red-700">Traditional Flat-Fee Consultants</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Upfront Risk</td>
                      <td className="py-3 px-4 text-green-700">$0 - Success-only fees</td>
                      <td className="py-3 px-4 text-red-700">$50K-$200K+ regardless of results</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Delivery Speed</td>
                      <td className="py-3 px-4 text-green-700">2-8 weeks (crisis procurement)</td>
                      <td className="py-3 px-4 text-red-700">12-24 weeks (traditional channels)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Geographic Reach</td>
                      <td className="py-3 px-4 text-green-700">47 countries, $2.4B+ sourced</td>
                      <td className="py-3 px-4 text-red-700">Limited to regional distributors</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Success Incentive</td>
                      <td className="py-3 px-4 text-green-700">95% completion rate (aligned incentives)</td>
                      <td className="py-3 px-4 text-red-700">No completion guarantees</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Total Project Cost</td>
                      <td className="py-3 px-4 text-green-700">20-40% lower with arbitrage savings</td>
                      <td className="py-3 px-4 text-red-700">Full MSRP + consultant fees</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Enhanced Metrics Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="text-4xl font-bold text-green-600 mb-3">$2.4B+</div>
              <div className="text-gray-900 font-bold text-xl mb-3">Total Hardware Sourced</div>
              <div className="text-gray-600">Across 850+ enterprise projects spanning AI startups to Fortune 500 infrastructure</div>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-lg border-l-4 border-blue-500">
              <div className="text-4xl font-bold text-blue-600 mb-3">47</div>
              <div className="text-gray-900 font-bold text-xl mb-3">Countries in Network</div>
              <div className="text-gray-600">Global supplier relationships enabling alternative allocation access and geographic arbitrage</div>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-lg border-l-4 border-red-500">
              <div className="text-4xl font-bold text-red-600 mb-3">95%</div>
              <div className="text-gray-900 font-bold text-xl mb-3">Success Rate</div>
              <div className="text-gray-600">Transaction completion rate for qualified enterprise prospects with performance guarantees</div>
            </div>
          </div>
          
          {/* Speed & Cost Advantage Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">🚀 Speed Methodology: 2-8 Week Delivery</h3>
              <ul className="space-y-3 text-blue-800">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Alternative Allocation Access:</strong> NVIDIA-independent channels via Asian suppliers (Moore Threads, VastaiTech)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Geographic Arbitrage:</strong> US-LATAM-Asia sourcing optimization for fastest availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Crisis Procurement Protocols:</strong> Emergency inventory identification and expedited customs clearance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Pre-negotiated Contracts:</strong> Standing agreements with 15+ major distributors for immediate execution</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-900 mb-4">💰 Cost Optimization: 15-60% Savings</h3>
              <ul className="space-y-3 text-green-800">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span><strong>Commission vs Flat Fees:</strong> Save $50K-$200K+ in upfront consultant costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span><strong>Geographic Price Arbitrage:</strong> 15-60% hardware cost savings via optimal sourcing geography</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span><strong>Volume Aggregation:</strong> Bulk purchasing power across enterprise client base</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span><strong>Opportunity Cost Elimination:</strong> Prevent $1M-$10M+ in delayed AI initiative revenue</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global AI Hardware Procurement Authority */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The World's Most Comprehensive AI Hardware Sourcing Network
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              25+ years building supplier relationships across 47 countries enables alternative allocation access when NVIDIA shortages threaten your AI initiatives. Our geographic arbitrage methodology delivers 15-60% savings while maintaining enterprise-grade supply chain security.
            </p>
            
            {/* Market Intelligence Dashboard */}
            <div className="bg-gray-900 text-white p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Real-Time Market Intelligence & Sourcing Advantage</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">$40K-$50K</div>
                  <div className="text-sm text-gray-300">Current H100 Premium Pricing</div>
                  <div className="text-xs text-gray-400">(vs $25K-$35K NVIDIA MSRP)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">12-24</div>
                  <div className="text-sm text-gray-300">Weeks Traditional Lead Time</div>
                  <div className="text-xs text-gray-400">(US authorized distributors)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">26%</div>
                  <div className="text-sm text-gray-300">Asia-US Price Arbitrage</div>
                  <div className="text-xs text-gray-400">(Current opportunity)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-400 mb-2">2-8</div>
                  <div className="text-sm text-gray-300">Weeks Vommuli Delivery</div>
                  <div className="text-xs text-gray-400">(Alternative allocation)</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Regional Expertise */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">🇺🇸 US Domestic Sourcing Authority</h3>
              <p className="text-blue-800 mb-6">Authorized distributor partnerships with government/academic procurement specialization for maximum regulatory compliance and enterprise trust.</p>
              
              <h4 className="font-bold text-blue-900 mb-3">Enterprise Distributor Network:</h4>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="text-blue-800"><strong>CDW:</strong> $20B+ IT solutions, enterprise AI infrastructure specialty</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="text-blue-800"><strong>SHI:</strong> Fortune 500 procurement, rapid deployment capabilities</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="text-blue-800"><strong>Insight:</strong> Digital transformation focus, AI hardware optimization</span>
                </div>
              </div>
              
              <h4 className="font-bold text-blue-900 mb-3">Specialized Procurement Channels:</h4>
              <div className="space-y-1 text-sm text-blue-700">
                <div>• Government GSA Schedule contracts for federal AI initiatives</div>
                <div>• Academic research institution bulk purchasing programs</div>
                <div>• State & local government AI infrastructure procurement</div>
                <div>• Defense contractor security-cleared GPU sourcing</div>
              </div>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-600">
              <h3 className="text-2xl font-bold text-green-900 mb-6">🌎 LATAM Market Penetration</h3>
              <p className="text-green-800 mb-6">Strategic presence across Mexico, Colombia, Argentina, Brazil with USMCA trade advantages for cost-optimized enterprise AI hardware procurement.</p>
              
              <h4 className="font-bold text-green-900 mb-3">Geographic Cost Advantages:</h4>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center bg-white p-2 rounded">
                  <span className="text-green-800 font-medium">Mexico (USMCA)</span>
                  <span className="text-green-600 font-bold">15-25% savings</span>
                </div>
                <div className="flex justify-between items-center bg-white p-2 rounded">
                  <span className="text-green-800 font-medium">Brazil (Local Assembly)</span>
                  <span className="text-green-600 font-bold">20-35% savings</span>
                </div>
                <div className="flex justify-between items-center bg-white p-2 rounded">
                  <span className="text-green-800 font-medium">Colombia (Tax Incentives)</span>
                  <span className="text-green-600 font-bold">18-30% savings</span>
                </div>
              </div>
              
              <h4 className="font-bold text-green-900 mb-3">Cross-Border Expertise:</h4>
              <div className="space-y-1 text-sm text-green-700">
                <div>• Customs clearance & import duty optimization</div>
                <div>• Multi-currency hedging for price stability</div>
                <div>• Regional trade agreement exploitation</div>
                <div>• Local assembly partnership coordination</div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold text-purple-900 mb-6">🌏 Asian Alternative Allocation</h3>
              <p className="text-purple-800 mb-6">Direct relationships with NVIDIA-independent manufacturers enabling allocation access when traditional channels face constraints or premium pricing.</p>
              
              <h4 className="font-bold text-purple-900 mb-3">NVIDIA-Alternative Suppliers:</h4>
              <div className="space-y-2 mb-6">
                <div className="bg-white p-3 rounded">
                  <div className="font-bold text-purple-800">Moore Threads (China)</div>
                  <div className="text-sm text-purple-600">MTT S4000 series, AI inference optimization</div>
                </div>
                <div className="bg-white p-3 rounded">
                  <div className="font-bold text-purple-800">VastaiTech (China)</div>
                  <div className="text-sm text-purple-600">VA1 chips, training workload specialty</div>
                </div>
                <div className="bg-white p-3 rounded">
                  <div className="font-bold text-purple-800">MetaX (China)</div>
                  <div className="text-sm text-purple-600">C500 series, enterprise AI infrastructure</div>
                </div>
              </div>
              
              <h4 className="font-bold text-purple-900 mb-3">TSMC Ecosystem Access:</h4>
              <div className="space-y-1 text-sm text-purple-700">
                <div>• Advanced packaging & silicon partnerships</div>
                <div>• Custom chip design consultation & sourcing</div>
                <div>• Next-generation architecture early access</div>
                <div>• Manufacturing capacity allocation negotiation</div>
              </div>
            </div>
          </div>
          
          {/* Crisis Procurement Methodology */}
          <div className="bg-red-50 border-2 border-red-200 p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-red-900 mb-6 text-center">🚨 Emergency AI Hardware Procurement Protocol</h3>
            <p className="text-red-800 text-center mb-8 text-lg">When your AI initiative launch depends on immediate GPU access, our crisis procurement methodology delivers results in 2-8 weeks vs 12-24 week traditional channels.</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">1</div>
                <h4 className="font-bold text-red-900 mb-2">Emergency Assessment</h4>
                <p className="text-sm text-red-700">24-hour requirement analysis and alternative sourcing evaluation</p>
              </div>
              <div className="text-center">
                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">2</div>
                <h4 className="font-bold text-red-900 mb-2">Global Inventory Scan</h4>
                <p className="text-sm text-red-700">Real-time availability check across 47-country network</p>
              </div>
              <div className="text-center">
                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">3</div>
                <h4 className="font-bold text-red-900 mb-2">Expedited Contracting</h4>
                <p className="text-sm text-red-700">Pre-negotiated agreements enable same-day purchase orders</p>
              </div>
              <div className="text-center">
                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">4</div>
                <h4 className="font-bold text-red-900 mb-2">Logistics Coordination</h4>
                <p className="text-sm text-red-700">White-glove delivery with customs pre-clearance and tracking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Qualification & Authority Gateway */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Schedule Your Zero-Risk AI Hardware Procurement Assessment
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Enterprise qualification process to match your AI initiative with the optimal commission-based sourcing strategy. No upfront fees, no commitments – only pay when we deliver results.
            </p>
            
            {/* Authority Proof Points */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
                <div className="text-sm text-gray-300">Emergency Response</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-400 mb-1">$50M+</div>
                <div className="text-sm text-gray-300">Professional Liability</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-2xl font-bold text-yellow-400 mb-1">ISO</div>
                <div className="text-sm text-gray-300">Security Certified</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-400 mb-1">NDA</div>
                <div className="text-sm text-gray-300">Confidentiality Guaranteed</div>
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Qualification Form */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Enterprise Qualification Form</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Company Name *</label>
                    <input type="text" required className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none border border-gray-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Your Role *</label>
                    <select required className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none border border-gray-600">
                      <option value="">Select your role</option>
                      <option>CTO / Chief Technology Officer</option>
                      <option>CEO / Founder</option>
                      <option>VP Engineering / AI</option>
                      <option>Procurement Director</option>
                      <option>Infrastructure Lead</option>
                      <option>Other C-Suite Executive</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Company Size *</label>
                    <select required className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none border border-gray-600">
                      <option value="">Select company size</option>
                      <option>Startup (1-50 employees)</option>
                      <option>Growth Stage (51-500 employees)</option>
                      <option>Mid-Market (501-5,000 employees)</option>
                      <option>Enterprise (5,001-50,000 employees)</option>
                      <option>Fortune 500 (50,000+ employees)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">AI Initiative Type *</label>
                    <select required className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none border border-gray-600">
                      <option value="">Select initiative type</option>
                      <option>LLM Training Infrastructure</option>
                      <option>AI Inference Deployment</option>
                      <option>Machine Learning Research</option>
                      <option>Computer Vision Processing</option>
                      <option>Multi-Modal AI Development</option>
                      <option>Enterprise AI Integration</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Specific Hardware Requirements *</label>
                  <textarea required className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none h-24 border border-gray-600" placeholder="Describe your AI hardware needs:
• GPU types (H100, A100, A6000, etc.)
• Quantities needed
• Memory requirements
• Performance specifications
• Special configurations"></textarea>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Timeline Urgency *</label>
                    <select required className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none border border-gray-600">
                      <option value="">Select timeline</option>
                      <option>Emergency (1-4 weeks) - Crisis procurement</option>
                      <option>Urgent (1-2 months) - Fast-track delivery</option>
                      <option>Strategic (3-6 months) - Planned expansion</option>
                      <option>Planning (6+ months) - Future requirements</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Budget Range *</label>
                    <select required className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none border border-gray-600">
                      <option value="">Select budget range</option>
                      <option>$1M - $2.5M</option>
                      <option>$2.5M - $5M</option>
                      <option>$5M - $10M</option>
                      <option>$10M - $25M</option>
                      <option>$25M+ (Enterprise Scale)</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Current Procurement Challenges</label>
                  <textarea className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none h-20 border border-gray-600" placeholder="What challenges are you facing with traditional procurement?
• Lead time constraints
• Premium pricing
• Allocation shortages
• Budget approvals
• Technical specifications"></textarea>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Email *</label>
                    <input type="email" required className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none border border-gray-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Phone (Optional)</label>
                    <input type="tel" className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none border border-gray-600" />
                  </div>
                </div>
                
                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all shadow-lg">
                  🚀 Schedule Zero-Risk Assessment – No Upfront Fees
                </button>
                
                <div className="text-center text-sm text-gray-400">
                  Typical response time: <strong className="text-white">2-4 hours</strong> for qualified enterprises
                </div>
              </form>
            </div>
            
            {/* What Happens Next Section */}
            <div className="space-y-8">
              <div className="bg-blue-900/50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-300">🗓️ What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-blue-200 mb-1">Rapid Qualification (2-4 hours)</h4>
                      <p className="text-blue-100 text-sm">Our team reviews your requirements and matches them with optimal sourcing strategies from our global network.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-blue-200 mb-1">Strategic Consultation (30-45 min)</h4>
                      <p className="text-blue-100 text-sm">Deep-dive discussion on your AI initiative, technical requirements, and timeline optimization opportunities.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-blue-200 mb-1">Custom Procurement Plan</h4>
                      <p className="text-blue-100 text-sm">Detailed sourcing strategy with pricing analysis, timeline projections, and commission structure proposal.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-900/50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-300">🛡️ Zero Risk Guarantee</h3>
                <div className="space-y-3 text-green-100">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-bold">✓</span>
                    <span><strong>No Upfront Fees:</strong> Commission paid only on successful delivery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-bold">✓</span>
                    <span><strong>No Long-Term Contracts:</strong> Project-based engagement with clear deliverables</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-bold">✓</span>
                    <span><strong>Confidentiality Assured:</strong> NDA signed before any technical discussions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-bold">✓</span>
                    <span><strong>Performance Guaranteed:</strong> 95% success rate with enterprise clients</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-900/50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-300">🎆 Enterprise Testimonial</h3>
                <div className="text-purple-100 italic mb-4">
                  "Vommuli delivered 480 H100 GPUs in 3 weeks when our traditional distributor quoted 18 weeks. The commission model saved us $2.3M compared to flat-fee consultants, and their geographic arbitrage reduced hardware costs by 28%. Critical for our Q4 model training deadline."
                </div>
                <div className="text-purple-300 font-semibold">- CTO, AI Infrastructure Startup ($847M valuation)</div>
                <div className="text-xs text-purple-400 mt-2">*Client confidentiality maintained per enterprise NDA requirements</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2">© 2024 Vommuli - AI Hardware Specialists</p>
          <p className="text-sm">Commission-based GPU procurement with 25+ years global sourcing experience</p>
        </div>
      </footer>
    </div>
  )
}

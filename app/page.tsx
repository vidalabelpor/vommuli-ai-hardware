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
      <header className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Dynamic Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            {/* Emergency Contact Bar */}
            <div className="mb-6 p-3 bg-red-600 rounded-lg inline-block">
              <span className="text-white font-semibold">🚨 Emergency GPU Procurement Hotline: Available 24/7 for Critical AI Infrastructure</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight" style={{textShadow: '0 4px 8px rgba(0,0,0,0.3)'}}>
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                We get you AI hardware
              </span>
              <span className="block bg-gradient-to-r from-blue-200 via-white to-blue-100 bg-clip-text text-transparent">
                faster than anyone else
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl mt-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-extrabold">
                with zero upfront risk
              </span>
            </h1>
            
            {/* Enhanced Authority Subtitle */}
            <p className="text-xl sm:text-2xl mb-8 text-slate-200 max-w-5xl mx-auto font-medium leading-relaxed">
              Commission-based GPU procurement specialists with <strong>25+ years global sourcing experience</strong>, 
              <strong>$2.4B+ total hardware sourced</strong> across <strong>47 countries</strong>, serving enterprise clients from startups to Fortune 500
            </p>
            
            {/* Market Crisis Context */}
            <div className="relative bg-gradient-to-r from-red-900/30 via-red-800/20 to-orange-900/30 backdrop-blur-sm border border-red-500/30 p-8 rounded-2xl mb-10 max-w-4xl mx-auto shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-600/10 rounded-2xl"></div>
              <div className="relative">
                <p className="text-lg text-red-100 mb-4 font-semibold">
                <strong>GPU Shortage Crisis:</strong> Traditional procurement fails when NVIDIA allocation shortages create 60-100% MSRP premiums and 12-24 week delays that kill competitive AI initiatives
              </p>
                <p className="text-orange-100 font-medium">
                  <strong>Our Solution:</strong> Alternative allocation access + geographic arbitrage + crisis procurement methodology = 2-8 week delivery with 15-60% cost savings
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
              <Link href="/contact" className="group relative overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-orange-500 hover:from-red-700 hover:via-red-600 hover:to-orange-600 text-white font-bold py-5 px-10 rounded-2xl text-lg transition-all duration-300 text-center shadow-2xl hover:shadow-red-500/50 transform hover:scale-105">
                <span className="relative z-10">🚨 Schedule Emergency Procurement Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Link>
              <Link href="/tools/commission-calculator" className="group relative overflow-hidden border-2 border-cyan-400 bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400 hover:text-slate-900 font-bold py-5 px-10 rounded-2xl text-lg transition-all duration-300 text-center backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-400/50 transform hover:scale-105">
                <span className="relative z-10">💰 Calculate Commission Savings vs Flat-Fee Consultants</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Link>
            </div>
            
            {/* Enhanced Trust Signals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm max-w-5xl mx-auto">
              <div className="group flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm border border-emerald-400/30 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:border-emerald-400/60">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <span className="text-emerald-100 font-medium">Success-based fees prove our confidence in delivery</span>
              </div>
              <div className="group flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm border border-blue-400/30 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/60">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <span className="text-blue-100 font-medium">95% transaction success rate with enterprise clients</span>
              </div>
              <div className="group flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm border border-purple-400/30 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:border-purple-400/60">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <span className="text-purple-100 font-medium">Professional liability insurance & business credentials</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Quantifiable Authority & Competitive Superiority */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 60 60" preserveAspectRatio="none">
            <defs>
              <pattern id="dots" width="6" height="6" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1" fill="rgba(59, 130, 246, 0.2)"/>
              </pattern>
            </defs>
            <rect width="60" height="60" fill="url(#dots)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-bold tracking-wider uppercase mb-4">
              Competitive Superiority Analysis
            </div>
            <h2 className="text-5xl sm:text-6xl font-black text-slate-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Why Fortune 500 CTOs Choose
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Commission-Based Over Traditional
              </span>
            </h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
              While traditional flat-fee consultants charge upfront regardless of results, our success-only model with <span className="text-blue-600 font-bold">25+ years global sourcing expertise</span> delivers quantifiable enterprise advantages
            </p>
            
            {/* Competitive Comparison Table */}
            <div className="relative bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl mb-16 max-w-6xl mx-auto border border-slate-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5 rounded-3xl"></div>
              <div className="relative">
                <h3 className="text-3xl font-black text-slate-900 mb-8 text-center">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Commission-Based vs Traditional Procurement
                  </span>
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b-2 border-slate-300">
                        <th className="py-4 px-6 font-black text-slate-800 text-lg">Factor</th>
                        <th className="py-4 px-6 font-black text-emerald-700 text-lg bg-gradient-to-r from-emerald-50 to-green-50 rounded-l-xl">Vommuli Commission-Based</th>
                        <th className="py-4 px-6 font-black text-red-700 text-lg bg-gradient-to-r from-red-50 to-rose-50 rounded-r-xl">Traditional Flat-Fee Consultants</th>
                      </tr>
                    </thead>
                    <tbody className="text-base">
                      <tr className="border-b border-slate-200 hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 px-6 font-bold text-slate-800">Upfront Risk</td>
                        <td className="py-4 px-6 text-emerald-700 font-semibold bg-emerald-50/50">$0 - Success-only fees</td>
                        <td className="py-4 px-6 text-red-700 font-semibold bg-red-50/50">$50K-$200K+ regardless of results</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 px-6 font-bold text-slate-800">Delivery Speed</td>
                        <td className="py-4 px-6 text-emerald-700 font-semibold bg-emerald-50/50">2-8 weeks (crisis procurement)</td>
                        <td className="py-4 px-6 text-red-700 font-semibold bg-red-50/50">12-24 weeks (traditional channels)</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 px-6 font-bold text-slate-800">Geographic Reach</td>
                        <td className="py-4 px-6 text-emerald-700 font-semibold bg-emerald-50/50">47 countries, $2.4B+ sourced</td>
                        <td className="py-4 px-6 text-red-700 font-semibold bg-red-50/50">Limited to regional distributors</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 px-6 font-bold text-slate-800">Success Incentive</td>
                        <td className="py-4 px-6 text-emerald-700 font-semibold bg-emerald-50/50">95% completion rate (aligned incentives)</td>
                        <td className="py-4 px-6 text-red-700 font-semibold bg-red-50/50">No completion guarantees</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 px-6 font-bold text-slate-800">Total Project Cost</td>
                        <td className="py-4 px-6 text-emerald-700 font-semibold bg-emerald-50/50">20-40% lower with arbitrage savings</td>
                        <td className="py-4 px-6 text-red-700 font-semibold bg-red-50/50">Full MSRP + consultant fees</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Metrics Grid */}
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <div className="group relative text-center p-10 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-emerald-200 hover:border-emerald-400 transition-all duration-500 hover:shadow-emerald-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-green-500/5 to-emerald-600/5 rounded-3xl"></div>
              <div className="relative">
                <div className="text-6xl font-black bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-700 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">$2.4B+</div>
                <div className="text-slate-900 font-bold text-2xl mb-4">Total Hardware Sourced</div>
                <div className="text-slate-600 leading-relaxed">Across 850+ enterprise projects spanning AI startups to Fortune 500 infrastructure</div>
              </div>
            </div>
            <div className="group relative text-center p-10 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-blue-200 hover:border-blue-400 transition-all duration-500 hover:shadow-blue-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-blue-600/5 rounded-3xl"></div>
              <div className="relative">
                <div className="text-6xl font-black bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">47</div>
                <div className="text-slate-900 font-bold text-2xl mb-4">Countries in Network</div>
                <div className="text-slate-600 leading-relaxed">Global supplier relationships enabling alternative allocation access and geographic arbitrage</div>
              </div>
            </div>
            <div className="group relative text-center p-10 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-red-200 hover:border-red-400 transition-all duration-500 hover:shadow-red-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-rose-500/5 to-red-600/5 rounded-3xl"></div>
              <div className="relative">
                <div className="text-6xl font-black bg-gradient-to-r from-red-600 via-rose-500 to-red-700 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">95%</div>
                <div className="text-slate-900 font-bold text-2xl mb-4">Success Rate</div>
                <div className="text-slate-600 leading-relaxed">Transaction completion rate for qualified enterprise prospects with performance guarantees</div>
              </div>
            </div>
          </div>
          
          {/* Speed & Cost Advantage Details */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group relative bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 p-10 rounded-3xl shadow-2xl border border-blue-200 hover:border-blue-400 transition-all duration-500 hover:shadow-blue-500/30 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">🚀</div>
                  <h3 className="text-3xl font-black bg-gradient-to-r from-blue-900 to-cyan-900 bg-clip-text text-transparent">Speed Methodology: 2-8 Week Delivery</h3>
                </div>
                <ul className="space-y-4 text-blue-900">
                  <li className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <span className="font-medium"><strong className="text-blue-800">Alternative Allocation Access:</strong> NVIDIA-independent channels via Asian suppliers (Moore Threads, VastaiTech)</span>
                  </li>
                  <li className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <span className="font-medium"><strong className="text-blue-800">Geographic Arbitrage:</strong> US-LATAM-Asia sourcing optimization for fastest availability</span>
                  </li>
                  <li className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <span className="font-medium"><strong className="text-blue-800">Crisis Procurement Protocols:</strong> Emergency inventory identification and expedited customs clearance</span>
                  </li>
                  <li className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <span className="font-medium"><strong className="text-blue-800">Pre-negotiated Contracts:</strong> Standing agreements with 15+ major distributors for immediate execution</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 p-10 rounded-3xl shadow-2xl border border-green-200 hover:border-green-400 transition-all duration-500 hover:shadow-green-500/30 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">💰</div>
                  <h3 className="text-3xl font-black bg-gradient-to-r from-green-900 to-emerald-900 bg-clip-text text-transparent">Cost Optimization: 15-60% Savings</h3>
                </div>
                <ul className="space-y-4 text-green-900">
                  <li className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <span className="font-medium"><strong className="text-green-800">Commission vs Flat Fees:</strong> Save $50K-$200K+ in upfront consultant costs</span>
                  </li>
                  <li className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <span className="font-medium"><strong className="text-green-800">Geographic Price Arbitrage:</strong> 15-60% hardware cost savings via optimal sourcing geography</span>
                  </li>
                  <li className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <span className="font-medium"><strong className="text-green-800">Volume Aggregation:</strong> Bulk purchasing power across enterprise client base</span>
                  </li>
                  <li className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <span className="font-medium"><strong className="text-green-800">Opportunity Cost Elimination:</strong> Prevent $1M-$10M+ in delayed AI initiative revenue</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global AI Hardware Procurement Authority */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <radialGradient id="radial" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <circle cx="20" cy="20" r="15" fill="url(#radial)"/>
            <circle cx="80" cy="40" r="20" fill="url(#radial)"/>
            <circle cx="60" cy="80" r="18" fill="url(#radial)"/>
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent text-sm font-bold tracking-wider uppercase mb-4">
              Global Sourcing Authority
            </div>
            <h2 className="text-5xl sm:text-6xl font-black text-slate-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                The World's Most Comprehensive
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                AI Hardware Sourcing Network
              </span>
            </h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
              <span className="text-blue-600 font-bold">25+ years</span> building supplier relationships across <span className="text-purple-600 font-bold">47 countries</span> enables alternative allocation access when NVIDIA shortages threaten your AI initiatives. Our geographic arbitrage methodology delivers <span className="text-emerald-600 font-bold">15-60% savings</span> while maintaining enterprise-grade supply chain security.
            </p>
            
            {/* Market Intelligence Dashboard */}
            <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white p-12 rounded-3xl mb-16 shadow-2xl border border-slate-700">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-indigo-600/10 rounded-3xl"></div>
              <div className="relative">
                <h3 className="text-3xl font-black mb-8 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Real-Time Market Intelligence & Sourcing Advantage</h3>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div className="group p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-emerald-500/30 hover:border-emerald-400">
                    <div className="text-4xl font-black bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">$40K-$50K</div>
                    <div className="text-sm text-emerald-200 font-semibold">Current H100 Premium Pricing</div>
                    <div className="text-xs text-emerald-300/70">(vs $25K-$35K NVIDIA MSRP)</div>
                  </div>
                  <div className="group p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-yellow-500/30 hover:border-yellow-400">
                    <div className="text-4xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">12-24</div>
                    <div className="text-sm text-yellow-200 font-semibold">Weeks Traditional Lead Time</div>
                    <div className="text-xs text-yellow-300/70">(US authorized distributors)</div>
                  </div>
                  <div className="group p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-blue-500/30 hover:border-blue-400">
                    <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">26%</div>
                    <div className="text-sm text-blue-200 font-semibold">Asia-US Price Arbitrage</div>
                    <div className="text-xs text-blue-300/70">(Current opportunity)</div>
                  </div>
                  <div className="group p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-red-500/30 hover:border-red-400">
                    <div className="text-4xl font-black bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">2-8</div>
                    <div className="text-sm text-red-200 font-semibold">Weeks Vommuli Delivery</div>
                    <div className="text-xs text-red-300/70">(Alternative allocation)</div>
                  </div>
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

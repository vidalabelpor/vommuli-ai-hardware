import { generateSEO } from '@/lib/seo'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = generateSEO({
  title: 'AI Hardware Procurement Services - Enterprise GPU Sourcing | Vommuli',
  description: 'Comprehensive AI hardware procurement services for enterprise clients. NVIDIA H100, A100 sourcing with commission-based pricing and global supply chain expertise.',
  keywords: [
    'AI hardware procurement services',
    'enterprise GPU sourcing',
    'NVIDIA H100 procurement',
    'NVIDIA A100 sourcing',
    'commission-based hardware procurement',
    'enterprise AI infrastructure',
    'GPU procurement specialists',
    'AI hardware supply chain'
  ]
})

export default function ServicesPage() {
  const services = [
    {
      title: "NVIDIA H100 Procurement",
      description: "Direct access to H100 GPUs through authorized distributors and alternative allocation channels",
      features: ["80GB HBM3 memory", "4TB/s memory bandwidth", "Enterprise support", "Competitive pricing"],
      href: "/services/nvidia-h100",
      icon: "🚀",
      color: "vommuli-primary"
    },
    {
      title: "NVIDIA A100 Sourcing", 
      description: "Proven A100 procurement for training and inference workloads across all market segments",
      features: ["40GB/80GB memory options", "Multi-instance GPU", "PCIe/SXM form factors", "Volume discounts"],
      href: "/services/nvidia-a100",
      icon: "🎯",
      color: "vommuli-primary"
    },
    {
      title: "Geographic Arbitrage",
      description: "Cross-border sourcing leveraging pricing differences across US-Europe-Asia markets",
      features: ["15-60% cost savings", "Currency optimization", "Import/export compliance", "Risk mitigation"],
      href: "/services/geographic-arbitrage",
      icon: "🌍",
      color: "vommuli-primary"
    },
    {
      title: "Emergency Procurement",
      description: "Crisis procurement when traditional channels fail and immediate hardware is needed",
      features: ["2-8 week delivery", "24/7 sourcing team", "Expedited logistics", "Risk-free guarantee"],
      href: "/services/emergency-procurement",
      icon: "🚨",
      color: "vommuli-primary"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Visual Impact */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-8 md:grid-cols-12 lg:grid-cols-16 h-full w-full">
              {Array.from({ length: 192 }).map((_, i) => (
                <div 
                  key={i} 
                  className="border border-green-500/20 relative group"
                  style={{
                    animationDelay: `${Math.random() * 2}s`,
                    animation: `pulse ${3 + Math.random() * 2}s ease-in-out infinite`
                  }}
                >
                  {Math.random() > 0.96 && (
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-500/20 animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12 text-center pt-20">
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 backdrop-blur-xl px-6 py-3 rounded-full mb-12">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 font-medium text-sm tracking-wide">⚡ COMMISSION-BASED PROCUREMENT SERVICES</span>
          </div>

          {/* Main Headline with Ultra-Impact Typography */}
          <h1 className="relative mb-12" style={{textShadow: '0 8px 32px rgba(0,0,0,0.5)'}}>
            <span className="block text-6xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tight">
              <span 
                className="bg-gradient-to-r from-white via-blue-50 to-gray-100 bg-clip-text text-transparent block transform hover:scale-105 transition-transform duration-700"
                style={{
                  background: 'linear-gradient(90deg, #ffffff 0%, #f0f9ff 30%, #f1f5f9 70%, #ffffff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                AI Hardware
              </span>
              <span 
                className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent block relative transform hover:scale-105 transition-transform duration-700"
                style={{
                  background: 'linear-gradient(90deg, #4ade80 0%, #10b981 50%, #059669 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Procurement
                <div className="absolute -top-6 -right-12 w-24 h-24 bg-gradient-to-br from-green-400/30 to-emerald-500/30 rounded-full blur-3xl animate-pulse"></div>
              </span>
              <span className="text-gray-300 block">Services</span>
            </span>
          </h1>

          {/* Compelling Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
            Professional <span className="text-green-400 font-semibold">GPU sourcing</span> with <span className="text-emerald-400 font-semibold">25+ years global experience</span>.
            <br className="hidden md:block" />
            Commission-based pricing <span className="text-cyan-400 font-medium">aligns our success with yours</span>.
          </p>

          {/* CTA Buttons with Ultra-Premium Styling */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
            <Link href="/contact" className="group relative transform hover:scale-110 transition-all duration-500">
              <div className="absolute -inset-2 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 group-hover:blur-xl transition-all duration-500"></div>
              <div 
                className="relative bg-gradient-to-r from-green-500 to-emerald-600 px-12 py-6 rounded-3xl font-black text-xl text-white shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
                  boxShadow: '0 20px 40px rgba(16, 185, 129, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
                }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Procurement
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </span>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </Link>
            
            <Link href="/tools/commission-calculator" className="group relative transform hover:scale-110 transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/50 to-emerald-500/50 rounded-3xl blur opacity-0 group-hover:opacity-100 group-hover:blur-lg transition-all duration-500"></div>
              <div 
                className="relative px-12 py-6 border-2 border-green-500/60 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl text-green-300 font-black text-xl rounded-3xl"
                style={{
                  backdropFilter: 'blur(20px)',
                  border: '2px solid rgba(16, 185, 129, 0.3)',
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)'
                }}
              >
                <span className="relative z-10 flex items-center gap-3 group-hover:text-green-200 transition-colors duration-300">
                  Calculate Savings
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Metrics with Ultra-Premium Visual Impact */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5"></div>
        
        <div className="relative max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 font-medium text-sm">TRUSTED WORLDWIDE</span>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed">Enterprise clients trust our commission-based approach</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
            <div className="group relative text-center p-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl hover:bg-white/15 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400/30 to-emerald-500/30 rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-500"></div>
              <div className="relative z-10">
                <div 
                  className="text-4xl md:text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500"
                  style={{
                    background: 'linear-gradient(135deg, #4ade80 0%, #10b981 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 4px 20px rgba(16, 185, 129, 0.3)'
                  }}
                >
                  850+
                </div>
                <div className="text-gray-300 font-semibold tracking-wide group-hover:text-white transition-colors duration-300">Projects Completed</div>
                <div className="mt-4 h-1.5 w-12 mx-auto bg-gradient-to-r from-green-400 to-emerald-500 rounded-full group-hover:w-16 group-hover:h-2 transition-all duration-500 shadow-lg shadow-green-500/50"></div>
              </div>
            </div>
            
            <div className="group relative text-center p-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl hover:bg-white/15 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-400/30 to-cyan-500/30 rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-500"></div>
              <div className="relative z-10">
                <div 
                  className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500"
                  style={{
                    background: 'linear-gradient(135deg, #34d399 0%, #22d3ee 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 4px 20px rgba(52, 211, 153, 0.3)'
                  }}
                >
                  47
                </div>
                <div className="text-gray-300 font-semibold tracking-wide group-hover:text-white transition-colors duration-300">Countries</div>
                <div className="mt-4 h-1.5 w-12 mx-auto bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full group-hover:w-16 group-hover:h-2 transition-all duration-500 shadow-lg shadow-emerald-500/50"></div>
              </div>
            </div>
            
            <div className="group relative text-center p-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl hover:bg-white/15 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-500"></div>
              <div className="relative z-10">
                <div 
                  className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500"
                  style={{
                    background: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 4px 20px rgba(34, 211, 238, 0.3)'
                  }}
                >
                  $2.4B+
                </div>
                <div className="text-gray-300 font-semibold tracking-wide group-hover:text-white transition-colors duration-300">Hardware Sourced</div>
                <div className="mt-4 h-1.5 w-12 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full group-hover:w-16 group-hover:h-2 transition-all duration-500 shadow-lg shadow-cyan-500/50"></div>
              </div>
            </div>
            
            <div className="group relative text-center p-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl hover:bg-white/15 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-500"></div>
              <div className="relative z-10">
                <div 
                  className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500"
                  style={{
                    background: 'linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 4px 20px rgba(96, 165, 250, 0.3)'
                  }}
                >
                  95%
                </div>
                <div className="text-gray-300 font-semibold tracking-wide group-hover:text-white transition-colors duration-300">Success Rate</div>
                <div className="mt-4 h-1.5 w-12 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full group-hover:w-16 group-hover:h-2 transition-all duration-500 shadow-lg shadow-blue-500/50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with Advanced Cards */}
      <section className="py-32 bg-black relative">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 font-medium text-sm">OUR SERVICES</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Commission-based <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">procurement</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Enterprise AI infrastructure services designed for speed, efficiency, and results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const gradientColors = [
                { from: 'green-400', to: 'emerald-500', shadow: 'green-500/40', bg: 'green-500/30' },
                { from: 'emerald-400', to: 'cyan-500', shadow: 'emerald-500/40', bg: 'emerald-500/30' },
                { from: 'cyan-400', to: 'blue-500', shadow: 'cyan-500/40', bg: 'cyan-500/30' },
                { from: 'blue-400', to: 'purple-500', shadow: 'blue-500/40', bg: 'blue-500/30' }
              ][index % 4];
              
              return (
                <div key={index} className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 hover:bg-white/15 transform hover:scale-105 hover:-translate-y-3 transition-all duration-700 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-${gradientColors.from}/30 to-${gradientColors.to}/30 rounded-full blur-3xl group-hover:w-40 group-hover:h-40 transition-all duration-700`}></div>
                  <div className={`absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-br from-${gradientColors.from}/20 to-${gradientColors.to}/20 rounded-full blur-2xl group-hover:w-28 group-hover:h-28 transition-all duration-700`}></div>
                  <div className="relative z-10">
                    <div 
                      className={`w-20 h-20 bg-gradient-to-br from-${gradientColors.from} to-${gradientColors.to} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-${gradientColors.shadow}`}
                      style={{
                        background: index === 0 ? 'linear-gradient(135deg, #4ade80 0%, #10b981 100%)' :
                                    index === 1 ? 'linear-gradient(135deg, #34d399 0%, #22d3ee 100%)' :
                                    index === 2 ? 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)' :
                                    'linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)',
                        boxShadow: '0 20px 40px rgba(16, 185, 129, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
                      }}
                    >
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                    <h3 className={`text-3xl font-black text-white mb-6 group-hover:text-${gradientColors.from} transition-colors duration-300`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300 mb-8">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                          <div className={`w-2 h-2 bg-${gradientColors.from} rounded-full mr-4 animate-pulse`}></div>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href={service.href}
                      className={`group/link inline-flex items-center gap-3 text-${gradientColors.from} font-bold text-lg hover:text-${gradientColors.to} transition-colors duration-300`}
                    >
                      <span>Learn More</span>
                      <div className="relative overflow-hidden">
                        <svg className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work Section with Asymmetrical Layout */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5"></div>
        
        <div className="relative max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 font-medium text-sm">HOW WE WORK</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
              <span className="text-white">Commission-based</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">model that works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Aligned incentives deliver better results than traditional flat-fee consulting
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Our Process */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black text-white mb-8">Our Process</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                    Commission structure ensures maximum urgency and alignment for delivery
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/30">
                        <span className="text-white font-black text-xl">1</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-3">Assessment</h4>
                        <p className="text-gray-400 leading-relaxed">Analyze requirements and identify optimal sourcing strategy</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/30">
                        <span className="text-white font-black text-xl">2</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-3">Sourcing</h4>
                        <p className="text-gray-400 leading-relaxed">Leverage global network to find best pricing and availability</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/30">
                        <span className="text-white font-black text-xl">3</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-3">Execution</h4>
                        <p className="text-gray-400 leading-relaxed">Manage procurement and logistics end-to-end</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                        <span className="text-white font-black text-xl">4</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-3">Delivery</h4>
                        <p className="text-gray-400 leading-relaxed">White-glove delivery and installation support</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12 text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20">
                    <div className="text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2">
                      2-8 weeks
                    </div>
                    <div className="text-gray-300 font-medium">Average delivery time</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Commission-Based */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black text-white mb-8">Why Commission-Based</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                    Aligned incentives deliver superior results and complete risk mitigation
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-3">Zero upfront risk</h4>
                        <p className="text-gray-400 leading-relaxed">Pay only when hardware is delivered successfully</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-3">Aligned incentives</h4>
                        <p className="text-gray-400 leading-relaxed">Our success depends entirely on your success</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-3">Maximum urgency</h4>
                        <p className="text-gray-400 leading-relaxed">Commission structure drives speed and results</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-3">Transparent pricing</h4>
                        <p className="text-gray-400 leading-relaxed">3-8% commission on successful procurement only</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12 text-center p-6 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl border border-emerald-500/20">
                    <div className="text-4xl font-black bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent mb-2">
                      95%
                    </div>
                    <div className="text-gray-300 font-medium">Success rate with enterprise clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits with Premium Cards */}
      <section className="py-32 bg-black relative">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 font-medium text-sm">KEY BENEFITS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Why enterprise clients choose <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">our approach</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Commission-based procurement delivers superior results over traditional consulting
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 hover:bg-white/15 transform hover:scale-105 hover:-translate-y-3 transition-all duration-700 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/30 to-emerald-500/30 rounded-full blur-3xl group-hover:w-40 group-hover:h-40 transition-all duration-700"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-full blur-2xl group-hover:w-28 group-hover:h-28 transition-all duration-700"></div>
              <div className="relative z-10 text-center">
                <div 
                  className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-green-500/40"
                  style={{
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    boxShadow: '0 20px 40px rgba(16, 185, 129, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
                  }}
                >
                  <div className="w-10 h-10 bg-white rounded-2xl opacity-90"></div>
                </div>
                <h3 className="text-3xl font-black text-white mb-6 group-hover:text-green-300 transition-colors duration-300">
                  Faster Delivery
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                  <span className="text-green-400 font-bold">2-8 weeks</span> average delivery vs <span className="text-gray-500">12-24 weeks</span> traditional procurement.
                  <br className="mt-2" />
                  Commission structure drives maximum urgency.
                </p>
                <div className="mt-8 flex items-center justify-center gap-3 text-green-400 group-hover:text-green-300 transition-colors duration-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">5x Faster</span>
                </div>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 hover:bg-white/15 transform hover:scale-105 hover:-translate-y-3 transition-all duration-700 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/30 to-cyan-500/30 rounded-full blur-3xl group-hover:w-40 group-hover:h-40 transition-all duration-700"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-cyan-600/20 rounded-full blur-2xl group-hover:w-28 group-hover:h-28 transition-all duration-700"></div>
              <div className="relative z-10 text-center">
                <div 
                  className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-emerald-500/40"
                  style={{
                    background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
                    boxShadow: '0 20px 40px rgba(16, 185, 129, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
                  }}
                >
                  <div className="w-10 h-10 bg-white rounded-2xl opacity-90"></div>
                </div>
                <h3 className="text-3xl font-black text-white mb-6 group-hover:text-emerald-300 transition-colors duration-300">
                  Cost Savings
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                  <span className="text-emerald-400 font-bold">15-60% savings</span> through geographic arbitrage and alternative allocation.
                  <br className="mt-2" />
                  Zero upfront consultant fees.
                </p>
                <div className="mt-8 flex items-center justify-center gap-3 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Massive Savings</span>
                </div>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 hover:bg-white/15 transform hover:scale-105 hover:-translate-y-3 transition-all duration-700 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl group-hover:w-40 group-hover:h-40 transition-all duration-700"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-2xl group-hover:w-28 group-hover:h-28 transition-all duration-700"></div>
              <div className="relative z-10 text-center">
                <div 
                  className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-cyan-500/40"
                  style={{
                    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                    boxShadow: '0 20px 40px rgba(6, 182, 212, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
                  }}
                >
                  <div className="w-10 h-10 bg-white rounded-2xl opacity-90"></div>
                </div>
                <h3 className="text-3xl font-black text-white mb-6 group-hover:text-cyan-300 transition-colors duration-300">
                  Zero Risk
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                  <span className="text-cyan-400 font-bold">No upfront fees</span>, no retainers. Pay only when hardware is delivered successfully to your specifications.
                </p>
                <div className="mt-8 flex items-center justify-center gap-3 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">100% Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Dramatic Styling */}
      <section className="py-32 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="grid grid-cols-6 md:grid-cols-12 h-full w-full">
            {Array.from({ length: 72 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-white/10 relative"
                style={{
                  animationDelay: `${Math.random() * 3}s`,
                  animation: `pulse ${4 + Math.random() * 2}s ease-in-out infinite`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            Ready to accelerate your
            <br />
            <span className="bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
              AI infrastructure?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-green-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Get started with a free consultation. No commitment required.
            <br />
            Expert hardware sourcing begins immediately.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
            <Link href="/contact" className="group relative inline-flex items-center">
              <div className="absolute -inset-2 bg-gradient-to-r from-white via-green-100 to-white rounded-3xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white text-green-700 px-12 py-6 rounded-3xl font-black text-xl transform group-hover:scale-105 transition-all duration-300 flex items-center gap-4">
                Start Your Procurement
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
            
            <Link href="/tools/commission-calculator" className="group relative inline-flex items-center">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-green-100/30 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative border-2 border-white/40 bg-white/10 backdrop-blur-xl text-white px-12 py-6 rounded-3xl font-black text-xl transform group-hover:scale-105 transition-all duration-300 flex items-center gap-4">
                Calculate Savings
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-12 max-w-2xl mx-auto">
            <div className="text-center group">
              <div className="text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">$0</div>
              <div className="text-green-100/80 font-medium">Upfront cost</div>
              <div className="mt-2 h-1 w-8 mx-auto bg-white/40 rounded-full group-hover:w-12 group-hover:bg-white transition-all duration-300"></div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">2-8</div>
              <div className="text-green-100/80 font-medium">Weeks delivery</div>
              <div className="mt-2 h-1 w-8 mx-auto bg-white/40 rounded-full group-hover:w-12 group-hover:bg-white transition-all duration-300"></div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
              <div className="text-green-100/80 font-medium">Success rate</div>
              <div className="mt-2 h-1 w-8 mx-auto bg-white/40 rounded-full group-hover:w-12 group-hover:bg-white transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
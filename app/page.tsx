import { generateSEO } from '@/lib/seo'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = generateSEO({
  title: 'AI Hardware Specialists - Enterprise GPU Procurement | Vommuli',
  description: 'Professional AI hardware procurement with 25+ years global sourcing experience. Commission-based GPU sourcing for enterprise clients.',
  keywords: [
    'AI hardware procurement',
    'GPU sourcing specialists', 
    'enterprise AI hardware',
    'commission-based procurement',
    'NVIDIA H100 procurement',
    'enterprise GPU sourcing',
    'AI infrastructure procurement'
  ]
})

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sophisticated Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 via-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/25">
                  <span className="text-white font-black text-lg">V</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <span className="ml-4 text-2xl font-black tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Vommuli
              </span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-12">
              <Link href="/services" className="group relative text-gray-300 hover:text-white transition-all duration-300">
                <span>Services</span>
                <div className="absolute -bottom-2 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-300"></div>
              </Link>
              <Link href="/about" className="group relative text-gray-300 hover:text-white transition-all duration-300">
                <span>About</span>
                <div className="absolute -bottom-2 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-300"></div>
              </Link>
              <Link href="/pricing" className="group relative text-gray-300 hover:text-white transition-all duration-300">
                <span>Pricing</span>
                <div className="absolute -bottom-2 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-300"></div>
              </Link>
              <Link href="/contact" className="group relative text-gray-300 hover:text-white transition-all duration-300">
                <span>Contact</span>
                <div className="absolute -bottom-2 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-300"></div>
              </Link>
              <Link href="/contact" className="group relative bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-3 rounded-2xl font-semibold text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transform hover:scale-105 transition-all duration-300">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Visual Impact */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="absolute inset-0 opacity-30">
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
                  {Math.random() > 0.95 && (
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
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 backdrop-blur-xl px-6 py-3 rounded-full mb-12">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 font-medium text-sm tracking-wide">⚡ GLOBAL HARDWARE NETWORK ACTIVE</span>
          </div>

          {/* Main Headline with Custom Typography */}
          <h1 className="relative">
            <span className="block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent block">
                AI Hardware
              </span>
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent block relative">
                Specialists
                <div className="absolute -top-4 -right-8 w-20 h-20 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
              </span>
            </span>
          </h1>

          {/* Compelling Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
            We source <span className="text-green-400 font-semibold">enterprise AI hardware</span> faster than anyone else.
            <br className="hidden md:block" />
            <span className="text-emerald-400">25+ years global experience.</span> <span className="text-cyan-400">$2.4B+ sourced.</span> <span className="text-white font-medium">Zero upfront risk.</span>
          </p>

          {/* CTA Buttons with Advanced Styling */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Link href="/contact" className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 px-10 py-5 rounded-2xl font-bold text-lg text-white shadow-xl transform group-hover:scale-105 transition-all duration-300">
                Start Emergency Procurement
                <div className="absolute top-0 left-0 w-full h-full bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
            
            <Link href="/tools/commission-calculator" className="group relative px-10 py-5 border-2 border-green-500/50 bg-green-500/10 backdrop-blur-xl text-green-300 font-bold text-lg rounded-2xl hover:border-green-400 hover:bg-green-500/20 hover:text-green-200 transform group-hover:scale-105 transition-all duration-300">
              Calculate Your Savings
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Trust Metrics with Visual Impact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group text-center p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                $2.4B+
              </div>
              <div className="text-gray-400 font-medium tracking-wide">Hardware Sourced</div>
              <div className="mt-4 h-1 w-12 mx-auto bg-gradient-to-r from-green-400 to-emerald-500 rounded-full group-hover:w-20 transition-all duration-300"></div>
            </div>
            
            <div className="group text-center p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl font-black bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                47
              </div>
              <div className="text-gray-400 font-medium tracking-wide">Countries</div>
              <div className="mt-4 h-1 w-12 mx-auto bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full group-hover:w-20 transition-all duration-300"></div>
            </div>
            
            <div className="group text-center p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                25+
              </div>
              <div className="text-gray-400 font-medium tracking-wide">Years Experience</div>
              <div className="mt-4 h-1 w-12 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full group-hover:w-20 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Asymmetrical Layout */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5"></div>
        
        <div className="relative max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 font-medium text-sm">HOW WE WORK</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
                <span className="text-white">Commission-based</span>
                <br />
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">procurement</span>
                <br />
                <span className="text-gray-300">that works</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                We only succeed when you do. Our commission structure aligns our incentives 
                with finding you the best hardware at the best prices, fastest.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Zero upfront costs</h4>
                    <p className="text-gray-400 leading-relaxed">Pay only when hardware is delivered and verified</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Transparent pricing</h4>
                    <p className="text-gray-400 leading-relaxed">3-8% commission on successful procurement</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Global network</h4>
                    <p className="text-gray-400 leading-relaxed">Direct relationships with suppliers worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="text-6xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
                      2-8 weeks
                    </div>
                    <div className="text-gray-300 text-lg font-medium">Average delivery time</div>
                  </div>
                  
                  <div className="text-center text-gray-500 text-lg mb-6">vs.</div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-500 mb-2">12-24 weeks</div>
                    <div className="text-gray-600">Traditional procurement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with Advanced Cards */}
      <section className="py-32 bg-black relative">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Specialized AI hardware procurement across every major technology category
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <div className="w-8 h-8 bg-white rounded-xl"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">
                  GPU Procurement
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  NVIDIA H100, A100, and enterprise GPUs sourced through our global network. 
                  Faster delivery times at competitive prices.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <div className="w-8 h-8 bg-white rounded-xl"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                  Geographic Arbitrage
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Strategic sourcing across 47 countries to find the best prices and 
                  availability for your specific requirements.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <div className="w-8 h-8 bg-white rounded-xl"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  Emergency Response
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  24/7 crisis procurement for urgent hardware needs. 
                  Dedicated team for time-critical deployments.
                </p>
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
            Expert hardware sourcing begins immediately.
          </p>
          
          <Link href="/contact" className="group relative inline-flex items-center">
            <div className="absolute -inset-2 bg-gradient-to-r from-white via-green-100 to-white rounded-3xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-white text-green-700 px-12 py-6 rounded-3xl font-black text-xl transform group-hover:scale-105 transition-all duration-300 flex items-center gap-4">
              Start Your Procurement
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
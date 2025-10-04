import { generateSEO } from '@/lib/seo'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

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
      {/* Professional Hero Section with Data Center Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Professional Data Center Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(30, 58, 138, 0.75)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23000015" width="1200" height="800"/><g fill="%23001122"><circle cx="200" cy="150" r="3" opacity="0.8"/><circle cx="400" cy="200" r="2" opacity="0.6"/><circle cx="600" cy="100" r="3" opacity="0.9"/><circle cx="800" cy="250" r="2" opacity="0.7"/><circle cx="1000" cy="180" r="3" opacity="0.8"/><rect x="50" y="400" width="80" height="60" rx="4" opacity="0.3"/><rect x="150" y="350" width="80" height="110" rx="4" opacity="0.4"/><rect x="250" y="380" width="80" height="80" rx="4" opacity="0.3"/><rect x="350" y="320" width="80" height="140" rx="4" opacity="0.5"/><rect x="450" y="360" width="80" height="100" rx="4" opacity="0.4"/><rect x="550" y="340" width="80" height="120" rx="4" opacity="0.3"/><rect x="650" y="300" width="80" height="160" rx="4" opacity="0.5"/><rect x="750" y="370" width="80" height="90" rx="4" opacity="0.4"/><rect x="850" y="330" width="80" height="130" rx="4" opacity="0.3"/><rect x="950" y="350" width="80" height="110" rx="4" opacity="0.4"/><rect x="1050" y="320" width="80" height="140" rx="4" opacity="0.5"/></g></svg>')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 z-10 opacity-20">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Emergency Alert Banner */}
          <div className="inline-flex items-center gap-3 bg-red-600/90 backdrop-blur-sm border border-red-400/50 text-white px-6 py-3 rounded-full mb-8 shadow-2xl">
            <div className="w-2 h-2 bg-red-300 rounded-full animate-pulse"></div>
            <span className="font-semibold text-sm">🚨 Emergency GPU Procurement: 24/7 Crisis Response Available</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-tight" 
              style={{textShadow: '0 8px 32px rgba(0,0,0,0.5)'}}>
            <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent"
                  style={{
                    background: 'linear-gradient(90deg, #ffffff 0%, #dbeafe 50%, #a5f3fc 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
              We deliver AI hardware
            </span>
            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
                  style={{
                    background: 'linear-gradient(90deg, #34d399 0%, #22d3ee 50%, #60a5fa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
              faster than anyone else
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Commission-based GPU procurement specialists with <span className="font-semibold text-cyan-300">25+ years experience</span>, 
            <span className="font-semibold text-emerald-300"> $2.4B+ sourced</span> across <span className="font-semibold text-blue-300">47 countries</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-2xl text-lg shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
              style={{boxShadow: '0 20px 40px rgba(239, 68, 68, 0.3)'}}
            >
              <span className="relative z-10">🚨 Emergency Procurement</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-orange-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link 
              href="/tools/commission-calculator"
              className="group relative px-8 py-4 border-2 border-cyan-400 bg-cyan-400/10 text-cyan-300 font-bold rounded-2xl text-lg backdrop-blur-sm hover:bg-cyan-400 hover:text-slate-900 transform hover:scale-105 transition-all duration-300"
            >
              💰 Calculate Savings
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300">
              <div className="text-2xl font-black text-emerald-400 mb-1">95%</div>
              <div className="text-sm text-blue-100">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300">
              <div className="text-2xl font-black text-cyan-400 mb-1">2-8</div>
              <div className="text-sm text-blue-100">Week Delivery</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300">
              <div className="text-2xl font-black text-blue-400 mb-1">$0</div>
              <div className="text-sm text-blue-100">Upfront Risk</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Enterprise Credibility Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-slate-600 font-medium mb-6">Trusted by Enterprise Technology Leaders</p>
            {/* Mock Client Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="w-32 h-12 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg flex items-center justify-center">
                <span className="text-slate-600 font-bold text-sm">TechCorp</span>
              </div>
              <div className="w-32 h-12 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg flex items-center justify-center">
                <span className="text-slate-600 font-bold text-sm">AI Systems</span>
              </div>
              <div className="w-32 h-12 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg flex items-center justify-center">
                <span className="text-slate-600 font-bold text-sm">DataFlow</span>
              </div>
              <div className="w-32 h-12 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg flex items-center justify-center">
                <span className="text-slate-600 font-bold text-sm">CloudNext</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional About Section with Team */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Since 1999 • 25+ Years Experience
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Global Hardware Sourcing 
                <span className="block text-blue-600">Expertise Since Day One</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Founded in the heart of Silicon Valley, we've been navigating global technology supply chains 
                since before the dot-com boom. Our team combines decades of enterprise procurement experience 
                with cutting-edge AI infrastructure knowledge.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                  <div className="text-3xl font-black text-emerald-600 mb-2">$2.4B+</div>
                  <div className="text-slate-600 text-sm">Hardware Sourced</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                  <div className="text-3xl font-black text-blue-600 mb-2">850+</div>
                  <div className="text-slate-600 text-sm">Projects Completed</div>
                </div>
              </div>

              <Link 
                href="/about"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn Our Story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Team Photo Mockup */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl aspect-square overflow-hidden shadow-2xl">
                {/* Mock Team Photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-slate-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl">
                      <span className="text-2xl font-bold text-white">V</span>
                    </div>
                    <div className="text-slate-700 font-semibold text-lg mb-2">Vommuli Team</div>
                    <div className="text-slate-500 text-sm">Global AI Hardware Specialists</div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
              </div>
              
              {/* Professional Badges */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-slate-200">
                <div className="text-center">
                  <div className="text-2xl font-black text-blue-600 mb-1">ISO</div>
                  <div className="text-xs text-slate-500">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase with Custom Graphics */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6">
              How We Deliver Hardware
              <span className="block text-blue-600">10x Faster Than Traditional</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our proprietary global network and crisis procurement methodology 
              cuts delivery time from 12-24 weeks to just 2-8 weeks.
            </p>
          </div>

          {/* Process Visualization */}
          <div className="relative mb-16">
            {/* Timeline */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 transform -translate-y-1/2"></div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl relative z-10">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Assessment</h3>
                <p className="text-slate-600 text-sm">24-hour requirement analysis and sourcing strategy</p>
              </div>

              {/* Step 2 */}
              <div className="relative text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl relative z-10">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Global Search</h3>
                <p className="text-slate-600 text-sm">47-country network inventory scan and allocation access</p>
              </div>

              {/* Step 3 */}
              <div className="relative text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl relative z-10">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Procurement</h3>
                <p className="text-slate-600 text-sm">Crisis procurement protocols and expedited contracting</p>
              </div>

              {/* Step 4 */}
              <div className="relative text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl relative z-10">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Delivery</h3>
                <p className="text-slate-600 text-sm">White-glove logistics with customs pre-clearance</p>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Emergency Procurement */}
            <div className="group relative bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-xl">🚨</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Emergency Response</h3>
              <p className="text-slate-600 mb-6">24/7 crisis procurement for mission-critical AI initiatives that can't wait.</p>
              <div className="text-3xl font-black text-red-600 mb-2">2-4 weeks</div>
              <div className="text-slate-500 text-sm mb-6">vs 12-24 weeks traditional</div>
              <Link href="/services/emergency-procurement" className="text-red-600 font-semibold hover:text-red-700 transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Standard Procurement */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Speed Procurement</h3>
              <p className="text-slate-600 mb-6">Optimized sourcing for planned AI infrastructure deployments.</p>
              <div className="text-3xl font-black text-blue-600 mb-2">4-8 weeks</div>
              <div className="text-slate-500 text-sm mb-6">vs 16-28 weeks traditional</div>
              <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Geographic Arbitrage */}
            <div className="group relative bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-xl">🌍</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Global Arbitrage</h3>
              <p className="text-slate-600 mb-6">Cost optimization through strategic geographic sourcing.</p>
              <div className="text-3xl font-black text-emerald-600 mb-2">15-60%</div>
              <div className="text-slate-500 text-sm mb-6">cost savings average</div>
              <Link href="/services/geographic-arbitrage" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials with Professional Photos */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              What Enterprise CTOs Say
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Real results from real technology leaders who trusted us with their critical AI infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Michael Chen</div>
                  <div className="text-blue-200 text-sm">CTO, DataFlow Systems</div>
                </div>
              </div>
              <p className="text-blue-100 italic mb-6">
                "Vommuli delivered 200 H100s in 3 weeks when everyone else quoted 6 months. 
                Their commission model saved us $400K vs traditional consultants."
              </p>
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">S</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Sarah Rodriguez</div>
                  <div className="text-blue-200 text-sm">VP Engineering, TechCorp</div>
                </div>
              </div>
              <p className="text-blue-100 italic mb-6">
                "The geographic arbitrage strategy alone saved us 35% on hardware costs. 
                Professional team with unmatched global supply chain expertise."
              </p>
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Alex Thompson</div>
                  <div className="text-blue-200 text-sm">CTO, CloudNext</div>
                </div>
              </div>
              <p className="text-blue-100 italic mb-6">
                "Emergency procurement when our original vendor failed. 
                Vommuli had replacement GPUs installed within 10 days. Incredible."
              </p>
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Ready to Accelerate Your AI Initiative?
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Join 850+ enterprise clients who trust us with their critical AI infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/tools/commission-calculator"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Calculate Your Savings
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
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
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Vommuli
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
              <Link href="/contact" className="bg-vommuli-primary text-white px-4 py-2 rounded-lg hover:bg-vommuli-primary/90 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              AI Hardware Specialists
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Professional GPU procurement with 25+ years global sourcing experience. 
              We deliver enterprise AI hardware faster than anyone else.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                href="/contact"
                className="bg-vommuli-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-vommuli-primary/90 transition-colors"
              >
                Start Procurement
              </Link>
              <Link 
                href="/tools/commission-calculator"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Calculate Savings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 text-lg">Trusted by enterprise clients worldwide</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-8 items-center justify-items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-vommuli-primary">$2.4B+</div>
              <div className="text-gray-600">Hardware Sourced</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-vommuli-primary">47</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-vommuli-primary">25+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Commission-based procurement that aligns our success with yours. 
              Zero upfront costs, maximum results.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="w-16 h-16 bg-vommuli-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-vommuli-primary rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">GPU Procurement</h3>
              <p className="text-gray-600">
                NVIDIA H100, A100, and enterprise GPUs sourced through our global network. 
                Faster delivery times at competitive prices.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="w-16 h-16 bg-vommuli-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-vommuli-primary rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Geographic Arbitrage</h3>
              <p className="text-gray-600">
                Strategic sourcing across 47 countries to find the best prices and 
                availability for your specific requirements.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="w-16 h-16 bg-vommuli-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-vommuli-primary rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Response</h3>
              <p className="text-gray-600">
                24/7 crisis procurement for urgent hardware needs. 
                Dedicated team for time-critical deployments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Commission-based procurement that works
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We only succeed when you do. Our commission structure aligns our incentives 
                with finding you the best hardware at the best prices, fastest.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-vommuli-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Zero upfront costs</h4>
                    <p className="text-gray-600">Pay only when hardware is delivered</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-vommuli-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Transparent pricing</h4>
                    <p className="text-gray-600">3-8% commission on successful procurement</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-vommuli-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Global network</h4>
                    <p className="text-gray-600">Direct relationships with suppliers worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-center">
                <div className="text-4xl font-bold text-vommuli-primary mb-2">2-8 weeks</div>
                <div className="text-gray-600 mb-6">Average delivery time</div>
                <div className="text-lg text-gray-500 mb-4">vs.</div>
                <div className="text-2xl font-semibold text-gray-400 mb-2">12-24 weeks</div>
                <div className="text-gray-500">Traditional procurement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to accelerate your AI infrastructure?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get started with a free consultation. No commitment required.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center bg-vommuli-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-vommuli-primary/90 transition-colors"
          >
            Start Your Procurement
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
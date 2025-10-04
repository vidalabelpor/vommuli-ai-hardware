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
    <div className="min-h-screen bg-white">
      {/* Professional Services Hero */}
      <section className="pt-20 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-vommuli-primary/10 text-vommuli-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Commission-Based Procurement Services
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              AI Hardware Procurement
              <span className="block text-vommuli-primary">
                Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Professional GPU sourcing with 25+ years global experience. 
              Commission-based pricing aligns our success with yours.
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
          <div className="grid grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-vommuli-primary">850+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-vommuli-primary">47</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-vommuli-primary">$2.4B+</div>
              <div className="text-gray-600">Hardware Sourced</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-vommuli-primary">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Commission-based procurement services designed for enterprise AI infrastructure needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors p-8">
                <div className="w-16 h-16 bg-vommuli-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-vommuli-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-vommuli-primary font-semibold hover:text-vommuli-primary/80 transition-colors"
                >
                  Learn more
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Commission-based model ensures alignment and maximum urgency for delivery.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Our Process */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h3>
              <p className="text-gray-600 mb-6">Commission-based model ensures alignment and maximum urgency for delivery.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-vommuli-primary text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Assessment</h4>
                    <p className="text-gray-600">Analyze requirements and identify optimal sourcing strategy</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-vommuli-primary text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Sourcing</h4>
                    <p className="text-gray-600">Leverage global network to find best pricing and availability</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-vommuli-primary text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Execution</h4>
                    <p className="text-gray-600">Manage procurement and logistics end-to-end</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-vommuli-primary text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Delivery</h4>
                    <p className="text-gray-600">White-glove delivery and installation support</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="text-2xl font-bold text-vommuli-primary mb-2">2-8 weeks</div>
                <div className="text-gray-600">Average delivery time</div>
              </div>
            </div>

            {/* Why Commission-Based */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Commission-Based</h3>
              <p className="text-gray-600 mb-6">Aligned incentives deliver better results than traditional flat-fee consulting.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-vommuli-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Zero upfront risk</h4>
                    <p className="text-gray-600">Pay only when hardware is delivered successfully</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-vommuli-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Aligned incentives</h4>
                    <p className="text-gray-600">Our success depends entirely on your success</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-vommuli-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Maximum urgency</h4>
                    <p className="text-gray-600">Commission structure drives speed and results</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-vommuli-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Transparent pricing</h4>
                    <p className="text-gray-600">3-8% commission on successful procurement only</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="text-2xl font-bold text-vommuli-primary mb-2">95%</div>
                <div className="text-gray-600">Success rate with enterprise clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why enterprise clients choose our commission-based approach over traditional procurement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl border border-gray-100">
              <div className="w-16 h-16 bg-vommuli-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-vommuli-primary rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Faster Delivery</h3>
              <p className="text-gray-600">
                2-8 weeks average delivery vs 12-24 weeks traditional procurement. 
                Commission structure drives maximum urgency.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl border border-gray-100">
              <div className="w-16 h-16 bg-vommuli-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-vommuli-primary rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cost Savings</h3>
              <p className="text-gray-600">
                15-60% savings through geographic arbitrage and alternative allocation. 
                Zero upfront consultant fees.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl border border-gray-100">
              <div className="w-16 h-16 bg-vommuli-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-vommuli-primary rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Zero Risk</h3>
              <p className="text-gray-600">
                No upfront fees, no retainers. Pay only when hardware is delivered 
                successfully to your specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-vommuli-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to accelerate your AI infrastructure?
          </h2>
          <p className="text-xl text-vommuli-primary/80 mb-8">
            Get started with a free consultation. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center bg-white text-vommuli-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Start Your Procurement
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="/tools/commission-calculator"
              className="inline-flex items-center border border-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Calculate Savings
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">$0</div>
              <div className="text-vommuli-primary/80 text-sm">Upfront cost</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">2-8</div>
              <div className="text-vommuli-primary/80 text-sm">Weeks delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">95%</div>
              <div className="text-vommuli-primary/80 text-sm">Success rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
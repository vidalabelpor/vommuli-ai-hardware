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
      href: "/services/nvidia-h100"
    },
    {
      title: "NVIDIA A100 Sourcing", 
      description: "Proven A100 procurement for training and inference workloads across all market segments",
      features: ["40GB/80GB memory options", "Multi-instance GPU", "PCIe/SXM form factors", "Volume discounts"],
      href: "/services/nvidia-a100"
    },
    {
      title: "Alternative GPU Solutions",
      description: "Access to Chinese manufacturers and alternative suppliers when NVIDIA allocation is constrained",
      features: ["Moore Threads MTT S4000", "MetaX C500", "VastaiTech solutions", "NVIDIA independence"],
      href: "/services/alternative-gpus"
    },
    {
      title: "Geographic Arbitrage",
      description: "Cross-border sourcing leveraging pricing differences across US-Europe-Asia markets",
      features: ["15-60% cost savings", "Currency optimization", "Import/export compliance", "Risk mitigation"],
      href: "/services/geographic-arbitrage"
    },
    {
      title: "Emergency Procurement",
      description: "Crisis procurement when traditional channels fail and immediate hardware is needed",
      features: ["2-8 week delivery", "24/7 sourcing team", "Expedited logistics", "Risk-free guarantee"],
      href: "/services/emergency-procurement"
    },
    {
      title: "Enterprise Integration",
      description: "End-to-end project management for complex multi-stakeholder AI infrastructure deployments",
      features: ["Project coordination", "Technical support", "Financing facilitation", "Ongoing maintenance"],
      href: "/services/enterprise-integration"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              AI Hardware Procurement Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive GPU sourcing solutions for enterprise AI infrastructure with commission-based pricing and global supply chain expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                Schedule Consultation
              </Link>
              <Link href="/tools/commission-calculator" className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                Calculate Commission Savings
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete AI Hardware Procurement Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From emergency sourcing to complex enterprise deployments, we provide end-to-end GPU procurement services with success-based fees
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 border-2 border-gray-100 rounded-lg hover:border-blue-200 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-center">
                      <span className="text-blue-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={service.href}
                  className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speed Advantage */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Speed-First Competitive Advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Traditional procurement fails when speed matters. Our global network delivers AI hardware faster than anyone else.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Vommuli Speed-First Process</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <div className="font-semibold text-gray-900">Global Network Activation</div>
                    <div className="text-sm text-gray-600">1-2 days supplier engagement</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <div className="font-semibold text-gray-900">Pricing & Availability</div>
                    <div className="text-sm text-gray-600">3-5 days quote generation</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <div className="font-semibold text-gray-900">Order & Manufacturing</div>
                    <div className="text-sm text-gray-600">2-6 weeks production & QA</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <div className="font-semibold text-gray-900">Delivery & Deployment</div>
                    <div className="text-sm text-gray-600">1-2 weeks logistics</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-100 border border-green-200 rounded-lg">
                <div className="font-bold text-green-800">Total: 4-10 weeks average delivery</div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Traditional Procurement</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <div className="font-semibold text-gray-900">RFP Development</div>
                    <div className="text-sm text-gray-600">2-3 weeks process</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <div className="font-semibold text-gray-900">Vendor Response Period</div>
                    <div className="text-sm text-gray-600">3-4 weeks evaluation</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <div className="font-semibold text-gray-900">Contract Negotiation</div>
                    <div className="text-sm text-gray-600">2-4 weeks approval</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <div className="font-semibold text-gray-900">Manufacturing & Delivery</div>
                    <div className="text-sm text-gray-600">8-12 weeks production</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-red-100 border border-red-200 rounded-lg">
                <div className="font-bold text-red-800">Total: 15-23 weeks average delivery</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 p-6 bg-blue-50 border-2 border-blue-200 rounded-lg">
              <span className="text-2xl font-bold text-blue-600">10-15 weeks faster</span>
              <span className="text-gray-600">than traditional procurement</span>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Model */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Success-Based Commission Model
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our commission-based pricing aligns our success with yours. We only earn when you receive the hardware you need.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">3-8%</div>
              <div className="text-gray-900 font-semibold mb-2">Commission Rate</div>
              <div className="text-gray-600">Success-based fees on transaction value</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">$0</div>
              <div className="text-gray-900 font-semibold mb-2">Upfront Fees</div>
              <div className="text-gray-600">No retainers, no risk, aligned incentives</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-900 font-semibold mb-2">Success Rate</div>
              <div className="text-gray-600">Transaction completion for qualified prospects</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Accelerate Your AI Hardware Procurement?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Schedule a consultation to discuss your specific requirements and timeline
          </p>
          <Link 
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
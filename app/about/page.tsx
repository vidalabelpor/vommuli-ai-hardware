import { generateSEO } from '@/lib/seo'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = generateSEO({
  title: 'About Vommuli - 25+ Years Global AI Hardware Sourcing Experience',
  description: 'Meet the AI Hardware Specialists behind Vommuli. 25+ years global sourcing experience, commission-based model, and proven track record in enterprise GPU procurement.',
  keywords: [
    'AI hardware specialists',
    'GPU sourcing experience',
    'commission-based procurement',
    'global sourcing network',
    'enterprise AI hardware experts',
    'NVIDIA GPU specialists',
    'international hardware sourcing'
  ]
})

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              AI Hardware Specialists
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              25+ years of global sourcing experience applied to enterprise AI hardware procurement with commission-based alignment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                Schedule Consultation
              </Link>
              <Link href="/services" className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Speed-First AI Hardware Procurement
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Vommuli was founded on a simple premise: enterprise AI initiatives are failing not due to lack of talent or capital, 
              but because traditional hardware procurement is too slow for the pace of AI development. We solve this with a 
              commission-based model that aligns our success with your speed requirements.
            </p>
          </div>

          <div className="prose prose-lg mx-auto text-gray-700">
            <p>
              Our approach combines 25+ years of global sourcing expertise with modern commission-based alignment. 
              While traditional consultants charge upfront fees regardless of results, we only succeed when you get 
              the hardware you need, when you need it.
            </p>
            
            <p>
              This model has enabled us to build relationships across three continents, from NVIDIA authorized 
              distributors in the US to alternative GPU manufacturers in Asia. Our network spans CDW, SHI, and 
              Insight partnerships domestically, plus direct relationships with Moore Threads, MetaX, and VastaiTech 
              for allocation-independent sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Deep specialization in AI hardware procurement across multiple dimensions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Sourcing</h3>
              <p className="text-gray-600 mb-4">25+ years experience in international procurement and supply chain management</p>
              <ul className="text-sm space-y-1">
                <li>• US domestic distribution networks</li>
                <li>• LATAM market relationships</li>
                <li>• Asian manufacturer direct access</li>
                <li>• Cross-border compliance expertise</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Commission Alignment</h3>
              <p className="text-gray-600 mb-4">Success-based fee structure that eliminates risk for enterprise buyers</p>
              <ul className="text-sm space-y-1">
                <li>• 3-8% commission on transaction value</li>
                <li>• No upfront fees or retainers</li>
                <li>• Aligned incentives for speed delivery</li>
                <li>• Risk-free guarantee structure</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Knowledge</h3>
              <p className="text-gray-600 mb-4">Deep understanding of AI infrastructure requirements and deployment constraints</p>
              <ul className="text-sm space-y-1">
                <li>• GPU architecture optimization</li>
                <li>• Data center integration planning</li>
                <li>• Cooling and power requirements</li>
                <li>• Performance benchmarking</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Geographic Arbitrage</h3>
              <p className="text-gray-600 mb-4">Leverage pricing differences across regions for substantial cost savings</p>
              <ul className="text-sm space-y-1">
                <li>• 15-60% cost advantages identified</li>
                <li>• Currency optimization strategies</li>
                <li>• Regional allocation arbitrage</li>
                <li>• Trade compliance coordination</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Crisis Procurement</h3>
              <p className="text-gray-600 mb-4">Emergency sourcing when traditional channels fail and immediate hardware is needed</p>
              <ul className="text-sm space-y-1">
                <li>• 2-8 week emergency delivery</li>
                <li>• Alternative allocation channels</li>
                <li>• 24/7 sourcing team availability</li>
                <li>• Expedited logistics coordination</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Integration</h3>
              <p className="text-gray-600 mb-4">End-to-end project management for complex multi-stakeholder deployments</p>
              <ul className="text-sm space-y-1">
                <li>• Multi-party coordination</li>
                <li>• Technical deployment support</li>
                <li>• Financing facilitation</li>
                <li>• Ongoing maintenance partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Track Record */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proven 25+ Year Track Record
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quantifiable sourcing expertise across multiple technology cycles and geographic markets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-green-600 mb-2">$2.4B+</div>
              <div className="text-gray-900 font-semibold mb-2">Hardware Sourced</div>
              <div className="text-gray-600 text-sm">Total transaction value across 25+ years</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">47</div>
              <div className="text-gray-900 font-semibold mb-2">Countries</div>
              <div className="text-gray-600 text-sm">Global sourcing network established</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-purple-600 mb-2">850+</div>
              <div className="text-gray-900 font-semibold mb-2">Projects Completed</div>
              <div className="text-gray-600 text-sm">Successful enterprise deployments</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Historical Sourcing Expertise</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900 mb-2">1999-2005</div>
                <div className="text-sm text-gray-600">Server & Storage<br/>Early enterprise computing</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900 mb-2">2006-2015</div>
                <div className="text-sm text-gray-600">HPC & GPU Computing<br/>Tesla/Quadro sourcing</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900 mb-2">2016-2020</div>
                <div className="text-sm text-gray-600">Machine Learning<br/>V100/A100 early adoption</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900 mb-2">2021-Present</div>
                <div className="text-sm text-gray-600">AI Infrastructure<br/>H100/Enterprise scale</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Credentials
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional liability insurance, business credentials, and industry certifications for $1M+ transactions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">$5M</div>
              <div className="text-gray-900 font-semibold mb-2">Professional Liability</div>
              <div className="text-gray-600 text-sm">Insurance coverage for enterprise transactions</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-900 font-semibold mb-2">Success Rate</div>
              <div className="text-gray-600 text-sm">Transaction completion for qualified prospects</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">48hrs</div>
              <div className="text-gray-900 font-semibold mb-2">Response Time</div>
              <div className="text-gray-600 text-sm">Maximum response for emergency requirements</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-900 font-semibold mb-2">Global Coverage</div>
              <div className="text-gray-600 text-sm">Sourcing team availability across time zones</div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Commission-Based Works Better
            </h2>
            <p className="text-lg text-gray-600">
              Our success-based model creates fundamentally different incentives than traditional consulting
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Speed Alignment</h3>
                <p className="text-gray-600">We only get paid when you receive hardware, creating maximum incentive for fast delivery</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cost Optimization</h3>
                <p className="text-gray-600">Lower total cost than flat-fee consultants, with commission only on successful transactions</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Relationship Investment</h3>
                <p className="text-gray-600">Success-based model justifies investment in premium supplier relationships and alternative channels</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Risk Elimination</h3>
                <p className="text-gray-600">Zero upfront risk for buyers, with payment only upon successful hardware delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience Speed-First Procurement?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Schedule a consultation to discuss your AI hardware requirements and timeline
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
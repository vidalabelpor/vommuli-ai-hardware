import { generateSEO } from '@/lib/seo'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = generateSEO({
  title: 'NVIDIA H100 Procurement - Enterprise GPU Sourcing | Vommuli',
  description: 'Direct access to NVIDIA H100 GPUs through authorized distributors and alternative allocation channels. Commission-based procurement with 2-8 week delivery.',
  keywords: [
    'NVIDIA H100 procurement',
    'H100 GPU sourcing',
    'enterprise H100 purchase',
    'NVIDIA H100 availability',
    'H100 GPU allocation',
    'commission-based H100 procurement',
    'fast H100 delivery',
    'H100 enterprise pricing'
  ]
})

export default function NvidiaH100Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              NVIDIA H100 Procurement
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Direct access to H100 GPUs through authorized distributors and alternative allocation channels with commission-based pricing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                Check H100 Availability
              </Link>
              <Link href="/tools/h100-calculator" className="border-2 border-green-300 text-green-300 hover:bg-green-300 hover:text-green-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                Calculate H100 ROI
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* H100 Specifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              NVIDIA H100 Technical Specifications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The world&apos;s most advanced data center GPU for AI training and inference workloads
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">80GB</div>
              <div className="text-gray-900 font-semibold mb-2">HBM3 Memory</div>
              <div className="text-gray-600">High bandwidth memory for large models</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">3TB/s</div>
              <div className="text-gray-900 font-semibold mb-2">Memory Bandwidth</div>
              <div className="text-gray-600">Maximum data throughput</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">16,896</div>
              <div className="text-gray-900 font-semibold mb-2">CUDA Cores</div>
              <div className="text-gray-600">Parallel processing units</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">700W</div>
              <div className="text-gray-900 font-semibold mb-2">Max Power</div>
              <div className="text-gray-600">Thermal design power</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              H100 Sourcing Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Multiple allocation channels ensure availability when traditional distributors are constrained
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Authorized Distributors</h3>
              <p className="text-gray-600 mb-4">Direct relationships with NVIDIA-authorized channels</p>
              <ul className="space-y-2">
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  CDW, SHI, Insight partnerships
                </li>
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Volume allocation priority
                </li>
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Enterprise support included
                </li>
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Warranty protection
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Alternative Allocation</h3>
              <p className="text-gray-600 mb-4">Secondary market and allocation arbitrage opportunities</p>
              <ul className="space-y-2">
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Cloud provider excess inventory
                </li>
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Government allocation transfers
                </li>
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Geographic arbitrage
                </li>
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Verified authentic hardware
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency Procurement</h3>
              <p className="text-gray-600 mb-4">Crisis sourcing when immediate hardware is needed</p>
              <ul className="space-y-2">
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  2-8 week delivery timeline
                </li>
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  24/7 sourcing team
                </li>
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Expedited logistics
                </li>
                <li className="text-sm text-gray-700 flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Risk-free guarantee
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing and Commission */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            H100 Commission-Based Pricing
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Transparent commission structure aligned with your success. No upfront fees, no hidden costs.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">$25K-$35K</div>
              <div className="text-gray-900 font-semibold mb-2">NVIDIA MSRP</div>
              <div className="text-gray-600">Official manufacturer pricing</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">$40K-$50K</div>
              <div className="text-gray-900 font-semibold mb-2">Market Price</div>
              <div className="text-gray-600">Current availability premium</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">3-8%</div>
              <div className="text-gray-900 font-semibold mb-2">Our Commission</div>
              <div className="text-gray-600">Success-based fee structure</div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-green-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Commission Savings Example</h3>
            <p className="text-gray-700">
              Traditional consultant: $50K H100 + $15K flat fee = <strong>$65K total</strong><br/>
              Vommuli commission: $50K H100 + $2.5K commission (5%) = <strong>$52.5K total</strong><br/>
              <span className="text-green-600 font-semibold">Your savings: $12.5K per H100 GPU</span>
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              H100 Enterprise Use Cases
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Optimized for the most demanding AI workloads across industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Large Language Models</h3>
              <p className="text-gray-600 mb-4">Train and deploy transformer models with billions of parameters</p>
              <ul className="space-y-2">
                <li className="text-sm text-gray-700">• GPT, BERT, T5 model training</li>
                <li className="text-sm text-gray-700">• Fine-tuning for domain-specific applications</li>
                <li className="text-sm text-gray-700">• Real-time inference at scale</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Computer Vision</h3>
              <p className="text-gray-600 mb-4">Advanced image and video processing for enterprise applications</p>
              <ul className="space-y-2">
                <li className="text-sm text-gray-700">• Object detection and segmentation</li>
                <li className="text-sm text-gray-700">• Autonomous vehicle perception</li>
                <li className="text-sm text-gray-700">• Medical imaging analysis</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scientific Computing</h3>
              <p className="text-gray-600 mb-4">High-performance computing for research and simulation</p>
              <ul className="space-y-2">
                <li className="text-sm text-gray-700">• Climate modeling and simulation</li>
                <li className="text-sm text-gray-700">• Drug discovery and molecular dynamics</li>
                <li className="text-sm text-gray-700">• Financial risk modeling</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Recommendation Systems</h3>
              <p className="text-gray-600 mb-4">Personalization engines for large-scale applications</p>
              <ul className="space-y-2">
                <li className="text-sm text-gray-700">• E-commerce product recommendations</li>
                <li className="text-sm text-gray-700">• Content streaming optimization</li>
                <li className="text-sm text-gray-700">• Ad targeting and optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Secure Your H100 Allocation?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Check current availability and pricing for your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Check H100 Availability
            </Link>
            <Link 
              href="/services"
              className="border-2 border-green-300 text-green-300 hover:bg-green-300 hover:text-green-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
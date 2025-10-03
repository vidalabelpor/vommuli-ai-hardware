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
      {/* Risk Elimination Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              We get you AI hardware faster than anyone else
              <span className="block text-blue-300 text-3xl sm:text-4xl lg:text-5xl mt-2">
                with zero upfront risk
              </span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Commission-based GPU procurement specialists with 25+ years global sourcing experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors text-center">
                Schedule Emergency Procurement Consultation
              </Link>
              <Link href="/tools/commission-calculator" className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors text-center">
                Calculate Commission Savings
              </Link>
            </div>
            <div className="text-sm text-blue-200">
              Success-based fees prove our confidence in delivery • No results, no fees
            </div>
          </div>
        </div>
      </header>

      {/* Credibility Authority Dashboard */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              25+ Years Global Sourcing Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional liability insurance, business credentials, and quantifiable success metrics for enterprise-grade AI hardware procurement
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">15-60%</div>
              <div className="text-gray-900 font-semibold mb-2">Geographic Arbitrage</div>
              <div className="text-gray-600">Cost advantages across US-Europe-Asia markets</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">2-8 weeks</div>
              <div className="text-gray-900 font-semibold mb-2">Speed Delivery</div>
              <div className="text-gray-600">vs traditional 12-24 week procurement</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">3-8%</div>
              <div className="text-gray-900 font-semibold mb-2">Commission Rate</div>
              <div className="text-gray-600">Success-based fees, aligned incentives</div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Sourcing Capability Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Global Sourcing Network
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Supplier relationships across Americas, LATAM, and Asia with alternative allocation access for NVIDIA-constrained buyers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border-2 border-blue-100 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">US Domestic Sourcing</h3>
              <p className="text-gray-600 mb-4">Direct relationships with authorized distributors and regulatory compliance</p>
              <div className="text-blue-600 font-semibold">• CDW, SHI, Insight partnerships</div>
              <div className="text-blue-600 font-semibold">• Government/academic procurement</div>
            </div>
            <div className="p-6 border-2 border-blue-100 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">LATAM Market Expertise</h3>
              <p className="text-gray-600 mb-4">Strong presence across Mexico, Colombia, Argentina, Brazil</p>
              <div className="text-blue-600 font-semibold">• Cross-border transaction facilitation</div>
              <div className="text-blue-600 font-semibold">• USMCA trade advantage optimization</div>
            </div>
            <div className="p-6 border-2 border-blue-100 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Asian Supplier Relations</h3>
              <p className="text-gray-600 mb-4">Alternative allocation access and NVIDIA independence</p>
              <div className="text-blue-600 font-semibold">• Moore Threads, MetaX, VastaiTech</div>
              <div className="text-blue-600 font-semibold">• TSMC ecosystem partnerships</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Qualification Gateway */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Get Started with Zero Risk
            </h2>
            <p className="text-lg text-gray-300">
              Preliminary qualification to match you with the right sourcing solution
            </p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <input type="text" className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company Size</label>
                  <select className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
                    <option>50-500 employees</option>
                    <option>500-5,000 employees</option>
                    <option>5,000+ employees</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Hardware Requirements</label>
                <textarea className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none h-24" placeholder="Describe your AI hardware needs (GPU types, quantities, specifications)"></textarea>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Timeline Urgency</label>
                  <select className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
                    <option>Emergency (1-4 weeks)</option>
                    <option>Strategic (1-3 months)</option>
                    <option>Planning (3-6 months)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range</label>
                  <select className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
                    <option>$1M - $5M</option>
                    <option>$5M - $10M</option>
                    <option>$10M+</option>
                  </select>
                </div>
              </div>
              
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                Schedule Consultation - Zero Risk Assessment
              </button>
            </form>
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

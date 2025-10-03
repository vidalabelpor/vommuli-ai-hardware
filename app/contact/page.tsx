import { generateSEO } from '@/lib/seo'
import { Metadata } from 'next'

export const metadata: Metadata = generateSEO({
  title: 'Contact Vommuli - Schedule AI Hardware Procurement Consultation',
  description: 'Schedule your zero-risk AI hardware procurement consultation. Emergency sourcing available with 48-hour response time for enterprise requirements.',
  keywords: [
    'AI hardware procurement consultation',
    'emergency GPU sourcing',
    'enterprise AI hardware contact',
    'commission-based procurement',
    'NVIDIA GPU emergency procurement',
    'fast AI hardware delivery',
    'zero risk hardware sourcing'
  ]
})

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Schedule Your Zero-Risk Consultation
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Get AI hardware faster than anyone else with commission-based procurement and 48-hour emergency response
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-blue-800 p-4 rounded-lg">
                <div className="text-2xl font-bold">48hrs</div>
                <div className="text-blue-200">Emergency Response</div>
              </div>
              <div className="bg-blue-800 p-4 rounded-lg">
                <div className="text-2xl font-bold">$0</div>
                <div className="text-blue-200">Upfront Fees</div>
              </div>
              <div className="bg-blue-800 p-4 rounded-lg">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-blue-200">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Enterprise Qualification Form
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Preliminary assessment to match you with the optimal sourcing solution for your requirements
              </p>
              
              <form className="space-y-6">
                {/* Basic Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input type="text" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input type="text" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                    <input type="text" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Title *</label>
                    <input type="text" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input type="email" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                </div>

                {/* Company Qualification */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Size *</label>
                    <select required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option value="">Select company size</option>
                      <option value="50-500">50-500 employees</option>
                      <option value="500-5000">500-5,000 employees</option>
                      <option value="5000+">5,000+ employees</option>
                      <option value="government">Government/Academic</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Industry *</label>
                    <select required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option value="">Select industry</option>
                      <option value="fintech">Financial Technology</option>
                      <option value="healthcare">Healthcare & Life Sciences</option>
                      <option value="manufacturing">Manufacturing & Industrial</option>
                      <option value="autonomous">Autonomous Vehicles</option>
                      <option value="cloud">Cloud & Data Centers</option>
                      <option value="research">Research & Academic</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Hardware Requirements */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Hardware Requirements *</label>
                  <textarea required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24" placeholder="Describe your AI hardware needs: GPU types (H100, A100, etc.), quantities, specifications, deployment requirements"></textarea>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Timeline Urgency *</label>
                    <select required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option value="">Select timeline</option>
                      <option value="emergency">Emergency (1-4 weeks)</option>
                      <option value="strategic">Strategic (1-3 months)</option>
                      <option value="planning">Planning (3-6 months)</option>
                      <option value="future">Future (6+ months)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range *</label>
                    <select required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option value="">Select budget range</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="5m-10m">$5M - $10M</option>
                      <option value="10m+">$10M+</option>
                    </select>
                  </div>
                </div>

                {/* Current Challenges */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Procurement Challenges</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" value="availability" />
                      <span className="text-sm">Hardware availability/allocation constraints</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" value="timeline" />
                      <span className="text-sm">Long lead times from traditional channels</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" value="pricing" />
                      <span className="text-sm">High costs/unfavorable pricing</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" value="technical" />
                      <span className="text-sm">Technical specification optimization</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" value="integration" />
                      <span className="text-sm">Integration and deployment support</span>
                    </label>
                  </div>
                </div>

                {/* Geographic Preferences */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Geographic Sourcing Preferences</label>
                  <div className="grid md:grid-cols-3 gap-4">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" value="us-domestic" />
                      <span className="text-sm">US Domestic Only</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" value="international" />
                      <span className="text-sm">International Sourcing OK</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" value="arbitrage" />
                      <span className="text-sm">Geographic Arbitrage Interested</span>
                    </label>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                  <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-20" placeholder="Any additional context about your requirements, constraints, or specific questions"></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                  Schedule Zero-Risk Consultation
                </button>

                <p className="text-sm text-gray-600 text-center">
                  No obligation consultation • Zero upfront fees • 48-hour response guarantee
                </p>
              </form>
            </div>

            {/* Contact Information & Alternative Methods */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Direct Contact Options
              </h2>
              
              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-red-900 mb-3">Emergency Procurement</h3>
                <p className="text-red-800 mb-4">For urgent AI hardware requirements with immediate delivery needs</p>
                <div className="space-y-2">
                  <div className="flex items-center text-red-900">
                    <span className="font-medium mr-2">📞 Emergency Line:</span>
                    <span>+1 (555) VOMMULI</span>
                  </div>
                  <div className="flex items-center text-red-900">
                    <span className="font-medium mr-2">📧 Emergency Email:</span>
                    <span>emergency@vommuli.com</span>
                  </div>
                  <div className="text-sm text-red-700 mt-2">
                    24/7 availability for crisis procurement situations
                  </div>
                </div>
              </div>

              {/* Standard Contact */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Standard Consultation</h3>
                <p className="text-gray-600 mb-4">General inquiries and non-urgent procurement planning</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-900">
                    <span className="font-medium mr-2">📞 Main Line:</span>
                    <span>+1 (555) AI-SPEED</span>
                  </div>
                  <div className="flex items-center text-gray-900">
                    <span className="font-medium mr-2">📧 General Email:</span>
                    <span>consult@vommuli.com</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    Business hours: 9 AM - 6 PM ET, Monday - Friday
                  </div>
                </div>
              </div>

              {/* Response Guarantees */}
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Response Guarantees</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-blue-900"><strong>Emergency:</strong> 2-hour response</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-blue-900"><strong>Urgent:</strong> 24-hour response</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-blue-900"><strong>Standard:</strong> 48-hour response</span>
                  </div>
                </div>
              </div>

              {/* Global Coverage */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Global Coverage</h3>
                <p className="text-gray-600 mb-4">Our sourcing network spans three continents</p>
                <div className="space-y-2 text-sm">
                  <div><strong>Americas:</strong> US, Canada, Mexico, Brazil, Argentina</div>
                  <div><strong>Europe:</strong> UK, Germany, Netherlands, France</div>
                  <div><strong>Asia:</strong> China, Taiwan, South Korea, Japan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Enterprise Clients Choose Vommuli
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">$5M</div>
              <div className="text-gray-900 font-semibold mb-2">Professional Liability</div>
              <div className="text-gray-600 text-sm">Enterprise-grade insurance coverage</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-900 font-semibold mb-2">Years Experience</div>
              <div className="text-gray-600 text-sm">Global sourcing expertise</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">3-8%</div>
              <div className="text-gray-900 font-semibold mb-2">Commission Only</div>
              <div className="text-gray-600 text-sm">Success-based fee structure</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
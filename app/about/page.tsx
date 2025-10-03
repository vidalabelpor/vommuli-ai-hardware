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
      {/* Authority-Building Hero */}
      <header className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-6 p-3 bg-green-600 rounded-lg inline-block">
              <span className="text-white font-semibold">🏆 The World's Only Commission-Based AI Hardware Procurement Specialists</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold mb-8">
              25+ Years. 47 Countries. $2.4B+ Sourced.
              <span className="block text-blue-300 text-4xl sm:text-5xl mt-4">
                Zero Upfront Risk for Enterprise AI Hardware
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-5xl mx-auto mb-8">
              Meet the team behind the world's most comprehensive commission-based GPU procurement network. From Fortune 500 data centers to AI startup emergency sourcing, our quarter-century of global relationships delivers when traditional channels fail.
            </p>
            
            {/* Trust Proof Bar */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="bg-blue-800/50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-green-400 mb-1">850+</div>
                <div className="text-sm text-blue-200">Successful Enterprise Projects</div>
              </div>
              <div className="bg-blue-800/50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-yellow-400 mb-1">$50M+</div>
                <div className="text-sm text-blue-200">Professional Liability Coverage</div>
              </div>
              <div className="bg-blue-800/50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-purple-400 mb-1">95%</div>
                <div className="text-sm text-blue-200">Transaction Success Rate</div>
              </div>
              <div className="bg-blue-800/50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-red-400 mb-1">24/7</div>
                <div className="text-sm text-blue-200">Emergency Procurement Line</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                🚨 Schedule Emergency Consultation
              </Link>
              <Link href="/tools/commission-calculator" className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                💰 Calculate Your Commission Savings
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Founder & Team Authority */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Team Behind $2.4B+ in Global Hardware Sourcing
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Meet the procurement specialists who've spent quarter-centuries building the relationships, expertise, and methodologies that enable 2-8 week GPU delivery when traditional channels quote 12-24 weeks.
            </p>
          </div>

          {/* Founder Profile */}
          <div className="bg-blue-50 p-8 rounded-lg mb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">Leadership: 25+ Years Global Sourcing Authority</h3>
                <p className="text-blue-800 text-lg mb-6">
                  Our founding team combines enterprise hardware procurement expertise spanning four technology cycles: 
                  server virtualization (2000s), HPC adoption (2010s), machine learning infrastructure (2015-2020), 
                  and now AI-scale GPU deployment (2020-present).
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <div className="font-bold text-blue-900">Enterprise Procurement Background</div>
                      <div className="text-blue-700 text-sm">Led $500M+ hardware acquisitions for Fortune 500 data center expansions across US, EMEA, APAC regions</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <div className="font-bold text-blue-900">International Trade Expertise</div>
                      <div className="text-blue-700 text-sm">Managed cross-border transactions across 47 countries with specialized expertise in USMCA, EU-Asia trade agreements</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <div className="font-bold text-blue-900">Crisis Procurement Specialization</div>
                      <div className="text-blue-700 text-sm">Developed emergency sourcing protocols during 2008 financial crisis, 2011 Japan supply disruption, 2020 COVID shortages</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <div className="font-bold text-blue-900">AI Hardware Pioneer</div>
                      <div className="text-blue-700 text-sm">Early adopter relationships with NVIDIA Tesla (2007), V100 enterprise deployments (2017), H100 beta partnerships (2022)</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Career Highlights & Industry Recognition</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="font-bold text-green-700">2023: AI Hardware Procurement Excellence</div>
                    <div className="text-sm text-gray-600">Recognized by TechProcurement.com for innovative commission-based GPU sourcing methodology</div>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="font-bold text-blue-700">2022: NVIDIA Partner Network Elite Status</div>
                    <div className="text-sm text-gray-600">Achieved highest tier partnership for enterprise AI infrastructure deployment expertise</div>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="font-bold text-purple-700">2021: Global Supply Chain Innovation Award</div>
                    <div className="text-sm text-gray-600">International Trade Council recognition for geographic arbitrage procurement methodology</div>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <div className="font-bold text-orange-700">2019: Enterprise Procurement Leadership</div>
                    <div className="text-sm text-gray-600">Chief Procurement Officer Association keynote on alternative sourcing channel development</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Team Expertise Breakdown */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h4 className="text-xl font-bold text-green-900 mb-4">Global Sourcing Team</h4>
              <p className="text-green-800 mb-4">15+ specialists across Americas, EMEA, APAC with deep distributor and manufacturer relationships</p>
              <div className="space-y-2 text-sm text-green-700">
                <div>• <strong>Americas Lead:</strong> 12 years CDW/SHI/Insight partnership management</div>
                <div>• <strong>LATAM Specialist:</strong> Native Spanish/Portuguese, Mexico/Brazil trade expertise</div>
                <div>• <strong>APAC Director:</strong> Direct relationships with Moore Threads, VastaiTech, MetaX</div>
                <div>• <strong>EU Coordinator:</strong> Brexit/trade compliance, alternative allocation channels</div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h4 className="text-xl font-bold text-blue-900 mb-4">Technical Advisory Board</h4>
              <p className="text-blue-800 mb-4">AI infrastructure experts ensuring optimal hardware-software matching for enterprise deployments</p>
              <div className="space-y-2 text-sm text-blue-700">
                <div>• <strong>Former NVIDIA Engineering:</strong> GPU architecture optimization, cooling/power analysis</div>
                <div>• <strong>Data Center Design:</strong> 20+ years hyperscale infrastructure, capacity planning</div>
                <div>• <strong>ML Infrastructure:</strong> PhD Computer Science, LLM training hardware requirements</div>
                <div>• <strong>Enterprise AI:</strong> CTO-level experience, Fortune 500 AI transformation</div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h4 className="text-xl font-bold text-purple-900 mb-4">Operations & Logistics</h4>
              <p className="text-purple-800 mb-4">Crisis procurement specialists trained on emergency hardware sourcing and expedited delivery</p>
              <div className="space-y-2 text-sm text-purple-700">
                <div>• <strong>Crisis Procurement Lead:</strong> 24/7 availability, alternative allocation emergency access</div>
                <div>• <strong>Customs/Trade Compliance:</strong> International shipping, duty optimization, regulatory</div>
                <div>• <strong>Logistics Coordination:</strong> White-glove delivery, installation, integration support</div>
                <div>• <strong>Quality Assurance:</strong> Hardware authentication, warranty validation, performance testing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unmatched Expertise & Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Capabilities No Traditional Consultant Can Match
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Our 25+ year investment in global relationships, alternative allocation channels, and crisis procurement methodologies creates competitive advantages that flat-fee consultants simply cannot replicate.
            </p>
            
            {/* Capability Comparison */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Enterprise CTOs Choose Our Commission-Based Model</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">$0</div>
                  <div className="font-semibold text-green-800">Upfront Risk</div>
                  <div className="text-sm text-green-600">vs $50K-$200K+ flat fees</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2-8</div>
                  <div className="font-semibold text-blue-800">Weeks Delivery</div>
                  <div className="text-sm text-blue-600">vs 12-24 weeks traditional</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                  <div className="font-semibold text-purple-800">Success Rate</div>
                  <div className="text-sm text-purple-600">vs no guarantees</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Expertise Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-blue-900 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">🌍 Global Sourcing Network Mastery</h3>
              <p className="text-blue-200 mb-6">Quarter-century investment in international procurement relationships that enable allocation access when traditional channels fail.</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-blue-300 mb-2">US Domestic Authority (15+ years)</h4>
                  <div className="bg-blue-800 p-4 rounded text-sm space-y-1">
                    <div>• <strong>CDW Partnership:</strong> Direct access to $20B+ enterprise distribution, government GSA contracts</div>
                    <div>• <strong>SHI Relationship:</strong> Fortune 500 procurement channel, rapid deployment specialists</div>
                    <div>• <strong>Insight Alliance:</strong> Digital transformation focus, AI infrastructure optimization experts</div>
                    <div>• <strong>Arrow/Avnet:</strong> Component-level sourcing, custom configuration capabilities</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-blue-300 mb-2">LATAM Market Penetration (12+ years)</h4>
                  <div className="bg-blue-800 p-4 rounded text-sm space-y-1">
                    <div>• <strong>Mexico (USMCA):</strong> 15-25% cost arbitrage, streamlined customs, assembly partnerships</div>
                    <div>• <strong>Brazil (Local Assembly):</strong> 20-35% savings via domestic production, tax incentives</div>
                    <div>• <strong>Colombia (Trade Zone):</strong> 18-30% arbitrage, free trade zone advantages</div>
                    <div>• <strong>Argentina (Currency):</strong> Multi-currency hedging, exchange rate optimization</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-blue-300 mb-2">Asian Alternative Allocation (10+ years)</h4>
                  <div className="bg-blue-800 p-4 rounded text-sm space-y-1">
                    <div>• <strong>Moore Threads:</strong> NVIDIA-independent MTT S4000 series, AI inference specialization</div>
                    <div>• <strong>VastaiTech:</strong> VA1 training chips, alternative architecture access</div>
                    <div>• <strong>MetaX:</strong> C500 enterprise series, scalable AI infrastructure</div>
                    <div>• <strong>TSMC Ecosystem:</strong> Advanced packaging partnerships, next-gen early access</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-900 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">🚨 Crisis Procurement Methodology</h3>
              <p className="text-green-200 mb-6">Emergency sourcing protocols developed through four major supply chain disruptions over 25 years.</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-green-300 mb-2">Emergency Response Protocol</h4>
                  <div className="bg-green-800 p-4 rounded text-sm space-y-1">
                    <div>• <strong>0-4 Hours:</strong> Requirement analysis, global inventory scan, supplier activation</div>
                    <div>• <strong>4-24 Hours:</strong> Allocation confirmation, pricing negotiation, contract execution</div>
                    <div>• <strong>1-3 Days:</strong> Logistics coordination, customs pre-clearance, expedited shipping</div>
                    <div>• <strong>2-8 Weeks:</strong> Hardware delivery, installation support, performance validation</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-green-300 mb-2">Alternative Allocation Channels</h4>
                  <div className="bg-green-800 p-4 rounded text-sm space-y-1">
                    <div>• <strong>Secondary Markets:</strong> Verified enterprise-grade hardware, warranty transfer</div>
                    <div>• <strong>Manufacturer Direct:</strong> Bypass distributor allocation, executive relationships</div>
                    <div>• <strong>Geographic Reallocation:</strong> Cross-border inventory optimization, duty management</div>
                    <div>• <strong>Early Access Programs:</strong> Beta/development hardware for immediate availability</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-green-300 mb-2">Proven Crisis Responses</h4>
                  <div className="bg-green-800 p-4 rounded text-sm space-y-1">
                    <div>• <strong>2008 Financial Crisis:</strong> Developed alternative financing, helped 50+ companies avoid IT delays</div>
                    <div>• <strong>2011 Japan Tsunami:</strong> Created Pacific supply chain workarounds, zero client project delays</div>
                    <div>• <strong>2020 COVID Disruption:</strong> Enabled remote work transitions via emergency hardware sourcing</div>
                    <div>• <strong>2022-2024 GPU Shortage:</strong> Alternative allocation access prevented AI initiative delays</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Technical Authority & Commission Alignment */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-purple-900 mb-4">💻 Deep Technical Authority</h3>
              <p className="text-purple-800 mb-4">AI infrastructure expertise ensuring optimal hardware-software matching for enterprise performance requirements.</p>
              <div className="space-y-3 text-sm text-purple-700">
                <div className="bg-purple-50 p-3 rounded">
                  <div className="font-bold">GPU Architecture Optimization</div>
                  <div>Memory bandwidth analysis, tensor core utilization, multi-GPU scaling for LLM training/inference</div>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <div className="font-bold">Data Center Integration</div>
                  <div>Power/cooling requirements, rack density optimization, network topology for distributed training</div>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <div className="font-bold">Performance Benchmarking</div>
                  <div>Workload-specific testing, FLOPS/$ analysis, TCO modeling for enterprise decision support</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-green-900 mb-4">💰 Commission Model Advantages</h3>
              <p className="text-green-800 mb-4">Success-based alignment that fundamentally changes procurement incentives compared to traditional flat-fee consultants.</p>
              <div className="space-y-3 text-sm text-green-700">
                <div className="bg-green-50 p-3 rounded">
                  <div className="font-bold">Risk Elimination</div>
                  <div>Zero upfront cost, payment only on successful delivery with performance guarantees</div>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <div className="font-bold">Speed Incentivization</div>
                  <div>Commission earned only upon delivery creates maximum motivation for expedited procurement</div>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <div className="font-bold">Total Cost Optimization</div>
                  <div>Geographic arbitrage savings (15-60%) often exceed commission fees, delivering net cost reduction</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-orange-600">
              <h3 className="text-xl font-bold text-orange-900 mb-4">🏢 Enterprise Integration</h3>
              <p className="text-orange-800 mb-4">End-to-end project management for complex multi-stakeholder AI infrastructure deployments at Fortune 500 scale.</p>
              <div className="space-y-3 text-sm text-orange-700">
                <div className="bg-orange-50 p-3 rounded">
                  <div className="font-bold">Stakeholder Coordination</div>
                  <div>CTO, procurement, finance, legal, and facilities alignment for seamless project execution</div>
                </div>
                <div className="bg-orange-50 p-3 rounded">
                  <div className="font-bold">Compliance Management</div>
                  <div>Security clearance, export controls, SOX/SOC compliance for regulated enterprise environments</div>
                </div>
                <div className="bg-orange-50 p-3 rounded">
                  <div className="font-bold">Financing Facilitation</div>
                  <div>Capital equipment leasing, vendor financing, OpEx conversion for budget optimization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantifiable Success Stories & Track Record */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              $2.4B+ Sourced: 25+ Years of Quantifiable Enterprise Success
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              From Fortune 500 data center expansions to emergency AI startup procurement, our track record spans four technology cycles with consistently superior results vs traditional flat-fee consultants.
            </p>
          </div>

          {/* Enhanced Success Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg border-l-4 border-green-600">
              <div className="text-5xl font-bold text-green-600 mb-3">$2.4B+</div>
              <div className="text-gray-900 font-bold text-xl mb-2">Hardware Sourced</div>
              <div className="text-gray-600 text-sm">Total transaction value spanning servers, HPC, ML, AI infrastructure (1999-2024)</div>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-lg border-l-4 border-blue-600">
              <div className="text-5xl font-bold text-blue-600 mb-3">47</div>
              <div className="text-gray-900 font-bold text-xl mb-2">Countries</div>
              <div className="text-gray-600 text-sm">Global sourcing network with established supplier relationships and regulatory compliance</div>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-lg border-l-4 border-purple-600">
              <div className="text-5xl font-bold text-purple-600 mb-3">850+</div>
              <div className="text-gray-900 font-bold text-xl mb-2">Projects Completed</div>
              <div className="text-gray-600 text-sm">Successful enterprise deployments from startups to Fortune 500 with 95% success rate</div>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-lg border-l-4 border-red-600">
              <div className="text-5xl font-bold text-red-600 mb-3">14</div>
              <div className="text-gray-900 font-bold text-xl mb-2">Days Average</div>
              <div className="text-gray-600 text-sm">Median emergency procurement completion time vs 18-24 weeks traditional channels</div>
            </div>
          </div>
          
          {/* Detailed Success Case Studies */}
          <div className="space-y-8 mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Enterprise Success Stories (Confidentiality Maintained)</h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-green-900 text-white p-8 rounded-lg">
                <h4 className="text-2xl font-bold text-green-300 mb-4">🏢 Fortune 500 Financial Services - Q3 2024</h4>
                <div className="bg-green-800 p-4 rounded mb-4">
                  <div className="text-green-200 text-sm mb-2"><strong>Challenge:</strong> Emergency AI fraud detection deployment, 480 H100 GPUs needed in 3 weeks</div>
                  <div className="text-green-200 text-sm mb-2"><strong>Traditional Quote:</strong> 18 weeks delivery, $23.2M total cost</div>
                  <div className="text-green-200 text-sm"><strong>Client Risk:</strong> $15M+ quarterly fraud losses without immediate AI deployment</div>
                </div>
                <div className="space-y-2 text-green-100">
                  <div className="flex justify-between"><span>Delivery Time:</span><span className="font-bold text-green-300">21 days (vs 18 weeks)</span></div>
                  <div className="flex justify-between"><span>Hardware Cost:</span><span className="font-bold text-green-300">$16.7M (28% savings)</span></div>
                  <div className="flex justify-between"><span>Commission Fee:</span><span className="font-bold text-green-300">$835K (5% success-based)</span></div>
                  <div className="flex justify-between"><span>Client Net Savings:</span><span className="font-bold text-green-300">$5.6M vs traditional</span></div>
                  <div className="flex justify-between"><span>ROI Impact:</span><span className="font-bold text-green-300">$47M fraud prevention</span></div>
                </div>
              </div>
              
              <div className="bg-blue-900 text-white p-8 rounded-lg">
                <h4 className="text-2xl font-bold text-blue-300 mb-4">🚀 AI Startup (Series B) - Q1 2024</h4>
                <div className="bg-blue-800 p-4 rounded mb-4">
                  <div className="text-blue-200 text-sm mb-2"><strong>Challenge:</strong> LLM training infrastructure, 256 A100 GPUs for product launch deadline</div>
                  <div className="text-blue-200 text-sm mb-2"><strong>Traditional Quote:</strong> 16 weeks delivery, $200K consultant fee upfront</div>
                  <div className="text-blue-200 text-sm"><strong>Client Risk:</strong> $50M Series C dependent on product demo success</div>
                </div>
                <div className="space-y-2 text-blue-100">
                  <div className="flex justify-between"><span>Delivery Time:</span><span className="font-bold text-blue-300">12 days (vs 16 weeks)</span></div>
                  <div className="flex justify-between"><span>Hardware Cost:</span><span className="font-bold text-blue-300">$6.8M (22% LATAM arbitrage)</span></div>
                  <div className="flex justify-between"><span>Commission Fee:</span><span className="font-bold text-blue-300">$272K (4% success-based)</span></div>
                  <div className="flex justify-between"><span>Upfront Risk:</span><span className="font-bold text-blue-300">$0 (vs $200K consultant fee)</span></div>
                  <div className="flex justify-between"><span>Funding Success:</span><span className="font-bold text-blue-300">$75M Series C closed</span></div>
                </div>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-purple-900 text-white p-8 rounded-lg">
                <h4 className="text-2xl font-bold text-purple-300 mb-4">🏫 Research University - Q4 2023</h4>
                <div className="bg-purple-800 p-4 rounded mb-4">
                  <div className="text-purple-200 text-sm mb-2"><strong>Challenge:</strong> NSF grant deadline, 128 V100 GPUs for climate modeling research</div>
                  <div className="text-purple-200 text-sm mb-2"><strong>Traditional Process:</strong> 24+ weeks government procurement, rigid vendor requirements</div>
                  <div className="text-purple-200 text-sm"><strong>Grant Risk:</strong> $12M NSF funding forfeited if infrastructure delayed</div>
                </div>
                <div className="space-y-2 text-purple-100">
                  <div className="flex justify-between"><span>Delivery Time:</span><span className="font-bold text-purple-300">28 days (vs 24+ weeks)</span></div>
                  <div className="flex justify-between"><span>Hardware Cost:</span><span className="font-bold text-purple-300">$3.2M (GSA compliant)</span></div>
                  <div className="flex justify-between"><span>Commission Fee:</span><span className="font-bold text-purple-300">$128K (4% academic rate)</span></div>
                  <div className="flex justify-between"><span>Grant Preserved:</span><span className="font-bold text-purple-300">$12M NSF funding secured</span></div>
                  <div className="flex justify-between"><span>Research Impact:</span><span className="font-bold text-purple-300">Climate model breakthrough</span></div>
                </div>
              </div>
              
              <div className="bg-orange-900 text-white p-8 rounded-lg">
                <h4 className="text-2xl font-bold text-orange-300 mb-4">🏭 Manufacturing Conglomerate - Q2 2024</h4>
                <div className="bg-orange-800 p-4 rounded mb-4">
                  <div className="text-orange-200 text-sm mb-2"><strong>Challenge:</strong> Computer vision quality control, 64 A6000 GPUs across 12 global facilities</div>
                  <div className="text-orange-200 text-sm mb-2"><strong>Traditional Approach:</strong> Regional distributors, inconsistent pricing, 20+ week delays</div>
                  <div className="text-orange-200 text-sm"><strong>Business Risk:</strong> $8M monthly quality control losses during deployment delays</div>
                </div>
                <div className="space-y-2 text-orange-100">
                  <div className="flex justify-between"><span>Delivery Time:</span><span className="font-bold text-orange-300">35 days global rollout</span></div>
                  <div className="flex justify-between"><span>Hardware Cost:</span><span className="font-bold text-orange-300">$1.6M (bulk pricing)</span></div>
                  <div className="flex justify-between"><span>Commission Fee:</span><span className="font-bold text-orange-300">$80K (5% enterprise rate)</span></div>
                  <div className="flex justify-between"><span>Deployment Savings:</span><span className="font-bold text-orange-300">$32M prevented losses</span></div>
                  <div className="flex justify-between"><span>Quality Improvement:</span><span className="font-bold text-orange-300">84% defect reduction</span></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Historical Technology Cycle Expertise */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">25 Years Technology Cycle Expertise: Always First to Market</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 border-l-4 border-gray-500">
                <div className="text-xl font-bold text-gray-800 mb-3">1999-2005</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">Enterprise Server & Storage</div>
                <div className="text-sm text-gray-600 mb-3">Early adopter relationships during .com infrastructure boom, established distributor partnerships</div>
                <div className="text-xs text-gray-500">
                  <div>• $180M+ total sourcing</div>
                  <div>• Dell, HP, IBM partnerships</div>
                  <div>• 150+ enterprise deployments</div>
                </div>
              </div>
              <div className="text-center p-6 border-l-4 border-blue-500">
                <div className="text-xl font-bold text-blue-800 mb-3">2006-2015</div>
                <div className="text-lg font-semibold text-blue-700 mb-2">HPC & Early GPU Computing</div>
                <div className="text-sm text-blue-600 mb-3">NVIDIA Tesla/Quadro pioneering, scientific computing relationships, alternative channel development</div>
                <div className="text-xs text-blue-500">
                  <div>• $520M+ HPC sourcing</div>
                  <div>• NVIDIA Tesla early access</div>
                  <div>• 280+ scientific deployments</div>
                </div>
              </div>
              <div className="text-center p-6 border-l-4 border-green-500">
                <div className="text-xl font-bold text-green-800 mb-3">2016-2020</div>
                <div className="text-lg font-semibold text-green-700 mb-2">Machine Learning Infrastructure</div>
                <div className="text-sm text-green-600 mb-3">V100/A100 early adoption, alternative allocation development, geographic arbitrage mastery</div>
                <div className="text-xs text-green-500">
                  <div>• $780M+ ML infrastructure</div>
                  <div>• V100/A100 beta programs</div>
                  <div>• 320+ AI deployments</div>
                </div>
              </div>
              <div className="text-center p-6 border-l-4 border-red-500">
                <div className="text-xl font-bold text-red-800 mb-3">2021-Present</div>
                <div className="text-lg font-semibold text-red-700 mb-2">Enterprise AI Infrastructure</div>
                <div className="text-sm text-red-600 mb-3">H100 allocation access, commission model perfection, crisis procurement specialization during shortage</div>
                <div className="text-xs text-red-500">
                  <div>• $940M+ AI infrastructure</div>
                  <div>• H100 alternative allocation</div>
                  <div>• 100+ enterprise AI projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Authority & Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Enterprise-Grade Authority: Credentials Traditional Consultants Lack
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Professional liability insurance, industry certifications, and regulatory compliance enabling $50M+ transactions with Fortune 500 enterprises and government agencies.
            </p>
          </div>

          {/* Enhanced Trust Signals Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-8 bg-green-50 rounded-lg border-l-4 border-green-600">
              <div className="text-4xl font-bold text-green-600 mb-3">$50M+</div>
              <div className="text-gray-900 font-bold text-xl mb-2">Professional Liability</div>
              <div className="text-gray-600 text-sm mb-4">E&O insurance coverage for enterprise AI infrastructure transactions</div>
              <div className="text-xs text-green-700 font-semibold">Lloyd's of London Underwriter</div>
            </div>
            <div className="text-center p-8 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <div className="text-4xl font-bold text-blue-600 mb-3">95%</div>
              <div className="text-gray-900 font-bold text-xl mb-2">Success Rate</div>
              <div className="text-gray-600 text-sm mb-4">Transaction completion for qualified enterprise prospects with performance guarantees</div>
              <div className="text-xs text-blue-700 font-semibold">Audited by Ernst & Young</div>
            </div>
            <div className="text-center p-8 bg-purple-50 rounded-lg border-l-4 border-purple-600">
              <div className="text-4xl font-bold text-purple-600 mb-3">2-4hrs</div>
              <div className="text-gray-900 font-bold text-xl mb-2">Response Time</div>
              <div className="text-gray-600 text-sm mb-4">Maximum emergency response with global sourcing team activation</div>
              <div className="text-xs text-purple-700 font-semibold">SLA Guaranteed Contract</div>
            </div>
            <div className="text-center p-8 bg-orange-50 rounded-lg border-l-4 border-orange-600">
              <div className="text-4xl font-bold text-orange-600 mb-3">24/7</div>
              <div className="text-gray-900 font-bold text-xl mb-2">Global Coverage</div>
              <div className="text-gray-600 text-sm mb-4">Crisis procurement team across US, LATAM, APAC time zones</div>
              <div className="text-xs text-orange-700 font-semibold">Emergency Hotline Active</div>
            </div>
          </div>
          
          {/* Industry Certifications & Partnerships */}
          <div className="bg-gray-900 text-white p-8 rounded-lg mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">Industry Authority & Partnership Credentials</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-bold text-blue-300 mb-4">🏆 NVIDIA Partner Network</h4>
                <div className="space-y-2 text-gray-300">
                  <div>• <strong>Elite Partner Status:</strong> Highest tier partnership for enterprise AI infrastructure</div>
                  <div>• <strong>Technical Certification:</strong> AI infrastructure design and deployment expertise</div>
                  <div>• <strong>Allocation Access:</strong> Priority allocation during shortage periods</div>
                  <div>• <strong>Beta Programs:</strong> Early access to next-generation GPU architectures</div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-green-300 mb-4">🌍 International Trade Compliance</h4>
                <div className="space-y-2 text-gray-300">
                  <div>• <strong>C-TPAT Certification:</strong> US Customs trade partnership for expedited clearance</div>
                  <div>• <strong>AEO Authorization:</strong> EU Authorized Economic Operator for trusted trader status</div>
                  <div>• <strong>ISO 28000:</strong> Supply chain security management certification</div>
                  <div>• <strong>Export Controls:</strong> EAR/ITAR compliance for controlled technology</div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-purple-300 mb-4">💼 Enterprise Business Credentials</h4>
                <div className="space-y-2 text-gray-300">
                  <div>• <strong>GSA Schedule:</strong> Federal government contract vehicle for public sector</div>
                  <div>• <strong>SOC 2 Type II:</strong> Information security controls for enterprise data protection</div>
                  <div>• <strong>D&B D-U-N-S:</strong> Dun & Bradstreet business identification for Fortune 500 procurement</div>
                  <div>• <strong>CAGE Code:</strong> Commercial and Government Entity code for defense contractors</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Security & Compliance Standards */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-8 rounded-lg border-l-4 border-red-600">
              <h4 className="text-2xl font-bold text-red-900 mb-4">🔒 Security & Confidentiality Standards</h4>
              <div className="space-y-4 text-red-800">
                <div className="bg-red-100 p-4 rounded">
                  <div className="font-bold mb-2">Multi-Level NDA Framework</div>
                  <div className="text-sm">• Standard enterprise NDAs for commercial transactions</div>
                  <div className="text-sm">• Government security clearance for classified AI projects</div>
                  <div className="text-sm">• Financial institution confidentiality for regulated environments</div>
                </div>
                <div className="bg-red-100 p-4 rounded">
                  <div className="font-bold mb-2">Data Protection Compliance</div>
                  <div className="text-sm">• GDPR compliance for EU enterprise clients</div>
                  <div className="text-sm">• CCPA adherence for California-based companies</div>
                  <div className="text-sm">• SOX controls for public company procurement</div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
              <h4 className="text-2xl font-bold text-blue-900 mb-4">🎨 Quality Assurance & Performance Guarantees</h4>
              <div className="space-y-4 text-blue-800">
                <div className="bg-blue-100 p-4 rounded">
                  <div className="font-bold mb-2">Hardware Authentication</div>
                  <div className="text-sm">• NVIDIA factory seals verification and authenticity certification</div>
                  <div className="text-sm">• Supply chain tracking to prevent counterfeit hardware</div>
                  <div className="text-sm">• Performance benchmarking against manufacturer specifications</div>
                </div>
                <div className="bg-blue-100 p-4 rounded">
                  <div className="font-bold mb-2">Delivery Performance SLAs</div>
                  <div className="text-sm">• On-time delivery guarantee with penalty clauses</div>
                  <div className="text-sm">• Technical specification compliance verification</div>
                  <div className="text-sm">• Installation and integration support coordination</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Commission-Based Advantage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Commission-Based Procurement Revolutionizes AI Hardware Sourcing
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Our success-based model creates fundamentally different economic incentives than traditional flat-fee consultants, enabling superior speed, cost optimization, and risk elimination for enterprise AI initiatives.
            </p>
            
            {/* Economic Model Comparison */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Economic Model: Commission vs Traditional Flat-Fee Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-4 px-6 font-bold text-gray-800">Economic Factor</th>
                      <th className="py-4 px-6 font-bold text-green-800">Vommuli Commission Model</th>
                      <th className="py-4 px-6 font-bold text-red-800">Traditional Flat-Fee Consultants</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium">Payment Structure</td>
                      <td className="py-4 px-6 text-green-700">3-8% commission only on successful delivery</td>
                      <td className="py-4 px-6 text-red-700">$50K-$200K+ upfront regardless of results</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium">Speed Incentive</td>
                      <td className="py-4 px-6 text-green-700">Maximum motivation (no payment until delivery)</td>
                      <td className="py-4 px-6 text-red-700">No urgency (already paid upfront)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium">Total Project Cost</td>
                      <td className="py-4 px-6 text-green-700">Often 20-40% lower with arbitrage savings</td>
                      <td className="py-4 px-6 text-red-700">Full MSRP + consultant fees + hidden costs</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium">Relationship Investment</td>
                      <td className="py-4 px-6 text-green-700">Success-based model justifies premium supplier access</td>
                      <td className="py-4 px-6 text-red-700">Limited to existing distributor relationships</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium">Risk Allocation</td>
                      <td className="py-4 px-6 text-green-700">100% performance risk on Vommuli</td>
                      <td className="py-4 px-6 text-red-700">All execution risk on client</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Detailed Advantage Breakdown */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-green-900 text-white p-8 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-300 mb-4">Perfect Speed Alignment</h3>
                    <p className="text-green-100 mb-4">Commission structure creates unprecedented incentive alignment for rapid delivery vs traditional consultants who are paid regardless of timeline.</p>
                    <div className="bg-green-800 p-4 rounded">
                      <div className="text-green-200 text-sm space-y-1">
                        <div>• <strong>No Payment Until Delivery:</strong> Creates maximum urgency for 2-8 week timeline achievement</div>
                        <div>• <strong>Performance Penalty Risk:</strong> Late delivery directly impacts commission revenue</div>
                        <div>• <strong>Reputation Investment:</strong> Speed success essential for long-term client relationships</div>
                        <div>• <strong>Resource Mobilization:</strong> Success-based model justifies emergency procurement protocols</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900 text-white p-8 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-300 mb-4">Total Cost Optimization</h3>
                    <p className="text-blue-100 mb-4">Geographic arbitrage savings often exceed commission fees, delivering net cost reduction vs flat-fee consultants charging upfront regardless of procurement efficiency.</p>
                    <div className="bg-blue-800 p-4 rounded">
                      <div className="text-blue-200 text-sm space-y-1">
                        <div>• <strong>Geographic Arbitrage:</strong> 15-60% hardware cost savings via optimal sourcing location</div>
                        <div>• <strong>Commission Efficiency:</strong> 3-8% fee often lower than flat consultant costs</div>
                        <div>• <strong>Volume Optimization:</strong> Bulk purchasing power across enterprise client base</div>
                        <div>• <strong>Hidden Cost Elimination:</strong> No surprise fees, change orders, or scope expansion charges</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-purple-900 text-white p-8 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-300 mb-4">Premium Relationship Investment</h3>
                    <p className="text-purple-100 mb-4">Success-based revenue model justifies massive investment in global supplier relationships and alternative allocation channels that flat-fee consultants cannot afford.</p>
                    <div className="bg-purple-800 p-4 rounded">
                      <div className="text-purple-200 text-sm space-y-1">
                        <div>• <strong>25+ Year Investment:</strong> Quarter-century building relationships traditional consultants lack</div>
                        <div>• <strong>Alternative Allocation:</strong> NVIDIA-independent channels via Asian manufacturers</div>
                        <div>• <strong>Crisis Access:</strong> Emergency procurement protocols developed over multiple shortage cycles</div>
                        <div>• <strong>Executive Relationships:</strong> C-level supplier contacts enabling allocation priority</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-900 text-white p-8 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-300 mb-4">Complete Risk Elimination</h3>
                    <p className="text-red-100 mb-4">Zero upfront financial risk for enterprise buyers vs traditional consultants who demand significant payments before any hardware is sourced or delivered.</p>
                    <div className="bg-red-800 p-4 rounded">
                      <div className="text-red-200 text-sm space-y-1">
                        <div>• <strong>Zero Upfront Cost:</strong> No consultant fees, retainers, or deposits required to begin</div>
                        <div>• <strong>Performance Guarantees:</strong> 95% success rate with penalty clauses for non-delivery</div>
                        <div>• <strong>Professional Liability:</strong> $50M+ insurance coverage protecting client interests</div>
                        <div>• <strong>Aligned Incentives:</strong> Vommuli only succeeds when enterprise client achieves AI goals</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise CTA & Next Steps */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your AI Hardware Procurement?
            </h2>
            <p className="text-xl text-blue-200 max-w-4xl mx-auto mb-8">
              Join 850+ enterprises who've achieved 2-8 week delivery timelines with 20-40% cost savings through our commission-based model. Zero upfront risk, maximum results.
            </p>
            
            {/* Immediate Value Propositions */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-blue-800/50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-green-400 mb-2">$0</div>
                <div className="text-blue-200 font-semibold mb-1">Upfront Investment</div>
                <div className="text-blue-300 text-sm">Commission only on successful delivery</div>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-yellow-400 mb-2">2-4hrs</div>
                <div className="text-blue-200 font-semibold mb-1">Response Time</div>
                <div className="text-blue-300 text-sm">Emergency procurement assessment</div>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
                <div className="text-blue-200 font-semibold mb-1">Years Experience</div>
                <div className="text-blue-300 text-sm">Global sourcing network mastery</div>
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Primary CTA */}
            <div className="bg-red-600 p-8 rounded-lg border-l-4 border-red-400">
              <h3 className="text-2xl font-bold text-white mb-4">🚨 Emergency AI Hardware Procurement</h3>
              <p className="text-red-100 mb-6">Critical AI infrastructure needed in 2-8 weeks? Our crisis procurement specialists are standing by with global allocation access.</p>
              
              <div className="space-y-3 text-red-100 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>24/7 emergency response team activation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Alternative allocation access during shortages</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>95% success rate with performance guarantees</span>
                </div>
              </div>
              
              <Link 
                href="/contact"
                className="block w-full bg-white text-red-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors hover:bg-gray-100 text-center mb-4"
              >
                🚨 Schedule Emergency Consultation
              </Link>
              
              <div className="text-center text-red-200 text-sm">
                Typical response: <strong>2-4 hours</strong> for qualified enterprise prospects
              </div>
            </div>
            
            {/* Secondary CTA */}
            <div className="bg-green-600 p-8 rounded-lg border-l-4 border-green-400">
              <h3 className="text-2xl font-bold text-white mb-4">💰 Strategic AI Infrastructure Planning</h3>
              <p className="text-green-100 mb-6">Planning future AI initiatives? Calculate potential commission savings and delivery timeline advantages with our interactive tools.</p>
              
              <div className="space-y-3 text-green-100 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>Real-time cost comparison vs traditional procurement</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>Geographic arbitrage opportunity analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>Timeline optimization for competitive advantage</span>
                </div>
              </div>
              
              <Link 
                href="/tools/commission-calculator"
                className="block w-full bg-white text-green-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors hover:bg-gray-100 text-center mb-4"
              >
                💰 Calculate Commission Savings
              </Link>
              
              <div className="text-center text-green-200 text-sm">
                Instant analysis: <strong>Compare costs</strong> and delivery timelines
              </div>
            </div>
          </div>
          
          {/* Enterprise Testimonial */}
          <div className="mt-16 bg-gray-800 p-8 rounded-lg border-l-4 border-yellow-400">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-yellow-400 mb-4">🎆 Enterprise Client Success</h4>
              <blockquote className="text-lg text-gray-200 italic mb-6 max-w-4xl mx-auto">
                "Vommuli's commission-based model eliminated $2.3M in upfront consultant costs while delivering our 480 H100 GPUs in 21 days vs the 18-week quote from traditional distributors. Their geographic arbitrage strategy reduced hardware costs by 28%, and we closed our Series C funding round on schedule thanks to the accelerated AI infrastructure deployment."
              </blockquote>
              <div className="text-yellow-300 font-semibold">- Chief Technology Officer</div>
              <div className="text-gray-400 text-sm">AI Infrastructure Startup, $847M Valuation</div>
              <div className="text-xs text-gray-500 mt-2">*Client confidentiality maintained per enterprise NDA requirements</div>
            </div>
          </div>
          
          {/* Contact Methods */}
          <div className="mt-12 text-center">
            <h4 className="text-xl font-bold text-white mb-4">Multiple Ways to Connect</h4>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-blue-200">
                <div className="font-semibold">Emergency Hotline</div>
                <div className="text-sm">24/7 crisis procurement</div>
              </div>
              <div className="text-blue-200">
                <div className="font-semibold">Enterprise Consultation</div>
                <div className="text-sm">Strategic planning session</div>
              </div>
              <div className="text-blue-200">
                <div className="font-semibold">Interactive Tools</div>
                <div className="text-sm">Self-service cost analysis</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
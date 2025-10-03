'use client'

import { useState, useEffect, useCallback } from 'react'

interface CalculationResults {
  projectValue: number
  vommuliCommission: number
  traditionalFlatFee: number
  traditionalRetainer: number
  totalTraditionalCost: number
  savings: number
  savingsPercent: number
}

export default function CommissionCalculator() {
  const [projectValue, setProjectValue] = useState<number>(2500000) // Default $2.5M
  const [hardwareType, setHardwareType] = useState<string>('h100')
  const [timelineUrgency, setTimelineUrgency] = useState<string>('standard')
  const [results, setResults] = useState<CalculationResults | null>(null)
  const [showResults, setShowResults] = useState(false)

  // Commission rates based on project characteristics
  const getCommissionRate = (value: number, urgency: string, hardware: string): number => {
    let baseRate = 0.05 // 5% base rate
    
    // Volume discounts
    if (value >= 10000000) baseRate = 0.035 // 3.5% for $10M+
    else if (value >= 5000000) baseRate = 0.04 // 4% for $5M+
    else if (value >= 1000000) baseRate = 0.05 // 5% for $1M+
    
    // Urgency adjustments
    if (urgency === 'emergency') baseRate += 0.01 // +1% for emergency
    else if (urgency === 'expedited') baseRate += 0.005 // +0.5% for expedited
    
    // Hardware complexity adjustments
    if (hardware === 'h100' || hardware === 'custom') baseRate += 0.005 // +0.5% for complex
    
    return Math.min(baseRate, 0.08) // Cap at 8%
  }

  // Traditional consultant pricing (flat fees + retainers)
  const getTraditionalPricing = (value: number, urgency: string) => {
    const baseFlatFee = Math.max(150000, value * 0.08) // 8% or $150K minimum
    const monthlyRetainer = urgency === 'emergency' ? 25000 : 15000
    const projectMonths = urgency === 'emergency' ? 2 : 4
    
    return {
      flatFee: baseFlatFee,
      retainer: monthlyRetainer * projectMonths
    }
  }

  const calculateSavings = useCallback(() => {
    const commissionRate = getCommissionRate(projectValue, timelineUrgency, hardwareType)
    const vommuliCommission = projectValue * commissionRate
    
    const traditional = getTraditionalPricing(projectValue, timelineUrgency)
    const totalTraditionalCost = traditional.flatFee + traditional.retainer
    
    const savings = totalTraditionalCost - vommuliCommission
    const savingsPercent = (savings / totalTraditionalCost) * 100

    setResults({
      projectValue,
      vommuliCommission,
      traditionalFlatFee: traditional.flatFee,
      traditionalRetainer: traditional.retainer,
      totalTraditionalCost,
      savings,
      savingsPercent
    })
    setShowResults(true)
  }, [projectValue, hardwareType, timelineUrgency])

  useEffect(() => {
    calculateSavings()
  }, [projectValue, hardwareType, timelineUrgency, calculateSavings])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Commission Calculator
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              See exactly how much you save with our success-based commission model vs traditional consultants
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Inputs */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Project Details
            </h2>
            
            <div className="space-y-6">
              {/* Project Value */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Project Value
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    value={projectValue}
                    onChange={(e) => setProjectValue(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    min="500000"
                    max="50000000"
                    step="100000"
                  />
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[1000000, 2500000, 5000000, 10000000, 15000000].map((value) => (
                    <button
                      key={value}
                      onClick={() => setProjectValue(value)}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition-colors"
                    >
                      {formatCurrency(value)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hardware Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hardware Type
                </label>
                <select
                  value={hardwareType}
                  onChange={(e) => setHardwareType(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="a100">NVIDIA A100 (Standard)</option>
                  <option value="h100">NVIDIA H100 (Premium)</option>
                  <option value="l40s">NVIDIA L40S (Specialized)</option>
                  <option value="custom">Custom AI Infrastructure</option>
                </select>
              </div>

              {/* Timeline Urgency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Timeline Requirements
                </label>
                <select
                  value={timelineUrgency}
                  onChange={(e) => setTimelineUrgency(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="standard">Standard (8-12 weeks)</option>
                  <option value="expedited">Expedited (4-6 weeks)</option>
                  <option value="emergency">Emergency (2-4 weeks)</option>
                </select>
              </div>

              <button
                onClick={calculateSavings}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors"
              >
                Calculate Savings
              </button>
            </div>
          </div>

          {/* Results Display */}
          {showResults && results && (
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Cost Comparison Results
              </h2>

              {/* Vommuli Pricing */}
              <div className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-lg">
                <h3 className="text-lg font-bold text-green-800 mb-3">
                  Vommuli Success-Based Model
                </h3>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {formatCurrency(results.vommuliCommission)}
                </div>
                <div className="text-sm text-green-700">
                  {((results.vommuliCommission / results.projectValue) * 100).toFixed(1)}% commission on successful completion
                </div>
                <div className="mt-3 text-sm text-green-600">
                  ✓ Zero upfront cost<br/>
                  ✓ No payment until delivery<br/>
                  ✓ Aligned incentives
                </div>
              </div>

              {/* Traditional Consultant Pricing */}
              <div className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-lg">
                <h3 className="text-lg font-bold text-red-800 mb-3">
                  Traditional Consultant Model
                </h3>
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between">
                    <span className="text-red-700">Flat Fee:</span>
                    <span className="font-semibold">{formatCurrency(results.traditionalFlatFee)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-700">Monthly Retainer:</span>
                    <span className="font-semibold">{formatCurrency(results.traditionalRetainer)}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between">
                    <span className="font-bold text-red-800">Total Cost:</span>
                    <span className="text-2xl font-bold text-red-600">
                      {formatCurrency(results.totalTraditionalCost)}
                    </span>
                  </div>
                </div>
                <div className="mt-3 text-sm text-red-600">
                  ✗ Large upfront payment<br/>
                  ✗ Payment regardless of results<br/>
                  ✗ No performance alignment
                </div>
              </div>

              {/* Savings Summary */}
              <div className="p-6 bg-blue-50 border-2 border-blue-200 rounded-lg">
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  Your Savings with Vommuli
                </h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {formatCurrency(results.savings)}
                </div>
                <div className="text-lg text-blue-700">
                  {results.savingsPercent.toFixed(1)}% savings vs traditional consultants
                </div>
                
                <div className="mt-6">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                    Schedule Consultation - Lock In This Rate
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Value Proposition Section */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Vommuli&apos;s Commission Model Wins
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Aligned Incentives</h3>
              <p className="text-gray-600">We only succeed when you do. Our fee is tied directly to successful project completion.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Zero Upfront Risk</h3>
              <p className="text-gray-600">No retainers, no flat fees, no payment until your hardware is delivered.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Speed Motivation</h3>
              <p className="text-gray-600">Faster delivery means faster payment for us - we&apos;re incentivized for speed.</p>
            </div>
          </div>
        </div>

        {/* Lead Capture CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Save {results && formatCurrency(results.savings)} on Your Next Project?
          </h2>
          <p className="text-blue-100 mb-6">
            Schedule a consultation to discuss your specific requirements and lock in transparent, success-based pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-lg transition-colors">
              Download Full Cost Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
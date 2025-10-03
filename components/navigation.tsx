'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Vommuli
            </Link>
            <span className="text-sm text-gray-600 ml-2">AI Hardware Specialists</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <div className="relative group">
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Services
              </Link>
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    All Services
                  </Link>
                  <Link href="/services/nvidia-h100" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    NVIDIA H100 Procurement
                  </Link>
                  <Link href="/services/nvidia-a100" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    NVIDIA A100 Sourcing
                  </Link>
                  <Link href="/services/geographic-arbitrage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Geographic Arbitrage
                  </Link>
                  <Link href="/services/emergency-procurement" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Emergency Procurement
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link href="/tools" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Tools
              </Link>
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/tools/commission-calculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Commission Calculator
                  </Link>
                  <Link href="/tools/timeline-planner" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Timeline Planner
                  </Link>
                  <Link href="/tools/supply-intelligence" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Supply Intelligence
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Contact
            </Link>
            <div className="text-sm text-gray-600 border-l pl-4 ml-4">
              <div className="font-semibold text-green-600">Emergency Line:</div>
              <div>+1 (555) VOMMULI</div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Services
              </Link>
              <Link href="/services/nvidia-h100" className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-600">
                NVIDIA H100 Procurement
              </Link>
              <Link href="/services/geographic-arbitrage" className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-600">
                Geographic Arbitrage
              </Link>
              <Link href="/tools" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Tools
              </Link>
              <Link href="/tools/commission-calculator" className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-600">
                Commission Calculator
              </Link>
              <Link href="/tools/timeline-planner" className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-600">
                Timeline Planner
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                About
              </Link>
              <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Resources
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
              <div className="px-3 py-2 text-sm text-gray-600 border-t mt-2">
                <div className="font-semibold text-green-600">Emergency Line:</div>
                <div>+1 (555) VOMMULI</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
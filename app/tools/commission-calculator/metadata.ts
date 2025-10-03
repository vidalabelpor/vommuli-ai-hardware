import { generateSEO } from '@/lib/seo'
import { Metadata } from 'next'

export const metadata: Metadata = generateSEO({
  title: 'Commission Calculator - Compare AI Hardware Procurement Costs | Vommuli',
  description: 'Calculate exact savings with Vommuli\'s success-based commission model vs traditional consultant fees. See real-time cost comparisons for $1M-$15M GPU transactions.',
  keywords: [
    'GPU procurement cost calculator',
    'commission-based pricing calculator', 
    'AI hardware cost comparison',
    'enterprise GPU procurement savings',
    'success-fee vs flat-fee calculator',
    'NVIDIA H100 cost calculator',
    'transparent GPU procurement pricing'
  ]
})
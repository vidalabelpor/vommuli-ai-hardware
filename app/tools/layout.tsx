import { generateSEO } from '@/lib/seo'
import { Metadata } from 'next'

export const metadata: Metadata = generateSEO({
  title: 'AI Hardware Procurement Tools | Vommuli',
  description: 'Interactive tools for enterprise AI hardware procurement: commission calculator, timeline planner, and supply chain intelligence dashboard.',
  keywords: [
    'AI hardware procurement tools',
    'GPU procurement calculator',
    'enterprise hardware tools',
    'commission calculator',
    'timeline planner',
    'supply chain intelligence'
  ]
})

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  noindex?: boolean
  keywords?: string[]
  canonical?: string
  type?: 'website' | 'article' | 'service'
}

export function generateSEO({
  title = 'AI Hardware Specialists - Speed-First GPU Procurement | Vommuli',
  description = 'We get you AI hardware faster than anyone else - with zero upfront risk. Commission-based GPU procurement specialists with 25+ years global sourcing experience.',
  image = '/og-image.jpg',
  noindex = false,
  keywords = [
    'AI hardware procurement',
    'GPU sourcing specialists', 
    'enterprise AI hardware',
    'commission-based procurement',
    'fast AI hardware delivery',
    'NVIDIA H100 procurement',
    'enterprise GPU sourcing'
  ],
  canonical,
  type = 'website'
}: SEOProps = {}): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://vommuli.com'
  
  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Vommuli - AI Hardware Specialists' }],
    creator: 'Vommuli',
    publisher: 'Vommuli',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonical || baseUrl,
    },
    openGraph: {
      title,
      description,
      url: baseUrl,
      siteName: 'Vommuli - AI Hardware Specialists',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: type === 'article' ? 'article' : 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@vommuli',
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      nocache: noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        noimageindex: noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  }
}
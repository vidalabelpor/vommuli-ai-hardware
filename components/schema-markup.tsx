import { generateOrganizationSchema, generateLocalBusinessSchema, generateServiceSchema, generateWebSiteSchema } from '@/lib/schema'

interface SchemaMarkupProps {
  type?: 'organization' | 'local-business' | 'service' | 'website' | 'all'
  breadcrumbs?: Array<{name: string, url: string}>
  product?: {name: string, description: string, price: string}
}

export default function SchemaMarkup({ type = 'all', breadcrumbs, product }: SchemaMarkupProps) {
  const schemas = []

  if (type === 'all' || type === 'organization') {
    schemas.push(generateOrganizationSchema())
  }
  
  if (type === 'all' || type === 'local-business') {
    schemas.push(generateLocalBusinessSchema())
  }
  
  if (type === 'all' || type === 'service') {
    schemas.push(generateServiceSchema())
  }
  
  if (type === 'all' || type === 'website') {
    schemas.push(generateWebSiteSchema())
  }

  if (breadcrumbs) {
    schemas.push({
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    })
  }

  if (product) {
    schemas.push({
      '@type': 'Product',
      name: product.name,
      description: product.description,
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: 'USD',
        priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        itemCondition: 'https://schema.org/NewCondition',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: 'Vommuli - AI Hardware Specialists'
        }
      },
      brand: {
        '@type': 'Brand',
        name: 'NVIDIA'
      },
      category: 'AI Hardware'
    })
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': schemas
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
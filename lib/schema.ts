// Schema.org types for structured data
type SchemaValue = string | number | boolean | SchemaObject | SchemaValue[]

interface SchemaObject {
  '@type': string
  '@id'?: string
  '@context'?: string
  [key: string]: SchemaValue | undefined
}

interface Organization extends SchemaObject {
  '@type': 'Organization'
  name: string
  description?: string
  url?: string
}

interface LocalBusiness extends SchemaObject {
  '@type': 'ProfessionalService'
  name: string
  description: string
  url: string
  telephone: string
}

interface Service extends SchemaObject {
  '@type': 'Service'
  name: string
  description: string
  provider: Organization
  serviceType?: string
  areaServed?: string[]
}

interface WebSite extends SchemaObject {
  '@type': 'WebSite'
  name: string
  url: string
  description: string
  publisher: Organization
}

export function generateOrganizationSchema(): Organization {
  return {
    '@type': 'Organization',
    '@id': 'https://vommuli.com/#organization',
    name: 'Vommuli - AI Hardware Specialists',
    alternateName: 'Vommuli',
    description: 'Commission-based GPU procurement specialists with 25+ years global sourcing experience. We get you AI hardware faster than anyone else - with zero upfront risk.',
    url: 'https://vommuli.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://vommuli.com/logo.png',
      width: 400,
      height: 400
    },
    image: 'https://vommuli.com/og-image.jpg',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-VOMMULI',
      contactType: 'Emergency Procurement',
      availableLanguage: ['English', 'Spanish'],
      areaServed: ['US', 'LATAM', 'Asia Pacific']
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressRegion: 'United States'
    },
    foundingDate: '1999',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '25+'
    },
    knowsAbout: [
      'AI Hardware Procurement',
      'GPU Sourcing',
      'Enterprise Technology Procurement',
      'Supply Chain Management',
      'Geographic Arbitrage',
      'Commission-based Services'
    ],
    serviceArea: {
      '@type': 'Place',
      name: 'Global',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 39.8283,
        longitude: -98.5795
      }
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Hardware Procurement Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'NVIDIA H100 Procurement',
            description: 'Commission-based NVIDIA H100 GPU sourcing with 2-8 week delivery'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Enterprise AI Hardware Sourcing',
            description: 'Global sourcing network for enterprise AI infrastructure'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Emergency GPU Procurement',
            description: 'Expedited hardware delivery for urgent AI projects'
          }
        }
      ]
    }
  }
}

export function generateLocalBusinessSchema(): LocalBusiness {
  return {
    '@type': 'ProfessionalService',
    '@id': 'https://vommuli.com/#business',
    name: 'Vommuli - AI Hardware Specialists',
    description: 'Commission-based GPU procurement specialists serving enterprise clients globally. 25+ years global sourcing experience with speed-first methodology.',
    url: 'https://vommuli.com',
    telephone: '+1-555-VOMMULI',
    email: 'procurement@vommuli.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 39.8283,
      longitude: -98.5795
    },
    openingHours: 'Mo-Fr 06:00-20:00',
    priceRange: '$$$',
    paymentAccepted: 'Commission-based, Success fees',
    currenciesAccepted: 'USD',
    serviceArea: [
      {
        '@type': 'Country',
        name: 'United States'
      },
      {
        '@type': 'Place',
        name: 'Latin America'
      },
      {
        '@type': 'Place', 
        name: 'Asia Pacific'
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Hardware Procurement Services',
      itemListElement: [
        {
          '@type': 'Offer',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            price: '3-8% commission'
          },
          itemOffered: {
            '@type': 'Service',
            name: 'Commission-based GPU Procurement',
            provider: {
              '@type': 'Organization',
              name: 'Vommuli'
            }
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5'
    }
  }
}

export function generateServiceSchema(): Service {
  return {
    '@type': 'Service',
    '@id': 'https://vommuli.com/#service',
    name: 'AI Hardware Procurement Services',
    description: 'Commission-based enterprise GPU sourcing with global supply chain access. Speed-first methodology delivers AI hardware 2-8 weeks vs traditional 12-24 weeks.',
    provider: {
      '@type': 'Organization',
      name: 'Vommuli - AI Hardware Specialists'
    },
    serviceType: 'Hardware Procurement and Sourcing',
    areaServed: ['US', 'LATAM', 'Asia Pacific'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'GPU Procurement Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'NVIDIA H100 Procurement',
          description: 'Commission-based NVIDIA H100 sourcing with 4-week delivery',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            price: '5-8% commission on successful delivery'
          }
        },
        {
          '@type': 'Offer',
          name: 'Enterprise AI Infrastructure',
          description: 'Complete AI hardware solutions for enterprise deployment',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            price: '3-6% commission on project value'
          }
        }
      ]
    },
    audience: {
      '@type': 'Audience',
      name: 'Enterprise Technology Buyers',
      audienceType: 'Business'
    }
  }
}

export function generateWebSiteSchema(): WebSite {
  return {
    '@type': 'WebSite',
    '@id': 'https://vommuli.com/#website',
    url: 'https://vommuli.com',
    name: 'Vommuli - AI Hardware Specialists',
    description: 'Commission-based GPU procurement specialists. We get you AI hardware faster than anyone else - with zero upfront risk.',
    publisher: {
      '@type': 'Organization',
      name: 'Vommuli'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://vommuli.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    },
    mainEntity: {
      '@type': 'Organization',
      '@id': 'https://vommuli.com/#organization'
    }
  }
}

export function generateBreadcrumbSchema(items: Array<{name: string, url: string}>) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

export function generateProductSchema(productName: string, description: string, price: string) {
  return {
    '@type': 'Product',
    name: productName,
    description: description,
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: 'USD',
      priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 90 days
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
  }
}
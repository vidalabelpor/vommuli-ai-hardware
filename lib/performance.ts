// Core Web Vitals optimization utilities

interface LayoutShift {
  hadRecentInput: boolean;
  value: number;
}

interface FirstInputDelay {
  processingStart: number;
  startTime: number;
}
export function preloadCriticalResources() {
  if (typeof window !== 'undefined') {
    // Preload critical fonts
    const fontPreload = document.createElement('link')
    fontPreload.rel = 'preload'
    fontPreload.href = 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2'
    fontPreload.as = 'font'
    fontPreload.type = 'font/woff2'
    fontPreload.crossOrigin = 'anonymous'
    document.head.appendChild(fontPreload)

    // Preload critical images
    const heroImagePreload = document.createElement('link')
    heroImagePreload.rel = 'preload'
    heroImagePreload.href = '/hero-background.webp'
    heroImagePreload.as = 'image'
    document.head.appendChild(heroImagePreload)
  }
}

export function optimizeImages() {
  if (typeof window !== 'undefined') {
    // Lazy load images below the fold
    const images = document.querySelectorAll('img[data-src]')
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          img.src = img.dataset.src!
          img.classList.remove('lazy')
          observer.unobserve(img)
        }
      })
    })

    images.forEach(img => imageObserver.observe(img))
  }
}

export function measureWebVitals() {
  if (typeof window !== 'undefined') {
    // Measure Largest Contentful Paint (LCP)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      const lastEntry = entries[entries.length - 1]
      console.log('LCP:', lastEntry.startTime)
      
      // Track LCP performance
      if (lastEntry.startTime > 2500) {
        console.warn('LCP exceeds threshold (2.5s):', lastEntry.startTime)
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] })

    // Measure First Input Delay (FID)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      entries.forEach(entry => {
        const fidEntry = entry as unknown as FirstInputDelay
        console.log('FID:', fidEntry.processingStart - fidEntry.startTime)
        
        // Track FID performance
        if ((fidEntry.processingStart - fidEntry.startTime) > 100) {
          console.warn('FID exceeds threshold (100ms):', fidEntry.processingStart - fidEntry.startTime)
        }
      })
    }).observe({ entryTypes: ['first-input'] })

    // Measure Cumulative Layout Shift (CLS)
    let clsValue = 0
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!(entry as unknown as LayoutShift).hadRecentInput) {
          clsValue += (entry as unknown as LayoutShift).value
        }
      }
      console.log('CLS:', clsValue)
      
      // Track CLS performance
      if (clsValue > 0.1) {
        console.warn('CLS exceeds threshold (0.1):', clsValue)
      }
    }).observe({ entryTypes: ['layout-shift'] })
  }
}

export function optimizeCSS() {
  if (typeof window !== 'undefined') {
    // Remove unused CSS (basic implementation)
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
    
    stylesheets.forEach(stylesheet => {
      const link = stylesheet as HTMLLinkElement
      if (link.href.includes('unused')) {
        link.remove()
      }
    })

    // Inline critical CSS for above-the-fold content
    const criticalCSS = `
      /* Critical styles for initial paint */
      .hero-section {
        background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
        min-height: 100vh;
      }
      .nav-bar {
        position: sticky;
        top: 0;
        z-index: 50;
        background: white;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }
    `
    
    const style = document.createElement('style')
    style.innerHTML = criticalCSS
    document.head.appendChild(style)
  }
}

export function optimizeJavaScript() {
  if (typeof window !== 'undefined') {
    // Defer non-critical JavaScript
    const scripts = document.querySelectorAll('script[data-defer]')
    
    scripts.forEach(script => {
      const newScript = document.createElement('script')
      newScript.src = (script as HTMLScriptElement).src
      newScript.defer = true
      document.body.appendChild(newScript)
      script.remove()
    })

    // Preload critical JavaScript
    const criticalScripts = ['/js/critical.js', '/js/forms.js']
    
    criticalScripts.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = src
      link.as = 'script'
      document.head.appendChild(link)
    })
  }
}

export function enableResourceHints() {
  if (typeof window !== 'undefined') {
    // DNS prefetch for external domains
    const externalDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'www.google-analytics.com'
    ]

    externalDomains.forEach(domain => {
      const link = document.createElement('link')
      link.rel = 'dns-prefetch'
      link.href = `//${domain}`
      document.head.appendChild(link)
    })

    // Preconnect to critical third-party origins
    const criticalOrigins = ['https://fonts.gstatic.com']
    
    criticalOrigins.forEach(origin => {
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = origin
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })
  }
}

export function initializePerformanceOptimizations() {
  if (typeof window !== 'undefined') {
    // Run optimizations on page load
    window.addEventListener('load', () => {
      preloadCriticalResources()
      optimizeImages()
      measureWebVitals()
      optimizeCSS()
      optimizeJavaScript()
      enableResourceHints()
    })

    // Run some optimizations earlier
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        enableResourceHints()
      })
    } else {
      enableResourceHints()
    }
  }
}

// Service Worker for caching strategy
export function registerServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration)
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError)
        })
    })
  }
}

// Critical rendering path optimization
export function optimizeCriticalRenderingPath() {
  if (typeof window !== 'undefined') {
    // Remove render-blocking resources
    const renderBlockingCSS = document.querySelectorAll('link[rel="stylesheet"]:not([media])')
    
    renderBlockingCSS.forEach((link, index) => {
      if (index > 0) { // Keep only the first critical stylesheet
        (link as HTMLLinkElement).media = 'print'
        link.addEventListener('load', () => {
          (link as HTMLLinkElement).media = 'all'
        })
      }
    })

    // Optimize font loading
    const fontLinks = document.querySelectorAll('link[href*="fonts"]')
    fontLinks.forEach(link => {
      (link as HTMLLinkElement).rel = 'preload'
      ;(link as HTMLLinkElement).as = 'style'
      link.addEventListener('load', () => {
        (link as HTMLLinkElement).rel = 'stylesheet'
      })
    })
  }
}
'use client'

import { useEffect } from 'react'
import { initializePerformanceOptimizations } from '@/lib/performance'

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Initialize performance optimizations
    initializePerformanceOptimizations()
    
    // Add critical CSS for above-the-fold content
    const criticalCSS = `
      /* Critical CSS for initial paint */
      body {
        font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
        line-height: 1.6;
        color: #1f2937;
        background-color: #ffffff;
      }
      
      .hero-gradient {
        background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
      }
      
      .nav-sticky {
        position: sticky;
        top: 0;
        z-index: 50;
        backdrop-filter: blur(8px);
      }
      
      /* Prevent layout shift */
      .aspect-video {
        aspect-ratio: 16 / 9;
      }
      
      .aspect-square {
        aspect-ratio: 1 / 1;
      }
      
      /* Loading states */
      .skeleton {
        background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
      }
      
      @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      
      /* Optimize animations */
      .transition-optimized {
        transition-property: transform, opacity;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform, opacity;
      }
      
      /* Button hover optimizations */
      .btn-optimized:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }
      
      /* Reduce motion for accessibility */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `
    
    // Inject critical CSS
    const style = document.createElement('style')
    style.innerHTML = criticalCSS
    document.head.appendChild(style)
    
    // Preload critical resources
    const preloadResources = [
      { href: '/favicon.ico', as: 'image' },
      { href: 'https://fonts.gstatic.com', rel: 'preconnect', crossOrigin: 'anonymous' }
    ]
    
    preloadResources.forEach(resource => {
      const link = document.createElement('link')
      if (resource.rel) {
        link.rel = resource.rel
      } else {
        link.rel = 'preload'
        if (resource.as) link.as = resource.as
      }
      link.href = resource.href
      if (resource.crossOrigin) {
        link.crossOrigin = resource.crossOrigin
      }
      document.head.appendChild(link)
    })
    
    // Optimize images loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img')
      images.forEach(img => {
        // Add loading="lazy" to images below the fold
        if (!img.loading && img.getBoundingClientRect().top > window.innerHeight) {
          img.loading = 'lazy'
        }
        
        // Add decoding="async" for better performance
        if (!img.decoding) {
          img.decoding = 'async'
        }
      })
    }
    
    // Run image optimization
    optimizeImages()
    
    // Re-run on navigation
    const observer = new MutationObserver(() => {
      optimizeImages()
    })
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    })
    
    // Cleanup
    return () => {
      observer.disconnect()
    }
  }, [])

  // Add viewport meta tag for mobile optimization
  useEffect(() => {
    const viewport = document.querySelector('meta[name="viewport"]')
    if (!viewport) {
      const meta = document.createElement('meta')
      meta.name = 'viewport'
      meta.content = 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes'
      document.head.appendChild(meta)
    }
  }, [])

  return null // This component doesn't render anything
}
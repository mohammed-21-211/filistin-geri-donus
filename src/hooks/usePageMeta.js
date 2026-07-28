import { useEffect } from 'react'
import { org } from '../data/content'

/**
 * Sayfa başlığını ve meta açıklamasını günceller.
 * Ayrıca her sayfada "noindex, nofollow" etiketinin var olduğunu garanti eder.
 */
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${org.name}` : org.name

    // Açıklama
    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', description)
    }

    // Arşivleme engeli — her yönlendirmede yeniden doğrula
    let robots = document.querySelector('meta[name="robots"]')
    if (!robots) {
      robots = document.createElement('meta')
      robots.setAttribute('name', 'robots')
      document.head.appendChild(robots)
    }
    robots.setAttribute('content', 'noindex, nofollow, noarchive, nosnippet, noimageindex')
  }, [title, description])
}

import { useEffect, useState } from 'react'
import Icon from './Icon'

/**
 * Sayfayı yumuşak biçimde en üste kaydıran, aşağı inildiğinde beliren
 * yüzen buton. Hem masaüstünde hem mobilde görünür.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    try {
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
    } catch {
      // Çok eski tarayıcılar için yedek
      window.scrollTo(0, 0)
    }
  }

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? 'is-visible' : ''}`}
      onClick={scrollUp}
      aria-label="Sayfanın başına dön"
      title="Yukarı çık"
    >
      <Icon name="arrowUp" size={22} />
    </button>
  )
}

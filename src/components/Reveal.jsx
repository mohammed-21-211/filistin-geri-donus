import { useEffect, useRef, useState } from 'react'

/**
 * IntersectionObserver ile görünür olunca yumuşak giriş animasyonu uygular.
 */
export default function Reveal({ children, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // IntersectionObserver desteklenmiyorsa içeriği doğrudan göster (güvenli varsayılan)
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    // Öğe zaten görünür alandaysa animasyonu beklemeden göster
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

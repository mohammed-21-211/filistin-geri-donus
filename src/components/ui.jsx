import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import Icon from './Icon'
import { ctaButton } from '../data/content'

/* Bölüm başlığı (eyebrow + başlık + isteğe bağlı giriş) */
export function SectionHead({ eyebrow, title, intro, center = false }) {
  return (
    <div className={`section-head ${center ? 'section-head--center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  )
}

/* Tikli liste */
export function CheckList({ items }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <Icon name="check" size={16} className="check-list__icon" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/* Metin paragrafları */
export function Prose({ paragraphs }) {
  return (
    <div className="prose">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  )
}

/* "Bize Ulaşın" çağrı bandı */
export function CtaBand({ eyebrow, title, text }) {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="cta-band">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="cta-band__title">{title}</h2>
          {text && <p className="cta-band__text">{text}</p>}
          <div className="cta-band__actions">
            <Link to="/iletisim" className="btn btn--light">
              {ctaButton}
              <Icon name="arrow" size={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* Basit "Bize Ulaşın" butonu */
export function ContactButton({ variant = 'primary' }) {
  return (
    <Link to="/iletisim" className={`btn btn--${variant}`}>
      {ctaButton}
      <Icon name="arrow" size={18} />
    </Link>
  )
}

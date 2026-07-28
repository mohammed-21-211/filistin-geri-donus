import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import Icon from '../components/Icon'

export default function NotFound() {
  usePageMeta('Sayfa Bulunamadı')

  return (
    <section className="hero hero--simple">
      <div className="container hero__inner">
        <div>
          <span className="eyebrow hero__eyebrow">404</span>
          <h1 className="hero__title">Sayfa Bulunamadı</h1>
          <p className="hero__text">
            Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Ana sayfaya dönerek
            gezinmeye devam edebilirsiniz.
          </p>
          <div className="hero__actions">
            <Link to="/" className="btn btn--primary">
              <Icon name="home" size={18} />
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

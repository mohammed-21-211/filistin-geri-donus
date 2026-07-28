import { Link } from 'react-router-dom'
import Icon from './Icon'
import { footer, org } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Marka + adres */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/logo-light.svg" alt={org.name} width="185" height="46" />
            </div>
            <p className="footer__address">
              <Icon name="location" size={18} className="footer__icon" />
              <span>{org.address}</span>
            </p>
            <p className="footer__email">
              <Icon name="mail" size={18} className="footer__icon" />
              <span>
                E-posta: <a href={`mailto:${org.email}`}>{org.email}</a>
              </span>
            </p>
          </div>

          {/* Keşfedin */}
          <div className="footer__col">
            <h3 className="footer__col-title">{footer.exploreTitle}</h3>
            <ul className="footer__list">
              {footer.exploreLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumsal */}
          <div className="footer__col">
            <h3 className="footer__col-title">{footer.corporateTitle}</h3>
            <ul className="footer__list">
              {footer.corporateLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Yasal bilgiler */}
        <div className="footer__legal">
          <p className="footer__legal-text">
            {org.legalIntro} Kütük Numarası: {org.registryNumber} Kuruluş Tarihi:{' '}
            {org.foundationDate}
          </p>
        </div>

        {/* Telif */}
        <div className="footer__bottom">{org.copyright}</div>
      </div>
    </footer>
  )
}

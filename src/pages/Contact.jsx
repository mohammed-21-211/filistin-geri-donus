import { useState } from 'react'
import { Link } from 'react-router-dom'
import { contact, org } from '../data/content'
import usePageMeta from '../hooks/usePageMeta'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { SectionHead } from '../components/ui'

export default function Contact() {
  usePageMeta('İletişim', contact.hero.paragraphs[0])
  const { hero, info, form, faq } = contact

  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [openFaq, setOpenFaq] = useState(0)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formEl = e.target
    const data = new FormData(formEl)

    // Konu satırını okunaklı hale getir + otomatik yanıt ayarları
    data.append('_subject', `İletişim Formu: ${data.get('subject') || 'Yeni mesaj'}`)
    data.append('_template', 'table')
    data.append('_captcha', 'false')

    setStatus('sending')
    try {
      // Mesaj, derneğin resmi e-posta adresine (org.email) iletilir.
      const res = await fetch(`https://formsubmit.co/ajax/${org.email}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!res.ok) throw new Error('Gönderim başarısız')
      setStatus('sent')
      formEl.reset()
      setTimeout(() => setStatus('idle'), 8000)
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="hero hero--simple">
        <div className="container hero__inner">
          <div>
            <span className="eyebrow hero__eyebrow">{hero.eyebrow}</span>
            <h1 className="hero__title">{hero.title}</h1>
            <p className="hero__text">{hero.paragraphs[0]}</p>
            <p className="hero__text">{hero.paragraphs[1]}</p>
          </div>
        </div>
      </section>

      {/* İLETİŞİM BİLGİLERİ + FORM */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Bilgiler */}
            <Reveal>
              <SectionHead eyebrow={info.eyebrow} title={info.title} />
              <div className="info-card">
                <div className="info-row">
                  <span className="info-row__icon">
                    <Icon name="building" size={22} />
                  </span>
                  <div>
                    <div className="info-row__label">Kuruluş</div>
                    <div className="info-row__value">{org.name}</div>
                  </div>
                </div>
                <div className="info-row">
                  <span className="info-row__icon">
                    <Icon name="location" size={22} />
                  </span>
                  <div>
                    <div className="info-row__label">Adres</div>
                    <div className="info-row__value">{org.address}</div>
                  </div>
                </div>
                <div className="info-row">
                  <span className="info-row__icon">
                    <Icon name="mail" size={22} />
                  </span>
                  <div>
                    <div className="info-row__label">E-posta</div>
                    <div className="info-row__value">
                      <a href={`mailto:${org.email}`}>{org.email}</a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal>
              <SectionHead eyebrow={form.eyebrow} title={form.title} intro={form.intro} />
              <form className="form" onSubmit={handleSubmit}>
                {/* Spam koruması (honeypot) — kullanıcıya görünmez */}
                <input
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ display: 'none' }}
                />
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="name">{form.fields.name}</label>
                    <input id="name" name="name" type="text" required />
                  </div>
                  <div className="field">
                    <label htmlFor="email">{form.fields.email}</label>
                    <input id="email" name="email" type="email" required />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="organization">{form.fields.organization}</label>
                  <input id="organization" name="organization" type="text" />
                </div>

                <div className="field">
                  <label htmlFor="subject">{form.fields.subject}</label>
                  <input id="subject" name="subject" type="text" required />
                </div>

                <div className="field">
                  <label htmlFor="message">{form.fields.message}</label>
                  <textarea id="message" name="message" required />
                </div>

                <label className="consent">
                  <input type="checkbox" name="consent" required />
                  <span>
                    <Link to="/gizlilik-politikasi">Gizlilik Politikası</Link>’nı okudum ve
                    kişisel verilerimin talebime yanıt verilmesi amacıyla işlenmesini kabul
                    ediyorum.
                  </span>
                </label>

                <button
                  type="submit"
                  className="btn btn--primary form__submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Gönderiliyor…' : form.submit}
                  {status !== 'sending' && <Icon name="arrow" size={18} />}
                </button>

                {status === 'sent' && (
                  <p className="form__note" role="status">
                    <Icon name="check" size={18} />
                    <span>Mesajınız alındı. En kısa sürede size geri dönüş yapılacaktır.</span>
                  </p>
                )}

                {status === 'error' && (
                  <p className="form__note form__note--error" role="alert">
                    <span>
                      Mesaj gönderilemedi. Lütfen tekrar deneyin veya{' '}
                      <a href={`mailto:${org.email}`}>{org.email}</a> adresine yazın.
                    </span>
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SIKÇA SORULAN SORULAR */}
      <section className="section section--cream">
        <div className="container">
          <SectionHead eyebrow={faq.eyebrow} title={faq.title} center />
          <div className="faq">
            {faq.items.map((item, i) => {
              const isOpen = openFaq === i
              return (
                <div key={item.q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="faq__q"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq__icon" aria-hidden="true">
                      +
                    </span>
                  </button>
                  <div
                    className="faq__a"
                    style={{ maxHeight: isOpen ? '400px' : '0' }}
                  >
                    <div className="faq__a-inner">{item.a}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

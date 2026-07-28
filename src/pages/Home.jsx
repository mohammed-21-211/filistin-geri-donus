import { Link } from 'react-router-dom'
import { home, ctaButton } from '../data/content'
import usePageMeta from '../hooks/usePageMeta'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { CommunityScene } from '../components/Illustration'
import { SectionHead, CheckList, Prose, CtaBand, ContactButton } from '../components/ui'

export default function Home() {
  usePageMeta('Ana Sayfa', home.hero.paragraphs[0])
  const { hero, about, workAreas, approach, collaboration, cta } = home

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero__inner">
          <div>
            <span className="eyebrow hero__eyebrow">{hero.eyebrow}</span>
            <h1 className="hero__title">{hero.title}</h1>
            <p className="hero__text">{hero.paragraphs[0]}</p>
            <p className="hero__text">{hero.paragraphs[1]}</p>
            <div className="hero__actions">
              <ContactButton />
              <Link to="/hakkimizda" className="btn btn--ghost">
                Hakkımızda
              </Link>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__emblem">
              <img src="/favicon.svg" alt="FİLİSTİN GERİ DÖNÜŞ DERNEĞİ logosu" />
            </div>
          </div>
        </div>
      </section>

      {/* DERNEĞİMİZ HAKKINDA */}
      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal>
              <SectionHead eyebrow={about.eyebrow} title={about.title} />
              <Prose paragraphs={about.paragraphs} />
              <div style={{ marginTop: 28 }}>
                <ContactButton />
              </div>
            </Reveal>
            <Reveal className="split__media">
              <div className="media-card media-card--scene">
                <CommunityScene className="media-card__art" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ÇALIŞMA ALANLARIMIZ */}
      <section className="section section--cream">
        <div className="container">
          <SectionHead
            eyebrow={workAreas.eyebrow}
            title={workAreas.title}
            center
          />
          <div className="grid grid--4">
            {workAreas.items.map((item) => (
              <Reveal key={item.title}>
                <article className="card">
                  <div className="card__icon">
                    <Icon name={item.icon} />
                  </div>
                  <h3 className="card__title">{item.title}</h3>
                  <p className="card__text">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <ContactButton />
          </div>
        </div>
      </section>

      {/* NASIL ÇALIŞIYORUZ */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow={approach.eyebrow}
            title={approach.title}
            intro={approach.intro}
            center
          />
          <div className="grid grid--3">
            {approach.items.map((item) => (
              <Reveal key={item.title}>
                <article className="card">
                  <div className="card__icon">
                    <Icon name={item.icon} />
                  </div>
                  <h3 className="card__title">{item.title}</h3>
                  <p className="card__text">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* KURUMSAL İŞ BİRLİĞİ */}
      <section className="section section--cream">
        <div className="container">
          <div className="split">
            <Reveal>
              <SectionHead
                eyebrow={collaboration.eyebrow}
                title={collaboration.title}
              />
              <p className="lead">{collaboration.intro}</p>
              <div style={{ marginTop: 28 }}>
                <ContactButton />
              </div>
            </Reveal>
            <Reveal className="split__media">
              <div className="panel">
                <p className="list-title">{collaboration.listTitle}</p>
                <CheckList items={collaboration.list} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BİZİMLE İLETİŞİME GEÇİN */}
      <CtaBand eyebrow={cta.eyebrow} title={cta.title} text={cta.text} />
    </>
  )
}

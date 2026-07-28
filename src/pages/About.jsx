import { about } from '../data/content'
import usePageMeta from '../hooks/usePageMeta'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { SolidarityScene } from '../components/Illustration'
import { SectionHead, Prose, ContactButton } from '../components/ui'

export default function About() {
  usePageMeta('Hakkımızda', about.hero.paragraphs[0])
  const { hero, whoWeAre, missionVision, methodology, values, legalStatus } = about

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
            <div className="hero__actions">
              <ContactButton />
            </div>
          </div>
        </div>
      </section>

      {/* BİZ KİMİZ */}
      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal>
              <SectionHead eyebrow={whoWeAre.eyebrow} title={whoWeAre.title} />
              <Prose paragraphs={whoWeAre.paragraphs} />
            </Reveal>
            <Reveal className="split__media">
              <div className="media-card media-card--scene">
                <SolidarityScene className="media-card__art" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MİSYON & VİZYON */}
      <section className="section section--cream">
        <div className="container">
          <div className="grid grid--2">
            {missionVision.map((block) => (
              <Reveal key={block.eyebrow}>
                <article className="card">
                  <div className="card__icon">
                    <Icon name={block.icon} />
                  </div>
                  <span className="eyebrow">{block.eyebrow}</span>
                  <h3 className="card__title" style={{ marginTop: 8 }}>
                    {block.title}
                  </h3>
                  <div style={{ marginTop: 10 }}>
                    <Prose paragraphs={block.paragraphs} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* YAKLAŞIMIMIZ */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow={methodology.eyebrow}
            title={methodology.title}
            intro={methodology.intro}
            center
          />
          <div className="grid grid--4">
            {methodology.items.map((item) => (
              <Reveal key={item.step}>
                <article className="step">
                  <div className="step__num">{item.step}</div>
                  <h3 className="step__title">{item.title}</h3>
                  <p className="step__text">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEĞERLERİMİZ */}
      <section className="section section--cream">
        <div className="container">
          <SectionHead eyebrow={values.eyebrow} title={values.title} center />
          <div className="grid grid--3">
            {values.items.map((item) => (
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

      {/* YASAL STATÜMÜZ */}
      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal>
              <SectionHead
                eyebrow={legalStatus.eyebrow}
                title={legalStatus.title}
                intro={legalStatus.intro}
              />
              <p className="footnote">{legalStatus.footnote}</p>
            </Reveal>
            <Reveal className="split__media">
              <div className="facts">
                {legalStatus.facts.map((fact) => (
                  <div className="fact" key={fact.label}>
                    <div className="fact__label">{fact.label}</div>
                    <div className="fact__value">{fact.value}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

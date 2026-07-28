import { workAreas } from '../data/content'
import usePageMeta from '../hooks/usePageMeta'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { SectionHead, CheckList, Prose, ContactButton } from '../components/ui'

export default function WorkAreas() {
  usePageMeta('Çalışma Alanlarımız', workAreas.hero.paragraphs[0])
  const { hero, sections, collaboration, process } = workAreas

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

      {/* ÇALIŞMA ALANI DETAYLARI */}
      <section className="section">
        <div className="container">
          {sections.map((sec, i) => (
            <Reveal
              key={sec.eyebrow}
              className={`split ${i % 2 === 1 ? 'split--reverse' : ''}`}
              style={{ marginBottom: i === sections.length - 1 ? 0 : 56 }}
            >
              <div>
                <div className="content-block__head" style={{ marginBottom: 14 }}>
                  <div className="content-block__icon">
                    <Icon name={sec.icon} />
                  </div>
                  <span className="eyebrow" style={{ margin: 0 }}>
                    {sec.eyebrow}
                  </span>
                </div>
                <h2 className="section-title" style={{ marginBottom: 14 }}>
                  {sec.title}
                </h2>
                <Prose paragraphs={sec.paragraphs} />
                {sec.footnote && <p className="footnote">{sec.footnote}</p>}
              </div>
              <div className="split__media">
                <div className="panel">
                  <p className="list-title">{sec.listTitle}</p>
                  <CheckList items={sec.list} />
                </div>
              </div>
            </Reveal>
          ))}
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

      {/* FAALİYETLERİMİZİ NASIL GELİŞTİRİYORUZ */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow={process.eyebrow}
            title={process.title}
            intro={process.intro}
            center
          />
          <div className="grid grid--4">
            {process.items.map((item) => (
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
    </>
  )
}

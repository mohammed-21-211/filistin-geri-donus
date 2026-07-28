import { privacy } from '../data/content'
import usePageMeta from '../hooks/usePageMeta'
import Reveal from '../components/Reveal'
import { CheckList } from '../components/ui'

export default function Privacy() {
  usePageMeta('Gizlilik Politikası', privacy.intro[0])

  return (
    <>
      {/* HERO */}
      <section className="hero hero--simple">
        <div className="container hero__inner">
          <div>
            <span className="eyebrow hero__eyebrow">{privacy.eyebrow}</span>
            <h1 className="hero__title">{privacy.title}</h1>
          </div>
        </div>
      </section>

      {/* METİN */}
      <section className="section">
        <div className="container">
          <div className="legal">
            <span className="legal__updated">{privacy.lastUpdated}</span>
            <div className="legal__intro">
              {privacy.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {privacy.sections.map((sec) => (
              <Reveal key={sec.title} className="legal__section">
                <h2>{sec.title}</h2>
                {sec.paragraphs?.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {sec.list && <CheckList items={sec.list} />}
                {sec.footnote && <p className="footnote">{sec.footnote}</p>}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

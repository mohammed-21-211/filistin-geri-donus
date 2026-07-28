import { governance } from '../data/content'
import usePageMeta from '../hooks/usePageMeta'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { SectionHead, CheckList, Prose, ContactButton } from '../components/ui'

export default function Governance() {
  usePageMeta('Yönetişim ve Şeffaflık', governance.hero.paragraphs[0])
  const { hero, legalStatus, blocks } = governance

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

      {/* YASAL STATÜ */}
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

      {/* KURUMSAL BLOKLAR */}
      <section className="section section--cream">
        <div className="container">
          {blocks.map((block) => (
            <Reveal key={block.eyebrow} className="content-block">
              <div className="content-block__head">
                <div className="content-block__icon">
                  <Icon name={block.icon} />
                </div>
                <div>
                  <span className="eyebrow" style={{ margin: 0 }}>
                    {block.eyebrow}
                  </span>
                  <h2 className="content-block__title">{block.title}</h2>
                </div>
              </div>

              {block.intro && <p className="lead">{block.intro}</p>}
              {block.paragraphs && (
                <div style={{ marginTop: 12 }}>
                  <Prose paragraphs={block.paragraphs} />
                </div>
              )}

              {block.list && (
                <div className="panel" style={{ marginTop: 22 }}>
                  {block.listTitle && <p className="list-title">{block.listTitle}</p>}
                  <CheckList items={block.list} />
                </div>
              )}

              {block.footnote && <p className="footnote">{block.footnote}</p>}
            </Reveal>
          ))}
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <ContactButton />
          </div>
        </div>
      </section>
    </>
  )
}

import { projects } from '../data/profile.js'
import Section from './Section.jsx'

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid">
        {projects.map((p) => (
          <article key={p.title} className="card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <ul className="tags">
              {p.tags.map((t) => (
                <li key={t} className="tag tag-sm">
                  {t}
                </li>
              ))}
            </ul>
            <div className="card-links">
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noreferrer">
                  Source ↗
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer">
                  Live demo ↗
                </a>
              )}
              {p.paper && (
                <a href={p.paper} target="_blank" rel="noreferrer">
                  Read (PDF) ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

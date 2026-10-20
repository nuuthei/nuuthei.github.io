import { education } from '../data/profile.js'
import Section from './Section.jsx'

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="timeline">
        {education.map((e) => (
          <li key={e.degree} className="timeline-item">
            <div className="timeline-head">
              <h3>
                {e.degree} <span className="muted">@ {e.school}</span>
              </h3>
              <span className="muted period">{e.period}</span>
            </div>
            {e.note && <p className="timeline-note">{e.note}</p>}
          </li>
        ))}
      </ol>
    </Section>
  )
}

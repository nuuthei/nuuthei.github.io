import { experience } from '../data/profile.js'
import Section from './Section.jsx'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="timeline">
        {experience.map((e) => (
          <li key={`${e.company}-${e.period}`} className="timeline-item">
            <div className="timeline-head">
              <h3>
                {e.role} <span className="muted">@ {e.company}</span>
              </h3>
              <span className="muted period">{e.period}</span>
            </div>
            <ul>
              {e.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}

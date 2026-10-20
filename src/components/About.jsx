import { about } from '../data/profile.js'
import Section from './Section.jsx'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="about">
        <div>
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <ul className="tags" aria-label="Skills">
          {about.skills.map((s) => (
            <li key={s} className="tag">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

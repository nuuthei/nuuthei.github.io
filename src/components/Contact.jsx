import { profile } from '../data/profile.js'
import Section from './Section.jsx'

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="contact">
        <p>Questions, opportunities or just a hello. Reach me on:</p>
        <ul className="socials">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a href={s.url} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

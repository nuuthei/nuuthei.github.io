import { profile } from '../data/profile.js'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <p className="eyebrow"></p>
        <h1 className="hero-title">{profile.name}</h1>
        <p className="hero-role">
          {profile.role} · {profile.location}
        </p>
        <p className="hero-tagline">{profile.tagline}</p>
        
      </div>
    </section>
  )
}

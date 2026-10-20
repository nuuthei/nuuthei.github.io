import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; Vite.
      </div>
    </footer>
  )
}

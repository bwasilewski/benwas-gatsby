import React from 'react'
import { Link } from 'gatsby'

const Footer = ({siteTitle, siteSubtitle}) => (
  <footer>
    <nav className="navbar is-black">
      <div className="container">
        <div className="navbar-menu">
          <div className="navbar-start">
          <Link className="navbar-item" to="/">Home</Link>
          <Link className="navbar-item" to="/about/">About</Link>
          <Link className="navbar-item" to="/projects/">Projects</Link>
          <Link className="navbar-item" to="/contact/">Contact</Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              © {new Date().getFullYear()}, {siteTitle}. All rizzles for shizzle.
            </div>
          </div>
        </div>
      </div>
    </nav>
  </footer>
)

export default Footer

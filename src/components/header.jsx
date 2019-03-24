import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteSubtitle }) => (
  <header>
    <nav className="navbar is-primary" role="navigation">
      <div className="container">
        <div className="navbar-brand">
          <h1 className="title">
            <Link className="navbar-item" to="/">{siteTitle}</Link>
          </h1>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <h2 className="subtitle navbar-item">{siteSubtitle}</h2>
          </div>
          <div className="navbar-end">
            <Link className="navbar-item" to="/about/">About</Link>
            <Link className="navbar-item" to="/projects/">Projects</Link>
            <Link className="navbar-item" to="/contact/">Contact</Link>
            <div className="navbar-item is-hoverable has-dropdown">
              <span className="navbar-link">Social</span>
              <div className="navbar-dropdown">
                <Link className="navbar-item">LinkedIn</Link>
                <Link className="navbar-item">GitHub</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteSubtitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
  siteSubtitle: ``
}

export default Header

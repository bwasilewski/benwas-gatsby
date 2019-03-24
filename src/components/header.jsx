import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import uniqid from 'uniqid'

const Header = ({ siteTitle, siteSubtitle, social }) => (
  <header>
    <nav className="navbar is-transparent is-fixed-top" role="navigation">
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
            {social.map(item => (
              <a key={uniqid()} className="navbar-item" href={item.url}>
                <span className="icon">
                  <i className={`fab fa-${item.icon}`}></i>
                </span>
              </a>
            ))}
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

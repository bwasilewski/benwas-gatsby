import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import uniqid from 'uniqid'
import Icon from './icon'

const Header = ({ siteTitle, siteSubtitle, social }) => (
  <header>
    <nav className="navbar is-dark is-fixed-top" role="navigation">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <h1 className="title is-5">
              <Link className="has-text-white" to="/">{siteTitle}</Link>
            </h1>
          </div>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <h2 className="subtitle is-6 navbar-item has-text-white">{siteSubtitle}</h2>
          </div>
          <div className="navbar-end">
            <Link className="navbar-item" to="/about/">About</Link>
            <Link className="navbar-item" to="/experience/">Experience</Link>
            <Link className="navbar-item" to="/contact/">Contact</Link>
            {social.map(item => (
              <Icon key={uniqid()} iconUrl={item.url} iconCode={item.icon} />
            ))}
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Hire Me</strong>
                </a>
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
  siteSubtitle: PropTypes.string,
  social: PropTypes.array
}

Header.defaultProps = {
  siteTitle: ``,
  siteSubtitle: ``,
  social: []
}

export default Header

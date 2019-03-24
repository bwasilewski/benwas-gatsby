import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import uniqid from 'uniqid'

const Footer = ({siteTitle, social}) => (
  <footer>
    <nav className="navbar is-black">
      <div className="container">
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/about/">About</Link>
            <Link className="navbar-item" to="/projects/">Projects</Link>
            <Link className="navbar-item" to="/contact/">Contact</Link>
            {social.map(item => (
              <a key={uniqid()} className="navbar-item" href={item.url}>
                <span className="icon">
                  <i className={`fab fa-${item.icon} has-text-white`}></i>
                </span>
              </a>
            ))}
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <small>© {new Date().getFullYear()}, {siteTitle}. All rizzles for shizzle.</small>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
  social: PropTypes.array
}


export default Footer

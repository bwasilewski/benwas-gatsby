import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Icon from './icon'
import uniqid from 'uniqid'

const Footer = ({siteTitle, social}) => (
  <footer>
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand"></div>
        <div className="navbar-menu">
          <div className="navbar-start">
            {social.map(item => (
              <Icon key={uniqid()} url={item.url} icon={item.icon} />
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

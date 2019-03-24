import React from 'react'

const Footer = ({siteTitle, siteSubtitle}) => (
  <footer>
    <nav className="navbar is-black">
      <div className="container">
        <div className="navbar-menu">
          <div className="navbar-start"></div>
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

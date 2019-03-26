import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({siteTitle, siteSubtitle}) => (
  <section className="hero is-primary is-bold">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          {siteTitle}
        </h1>
        <h2 className="subtitle">
          {siteSubtitle}
        </h2>
      </div>
    </div>
  </section>
)

Hero.propTypes = {
  siteTitle: PropTypes.string,
  siteSubtitle: PropTypes.string
}

export default Hero

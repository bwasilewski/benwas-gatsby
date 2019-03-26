import React from 'react'
import PropTypes from 'prop-types'
import uniqid from 'uniqid'
import Logo from './logo'
import Screen from './screen'
import _ from 'underscore'


const Project = ({ title, description, timeline, tags, logo, screen }) => (
  <section className="section">
    <header>
      <h3 className="title is-3">{title}</h3>
      <h4 className="subtitle">
        {timeline.begin} to {timeline.end}
      </h4>
    </header>

    {tags && tags.length > 0 && (
      <div className="tags">
        {tags.map(tag => (
          <span key={uniqid()} className="tag is-primary">{tag}</span>
        ))}
      </div>
    )}

    {!_.isUndefined(logo.childImageSharp) && !_.isNull(logo.childImageSharp) && (
      <Logo logoPath={logo} />
    )}
    {!_.isUndefined(screen.childImageSharp) && !_.isNull(screen.childImageSharp) && (
      <Screen screenPath={screen} />
    )}
    <p>{description}</p>
  </section>
)

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  timeline: PropTypes.object,
  tags: PropTypes.array,
  logo: PropTypes.object,
  screen: PropTypes.object
}

export default Project

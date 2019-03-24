import React from 'react'
import PropTypes from 'prop-types'
import uniqid from 'uniqid'

const Project = ({ title, description, timeline, tags }) => (
  <section className="section">
    <h3 className="title is-3">{title}</h3>
    <div className="columns">
      <div className="column is-two-thirds">
        {tags.length > 0 && (
          <div className="tags">
            {tags.map(tag => (
              <span key={uniqid()} className="tag is-primary">{tag}</span>
            ))}
          </div>
        )}
        <small>{timeline.begin} to {timeline.end}</small>
        <p>{description}</p>
      </div>
      <div className="column is-one-third">
        <p>Image here</p>
      </div>
    </div>
  </section>
)

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  timeline: PropTypes.object,
  tags: PropTypes.array,
}

export default Project

import React from 'react'
import PropTypes from 'prop-types'
import Icon from './icon'
import uniqid from 'uniqid'

const Card = ({cardIcon, cardTitle, cardTags, cardDescription}) => (
  <div className="card">
    <div className="card-content">
      <h3 className="title is-3">
        <span className="icon is-large has-text-light">
          <i className={`fab fa-${cardIcon}`}></i>
        </span>
        {cardTitle}
      </h3>
      {/* <div className="tags">
        {cardTags.map(tag => (
          <span className="tag is-dark" key={uniqid()}>{tag}</span>
        ))}
      </div> */}
      <p>{cardDescription}</p>
    </div>
  </div>
)

Card.propTypes = {
  cardIcon: PropTypes.string,
  cardTitle: PropTypes.string,
  cardDescription: PropTypes.string
}

export default Card


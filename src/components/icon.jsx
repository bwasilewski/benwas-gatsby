import React from 'react'
import PropTypes from 'prop-types'
import uniqid from 'uniqid'

const Icon = ({iconUrl, iconCode}) => (
  <a key={uniqid()} className="navbar-item" href={iconUrl}>
    <span className="icon">
      <i className={`fab fa-${iconCode}`}></i>
    </span>
  </a>
)

Icon.propTypes = {
  iconCode: PropTypes.string,
  iconUrl: PropTypes.string
}

export default Icon

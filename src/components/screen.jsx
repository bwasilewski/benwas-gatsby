import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Screen = ({ screenPath }) => {
  console.log('Screen path: ', screenPath)
  return (
    <Img style={{width: `500`}} fluid={screenPath.childImageSharp.fluid} />
  )
}

Screen.propTypes = {
  screenPath: PropTypes.object
}


export default Screen

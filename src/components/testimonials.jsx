import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import uniqid from 'uniqid'
import { tns } from 'tiny-slider/src/tiny-slider'


class Testimonial extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {  }
  // }
  componentDidMount() {
    let slider = new tns({
      "container": "#testimonials",
      "items": 2,
      "axis": "vertical",
      "swipeAngle": false,
      "speed": 400,
      "controls": false
    })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query TestimonialQuery {
            site {
              siteMetadata {
                testimonials {
                  quote
                  customer
                }
              }
            }
          }
        `}
        render={data => (
          <div className="hero is-light">
            <div id="testimonials" className="hero-body">
              {data.site.siteMetadata.testimonials.map(item => (
                <div style={{height: `100%`}} key={uniqid()} className="container has-text-centered testimonial is-flex">
                  <h2 className="title">{item.quote}</h2>
                  <h3 className="subtitle">~ {item.customer}</h3>
                </div>
              ))}
            </div>
          </div>
        )}
      />
    )
  }
}

export default Testimonial

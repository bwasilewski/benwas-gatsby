import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className="container">
          <p>Hi there, thanks for stopping by! My name is {data.site.siteMetadata.title} and I am a {data.site.siteMetadata.subtitle}. I primarily work with JavaScript (React, Vue, Express, etc) and Python to build applications that run quickly and dependably.</p>
        </div>
      </Layout>
    )}
  />
)

export default IndexPage

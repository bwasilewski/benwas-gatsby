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
            projects {
              title
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <section className="section">
          <div className="container">
            <p>Hi there, thanks for stopping by! My name is {data.site.siteMetadata.title} and I am a {data.site.siteMetadata.subtitle}. I primarily work with JavaScript (React, Vue, Express, etc) and Python to build applications that run quickly and dependably.</p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h5 className="title is-5">Projects at a glance</h5>
            <ul>
              {data.site.siteMetadata.projects.map(project => (
                <li>{project.title}</li>
              ))}
            </ul>
          </div>
        </section>
      </Layout>
    )}
  />
)

export default IndexPage

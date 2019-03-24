import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import uniqid from 'uniqid'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Unsplash from '../utils/unsplash'

class IndexPage extends Component {
  componentDidMount() {
    console.log('mount')
    Unsplash()
  }

  render() {
    return (
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
            <section className="hero is-medium is-primary is-bold">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">
                    {data.site.siteMetadata.title}
                  </h1>
                  <h2 className="subtitle">
                    {data.site.siteMetadata.subtitle}
                  </h2>
                </div>
              </div>
            </section>
            <section className="section">
              <div className="container">
                <p>Hi there, thanks for stopping by! My name is {data.site.siteMetadata.title} and I am a {data.site.siteMetadata.subtitle}. I primarily work with JavaScript (React, Vue, Express, etc) and Python to build applications that run quickly and dependably.</p>
              </div>
            </section>
            <section className="section">
              <div className="container">
                <div className="columns has-text-centered">
                  <div className="column">
                    <div className="card">
                      <div className="card-content">
                        <h3 className="title is-3">
                          <span className="icon is-large  has-text-primary">
                            <i className="fab fa-js"></i>
                          </span>
                          JavaScript
                        </h3>
                        <p>Node, React, Redux, Express, Electron</p>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="card">
                      <div className="card-content">
                        <h3 className="title is-3">
                          <span className="icon is-large has-text-primary">
                            <i className="fab fa-python"></i>
                          </span>
                          Python
                        </h3>
                        <p>Flask, Django</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section">
              <div className="container">
                <h5 className="title is-5">Projects at a glance</h5>
                <ul>
                  {data.site.siteMetadata.projects.map(project => (
                    <li key={uniqid()}>{project.title}</li>
                  ))}
                </ul>
              </div>
            </section>
          </Layout>
        )}
      />
    )
  }
}


export default IndexPage

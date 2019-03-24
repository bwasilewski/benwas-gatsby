import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'



const ProjectsPage = () => (
  <StaticQuery
    query={graphql`
      query ProjectsQuery {
        site {
          siteMetadata {
            projects {
              title
              description
              timeline {
                begin
                end
              }
              tags
            }
          }
        }
      }
    `}
    render={data =>(
      <Layout>
        <SEO title="Projects Page" />
        <section className="section">
          <div className="container">
            <h2 className="title is-2">Projects</h2>
            <div className="columns">
              <div className="column is-two-thirds">
                {data.site.siteMetadata.projects.map(project => (
                  <section className="section">
                    <h3 className="title is-3">{project.title}</h3>
                    <div className="tags">
                      {project.tags.map(tag => (
                        <span className="tag is-primary">{tag}</span>
                      ))}
                    </div>
                    <small>{project.timeline.begin} to {project.timeline.end}</small>
                    <p>{project.description}</p>
                  </section>
                ))}
                {/* <section className="section">
                  <h3 className="title is-3">SpotMyPhotos</h3>
                </section>
                <section className="section">
                  <h3 className="title is-3">Kuei Luck</h3>
                </section>
                <section className="section">
                  <h3 className="title is-3">Grow Media</h3>
                </section> */}
              </div>
              <div className="column is-one-third">
                <p>Sidebar</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )}
  />
)

export default ProjectsPage

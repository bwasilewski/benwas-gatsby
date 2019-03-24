import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Project from '../../components/project'


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

            {data.site.siteMetadata.projects.map(project => (
              <Project
                title={project.title}
                description={project.description}
                timeline={project.timeline}
                tags={project.tags}
                />
            ))}
          </div>
        </section>
      </Layout>
    )}
  />
)

export default ProjectsPage

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Project from '../../components/project'

import uniqid from 'uniqid'


const ProjectsPage = () => (
  <StaticQuery
    query={graphql`
      query ProjectsQuery {
        site {
          siteMetadata {
            projects {
              title
              description
              tags
              logo
              screen
              timeline {
                begin
                end
              }
            }
          }
        }
        projectLogos: allFile(
          filter: { extension: { regex: "/(jpeg|jpg|gif|png)/" },  sourceInstanceName: { eq: "logos" } }
        ) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
            	}
            }
          }
        }
        projectScreens: allFile(
          filter: { extension: { regex: "/(jpeg|jpg|gif|png)/" },  sourceInstanceName: { eq: "screens" } }
        ) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
            	}
            }
          }
        }
      }
    `}
    render={data => {
      const dataLogos = data.projectLogos.edges
      const dataScreens = data.projectScreens.edges

      return (
        <Layout>
          <SEO title="Experience Page" />
          <section className="section">
            <div className="container">
              <h2 className="title is-2">Experience</h2>

              {data.site.siteMetadata.projects.map(project => {
                let logoPath = project.logo
                let screenPath = project.screen
                let logoData = {}
                let screenData = {}

                console.log('Project: ', project)

                dataLogos.map(logo => {
                  if ( logo.node.relativePath === logoPath ) {
                    logoData = logo.node
                  }
                })

                dataScreens.map(screen => {
                  console.log('Screen: ', screen)
                  if ( screen.node.relativePath === screenPath ) {
                    screenData = screen.node
                  }
                })

                console.log('Screen Data: ', screenData)

                return (
                  <Project
                    key={uniqid()}
                    title={project.title}
                    description={project.description}
                    timeline={project.timeline}
                    tags={project.tags}
                    logo={logoData}
                    screen={screenData} />
                )
              })}
            </div>
          </section>
        </Layout>
      )}
    }
  />
)

export default ProjectsPage

import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import uniqid from 'uniqid'

import Card from '../components/card'
import Headshot from '../components/headshot'
import HireButton from '../components/hirebutton'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Testimonials from '../components/testimonials'

import Unsplash from '../utils/unsplash'

class IndexPage extends Component {
  componentDidMount() {
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
                email
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
            {/* <Hero siteTitle={data.site.siteMetadata.title} siteSubtitle={data.site.siteMetadata.subtitle} /> */}
            <section className="hero is-dark is-bold">
              <div className="hero-body">
                <div className="container">
                  <div className="columns">
                    <div className="column is-one-third is-flex">
                      <div style={{ width: `300px` }}>
                        <Headshot />
                      </div>
                    </div>
                    <div className="column is-flex">
                      <div className="content is-large">
                        <p>Hi there, thanks for stopping by! My name is <a href={`mailto:${data.site.siteMetadata.email}`}>{data.site.siteMetadata.title}</a> and I am a {data.site.siteMetadata.subtitle}. I use JavaScript and Python to build applications that run quickly and dependably.</p>
                        <HireButton />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section">
              <div className="container">
                <div className="columns has-text-centered">
                  <div className="column">
                    <Card
                      cardIcon="js"
                      cardTitle="JavaScript"
                      cardTags={["Node", "React", "Redux", "Express"]}
                      cardDescription="Dolore velit do nulla consequat enim qui nisi irure irure quis dolore ut ea eiusmod. Ut et enim exercitation deserunt do eu. Ullamco eu nulla nostrud incididunt enim ut laboris. Nostrud occaecat duis excepteur sit enim." />
                  </div>
                  <div className="column">
                    <Card
                      cardIcon="python"
                      cardTitle="Python"
                      cardTags={["Flask", "Django"]}
                      cardDescription="Labore excepteur sunt sint cupidatat aliqua pariatur magna minim voluptate ea Lorem laboris. In laborum eiusmod ullamco mollit laborum proident id incididunt nostrud irure ex occaecat ea eu. Adipisicing ea veniam labore culpa ullamco duis cillum." />
                  </div>
                  <div className="column">
                    <Card
                      cardIcon="wordpress-simple"
                      cardTitle="WordPress"
                      cardTags={["Gutenberg", "Advanced Custom Fields", "Elementor"]}
                      cardDescription="Irure ex qui aute ipsum qui proident incididunt quis nostrud aliqua irure proident. Consectetur excepteur irure enim in deserunt eu eu cupidatat fugiat ipsum. Ipsum velit qui adipisicing reprehenderit." />
                  </div>
                </div>
              </div>
            </section>

            <Testimonials />

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

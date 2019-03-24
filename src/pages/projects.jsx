import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects Page" />
    <div className="container">
      <h2 className="title">Projects Page</h2>
      <p>Welcome to the contact page</p>
      <ul className="link-list">
        <li><Link to="/">Go back to the homepage</Link></li>
      </ul>
    </div>
  </Layout>
)

export default ProjectsPage

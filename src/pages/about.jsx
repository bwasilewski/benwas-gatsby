import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Page" />
    <section className="section">
      <div className="container">
        <h2 className="title">About</h2>
        <p>Welcome to the about page.</p>
        <ul className="link-list">
          <li><Link to="/page-3">Continue on your journey...</Link></li>
          <li><Link to="/">Go back to the homepage</Link></li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default AboutPage

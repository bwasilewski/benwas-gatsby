import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <section className="section">
      <div className="container">
        <h2 className="title">Contact page</h2>
        <p>Welcome to the contact page</p>
        <ul className="link-list">
          <li><Link to="/">Go back to the homepage</Link></li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default ContactPage

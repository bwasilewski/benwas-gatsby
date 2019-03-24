import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <section className="section">
      <div className="container">
        <p>Send me a message and I will reply to you promptly!</p>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Full Name" />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="email" placeholder="Email input" />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            {/* <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span> */}
          </div>
          {/* <p className="help is-danger">This email is invalid</p> */}
        </div>
        <div className="field">
          <label className="label">Message</label>
          <textarea className="textarea" placeholder="e.g. Hello world"></textarea>
        </div>
        <div className="field">
          <a className="button is-primary">Submit</a>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage

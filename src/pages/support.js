import * as React from "react"
import Layout from "../components/layout";
import '../sass/styles.scss';

const SupportPage = () => {

  return (
    <Layout>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="has-text-primary">Support</h1>
            <div className="columns">
              <div className="column is-9">
                <div className="is-size-4 has-text-grey-dark">
                  For support questions, reporting issues or feature requests, please send an email to support@devraven.io (DevRaven Inc. is the company behind cptn.io)
                </div>
                <div className="is-size-3 has-text-grey-dark mt-6">
                  Security Response
                </div>
                <div className="is-size-4 has-text-grey-dark ">
                  For responsible disclosure of security issues, vulnerabilities, please email support@devraven.io. <br /><br />We will acknowledge the issue within 24hrs and investigate the report. We will be happy to list your name and acknowledge your contribution for helping make cptn.io secure.
                </div>
              </div>
              <div className="column is-flex is-flex-direction-column is-justify-content-flex-start pt-6">

              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="curve1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
          <path fill="#f5f5f5" fillOpacity="1" d="M0,150L1440,0L0,0Z"></path>
        </svg>
      </div>
    </Layout>
  )
}

export default SupportPage;

export const Head = () => <title>Support</title>
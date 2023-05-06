import * as React from "react"
import Layout from "../components/layout";
import '../sass/styles.scss';

const NotFoundPage = () => {

    return (
        <Layout>
            <section className="hero">
    <div className="hero-body">
      <div className="container">
        <div className="has-text-centered">
          <h1 className="has-text-primary">404 - Not Found!</h1>
          <div className="is-size-3 has-text-grey-dark my-6">
            Sorry, we did not find the page you are looking for.
          </div>
          <div className="columns is-half is-centered">
            <div className="column is-6">
              <a href="/" className="button is-primary is-large is-fullwidth">Back to Home</a>              
            </div>
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

export default NotFoundPage;

export const Head = () => <title>Page not found</title>
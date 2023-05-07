import * as React from "react"
import Layout from "../components/layout";
import '../sass/styles.scss';
import OpenGraphTags from "../components/ogTags";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout isNavPrimary={true}>
      <section className="has-background-primary">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-flex is-align-items-center">
                <div>
                  <h1 className="has-text-primary-light varying-height">Open Source Integration and Data Platform</h1>
                  <div className="is-size-3 has-text-light is-text-centered">
                    MIT Licensed
                  </div>
                  <div className="is-size-3 has-text-light my-6">
                    Develop and deploy integration and data processing pipelines quickly and easily.
                  </div>
                  <div className="buttons">
                    <a href="https://discord.gg/ZGFyzhDjZ2" rel="noreferrer" target="_blank" className="button is-light is-large">
                      <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-discord-filled" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M14.983 3l.123 .006c2.014 .214 3.527 .672 4.966 1.673a1 1 0 0 1 .371 .488c1.876 5.315 2.373 9.987 1.451 12.28c-1.003 2.005 -2.606 3.553 -4.394 3.553c-.94 0 -2.257 -1.596 -2.777 -2.969l-.02 .005c.838 -.131 1.69 -.323 2.572 -.574a1 1 0 1 0 -.55 -1.924c-3.32 .95 -6.13 .95 -9.45 0a1 1 0 0 0 -.55 1.924c.725 .207 1.431 .373 2.126 .499l.444 .074c-.477 1.37 -1.695 2.965 -2.627 2.965c-1.743 0 -3.276 -1.555 -4.267 -3.644c-.841 -2.206 -.369 -6.868 1.414 -12.174a1 1 0 0 1 .358 -.49c1.392 -1.016 2.807 -1.475 4.717 -1.685a1 1 0 0 1 .938 .435l.063 .107l.652 1.288l.16 -.019c.877 -.09 1.718 -.09 2.595 0l.158 .019l.65 -1.287a1 1 0 0 1 .754 -.54l.123 -.01zm-5.983 6a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15zm6 0a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15z" stroke-width="0" fill="currentColor"></path>
                        </svg>
                      </span>
                      <span>Join on Discord</span>
                    </a>
                    <a href="https://github.com/cptn-io/el-cptn" rel="noreferrer" target="_blank" className="button is-light is-large">
                      <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                        </svg>
                      </span>
                      <span>Visit GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="column is-flex is-hidden-touch is-align-items-center is-justify-content-space-around">
                <figure className="image m-0">
                  <StaticImage placeholder="none" alt="DevRaven product preview" src="../images/home.png" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="curve2">
        <svg id="visual" viewBox="0 0 1500 50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1">
          <rect x="0" y="0" width="1500" height="50" fill="#FFFFFF"></rect>
          <path
            d="M0 20L11.3 19C22.7 18 45.3 16 68 17.3C90.7 18.7 113.3 23.3 136.2 27.8C159 32.3 182 36.7 204.8 34.8C227.7 33 250.3 25 273 22.7C295.7 20.3 318.3 23.7 341 27.7C363.7 31.7 386.3 36.3 409 35.5C431.7 34.7 454.3 28.3 477 25C499.7 21.7 522.3 21.3 545.2 19.7C568 18 591 15 613.8 13.8C636.7 12.7 659.3 13.3 682 18C704.7 22.7 727.3 31.3 750 34.5C772.7 37.7 795.3 35.3 818 34.2C840.7 33 863.3 33 886.2 32.2C909 31.3 932 29.7 954.8 25.3C977.7 21 1000.3 14 1023 17.5C1045.7 21 1068.3 35 1091 36.2C1113.7 37.3 1136.3 25.7 1159 21.3C1181.7 17 1204.3 20 1227 24.8C1249.7 29.7 1272.3 36.3 1295.2 35.8C1318 35.3 1341 27.7 1363.8 23.3C1386.7 19 1409.3 18 1432 18.3C1454.7 18.7 1477.3 20.3 1488.7 21.2L1500 22L1500 0L1488.7 0C1477.3 0 1454.7 0 1432 0C1409.3 0 1386.7 0 1363.8 0C1341 0 1318 0 1295.2 0C1272.3 0 1249.7 0 1227 0C1204.3 0 1181.7 0 1159 0C1136.3 0 1113.7 0 1091 0C1068.3 0 1045.7 0 1023 0C1000.3 0 977.7 0 954.8 0C932 0 909 0 886.2 0C863.3 0 840.7 0 818 0C795.3 0 772.7 0 750 0C727.3 0 704.7 0 682 0C659.3 0 636.7 0 613.8 0C591 0 568 0 545.2 0C522.3 0 499.7 0 477 0C454.3 0 431.7 0 409 0C386.3 0 363.7 0 341 0C318.3 0 295.7 0 273 0C250.3 0 227.7 0 204.8 0C182 0 159 0 136.2 0C113.3 0 90.7 0 68 0C45.3 0 22.7 0 11.3 0L0 0Z"
            fill="#570df8" strokeLinecap="round" strokeLinejoin="miter"></path>
        </svg>
      </div>
      <section className="section">
        <div className="container pb-6 with-bottom-border">
          <h2 className="has-text-primary">Open platform to rule them all</h2>
          <div className="is-size-4 has-text-centered">Deploy the platform to your favorite Cloud and get started with building your integration pipelines.</div>
          <div className="columns is-multiline products">
            <div className="product column is-half-tablet is-one-quarter-widescreen">
              <div className="dr-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left-right" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M17 13l4 -4l-4 -4"></path>
                  <path d="M7 13l-4 -4l4 -4"></path>
                  <path d="M12 14a5 5 0 0 1 5 -5h4"></path>
                  <path d="M12 19v-5a5 5 0 0 0 -5 -5h-4"></path>
                </svg>

              </div>

              <div className="dr-description">
                <p className="title is-5">
                  <strong>Integrations</strong>
                </p>
                <p className="subtitle is-6">
                  Build workflows that integrate with your favorite Cloud Services.
                </p>
              </div>
            </div>
            <div className="product column is-half-tablet is-one-quarter-widescreen">
              <div className="dr-icon has-text-success-dark">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-database" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"></path>
                  <path d="M4 6v6a8 3 0 0 0 16 0v-6"></path>
                  <path d="M4 12v6a8 3 0 0 0 16 0v-6"></path>
                </svg>
              </div>

              <div className="dr-description">
                <p className="title is-5">
                  <strong>Data Warehousing</strong>
                </p>
                <p className="subtitle is-6">
                  Send event data to your Data Warehousing solutions.
                </p>
              </div>
            </div>
            <div className="product column is-half-tablet is-one-quarter-widescreen">
              <div className="dr-icon has-text-danger">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-javascript" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
                  <path d="M7.5 8h3v8l-2 -1"></path>
                  <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"></path>
                </svg>
              </div>

              <div className="dr-description">
                <p className="title is-5">
                  <strong>Javascript support</strong>
                </p>
                <p className="subtitle is-6">
                  Use any npm module to build your pipelines and workflows.
                </p>
              </div>
            </div>
            <div className="product column is-half-tablet is-one-quarter-widescreen">
              <div className="dr-icon has-text-info-dark">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-apps" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                  <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                  <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                  <path d="M14 7l6 0"></path>
                  <path d="M17 4l0 6"></path>
                </svg>
              </div>

              <div className="dr-description">
                <p className="title is-5">
                  <strong>Ready to use Apps</strong>
                </p>
                <p className="subtitle is-6">
                  Build pipelines and workflows using our ready to use apps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section pt-0 has-background-white">
        <div className="container pb-6 with-bottom-border">
          <div className="columns is-multiline">
            <div className="column is-5 is-12-touch is-flex is-align-items-center">
              <div className="content">
                <div className="all-cap">Pipelines</div>
                <h2 className="mt-1 section-head has-text-left">Data delivered to your destinations</h2>
                <div className="is-size-5">
                  <ul className="disc">
                    <li>Integrate your Source and Destination systems.</li>
                    <li>Process events as they come or process in batches.</li>
                    <li>No message queues, Lambdas or Cloud Functions to build your integrations.</li>
                    <li>Ready to use apps to integrate with your favorite Cloud Services.</li>
                    <li>Predictable cost to run your integrations. No cost per message, server-time.</li>
                    <li>Powerful Editor to build and configure Pipelines</li>
                  </ul>
                  <div className="mt-4"><a href="https://docs.cptn.io/docs/pipelines/build-a-pipeline" className="button is-primary is-outlined"
                    alt="Learn more about Pipelines">Learn more about Pipelines</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-7 is-12-touch is-flex is-align-items-center">
              <figure className="image">
                <StaticImage placeholder="none" alt="Pipeline" src="../images/pipeline.png" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className="section pt-0 has-background-white">
        <div className="container pb-6 with-bottom-border">
          <div className="columns is-multiline reverse">
            <div className="column is-5 is-12-touch is-flex is-align-items-center">
              <div className="content">
                <div className="all-cap">Sources</div>
                <h2 className="mt-1 section-head has-text-left">Send event data from any system</h2>
                <div className="is-size-5">
                  <ul className="disc">
                    <li>Use HTTP API to send event data to connected Pipelines.</li>
                    <li>All Pipelines connected to the Source will receive the data for processing.</li>
                    <li>Choose to enable authentication for your Source's Ingestion end point</li>
                    <li>Built-in mechanism to rotate security keys</li>
                    <li>Support for setting custom CORS headers for integrating with your frontend apps.</li>
                  </ul>
                </div>
                <div className="mt-4"><a href="https://docs.cptn.io/docs/sources/create-a-source" className="button is-primary is-outlined"
                  alt="Learn more about Sources">Learn more about Sources</a>
                </div>
              </div>
            </div>
            <div className="column is-7 is-12-touch is-flex is-align-items-center">
              <figure className="image">
                <StaticImage placeholder="none" alt="Sources" src="../images/source.png" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section id="workflow-test" className="section py-0 has-background-white">
        <div className="container pb-6">
          <div className="columns is-multiline">
            <div className="column is-5 is-12-touch is-flex is-align-items-center">
              <div className="content">
                <div className="all-cap">Transformations</div>
                <h2 className="mt-1 section-head has-text-left">Enrich, transform, redact data in your Pipelines</h2>
                <div className="is-size-5">
                  <ul className="disc">
                    <li>Powered by Javascript and use any NPM library to build transformations.</li>
                    <li>Remove sensitive data in your Pipelines before sending it to your Data Warehousing services</li>
                    <li>Ability to filter or even completely drop events from your Pipeline.</li>
                    <li>Mix and match transformations as the data flows through your Pipelines</li>
                    <li>Use from ready-to-use transformations from Free App Library.</li>
                  </ul>
                  <div className="mt-4"><a href="https://docs.cptn.io/docs/transformations/create-transformation" className="button is-primary is-outlined"
                    alt="Learn more about Transformations">Learn more about Transformations</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-7 is-12-touch is-flex is-align-items-center">
              <figure className="image">
                <StaticImage placeholder="none" alt="Transformations" src="../images/transformation.png" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className="section pt-0 has-background-white">
        <div className="container pb-6 with-bottom-border">
          <div className="columns is-multiline reverse">
            <div className="column is-5 is-12-touch is-flex is-align-items-center">
              <div className="content">
                <div className="all-cap">Destinations</div>
                <h2 className="mt-1 section-head has-text-left">Send data to your favorite locations</h2>
                <div className="is-size-5">
                  <ul className="disc">
                    <li>Send data to Cloud Services, databases, data warehouses or any custom locations</li>
                    <li>Powered by Javascript and use any NPM library to build destinations.</li>
                    <li>Support for adhoc processing and batch processing of event data.</li>
                    <li>Ability to fully encrypt configuration for your destination services.</li>
                    <li>Use from ready-to-use destinations from Free App Library.</li>
                  </ul>
                </div>
                <div className="mt-4"><a href="https://docs.cptn.io/docs/destinations/create-destination" className="button is-primary is-outlined"
                  alt="Learn more about Sources">Learn more about Destinations</a>
                </div>
              </div>
            </div>
            <div className="column is-7 is-12-touch is-flex is-align-items-center">
              <figure className="image">
                <StaticImage placeholder="none" alt="Destinations" src="../images/destination.png" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section id="workflow-test" className="section py-0 has-background-white">
        <div className="container pb-6">
          <div className="columns is-centered">
            <div className="column is-9 is-12-touch is-flex is-align-items-center">
              <figure className="image">
                <StaticImage placeholder="none" alt="App Library" src="../images/apps.png" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="section has-background-light">
        <div className="container">
          <div className="columns">
            <div className="column is-flex">
              <div className="card is-shadowless">
                <div className="card-content">
                  <div className="content has-text-centered">
                    <div className="is-size-4 has-text-weight-bold mb-4">Events</div>
                    <div className="is-size-5">See all incoming events and outgoing events in one place and debug quickly</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-flex">
              <div className="card is-shadowless">
                <div className="card-content">
                  <div className="content has-text-centered">
                    <div className="is-size-4 has-text-weight-bold mb-4">Handle failures</div>
                    <div className="is-size-5">See failed events, logs and errors. Retry failed events right from the UI.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-flex">
              <div className="card is-shadowless">
                <div className="card-content">
                  <div className="content has-text-centered">
                    <div className="is-size-4 has-text-weight-bold mb-4">Open Source</div>
                    <div className="is-size-5">No ee folder or complex licenses. 100% Open Source, MIT licensed. </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-flex">
              <div className="card is-shadowless">
                <div className="card-content">
                  <div className="content has-text-centered">
                    <div className="is-size-4 has-text-weight-bold mb-4">SSO (coming soon)</div>
                    <div className="is-size-5">Integrate with your SSO providers powered by OIDC to manage users
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = ({ location }) => {
  const title = 'Open Source Integration and Data Platform | cptn.io';
  return <><title>{title}</title><OpenGraphTags location={location} title={title} /></>
}

import * as React from "react"

const Resources = ({data}) => {    
    return <section className="section has-background-primary-light">
    <div className="container">
      <h2 className="mt-0 has-text-centered">Resources</h2>
           
      <div className="columns">
      {data.map(element => <div key={element.title} className="column is-flex">
                <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content has-text-centered">
                    <div className="is-size-4 has-text-weight-bold mb-4">{element.title}</div>
                    <div className="is-size-5">{element.description}</div>
                    <div className="mt-2 has-text-centered">
                        <a href={element.link.href} className="button is-primary is-outlined is-small"
                        alt={element.link.alt}>{element.link.title}</a>
                    </div>
                    </div>
                </div>
                </div>
        </div>
        )}        
      </div>
    </div>
  </section>
}

export default Resources
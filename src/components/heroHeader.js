import React from "react"
import { StaticQuery, graphql } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div 
          className="primary-content" 
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
        />
        <a href='https://www.linkedin.com/in/julien-conan/' target="_blank" className="button -primary" rel="noreferrer">See my resume &rarr;</a>
      </div>
    )}
  />
)
import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import '../assets/fa/css/fontawesome.min.css'
import '../assets/fa/css/fa-brands.min.css'

import Header from './Header'
import Footer from './Footer'

export default ({
  children,
  location
}) => (
  <StaticQuery
    query={graphql`
      query NavigationQuery {
        allContentfulCategory(limit: 7) {
          edges {
            node {
              id
              slug
              title
            }
          }
        }

        allContentfulPage(limit: 2) {
          edges {
            node {
              id
              slug
              title
              body {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    `}
    render={data=>(
      <div id = "outer-container" >
        <Header data={data} location={location} />
        <div id="page-wrap">
          <div>{children}</div>
        </div>
        <Footer data={data} />
    </div>
    )}
  />
)

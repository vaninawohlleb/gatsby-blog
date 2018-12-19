import React from 'react'
import EntryTypes from './entry-types/entry'
import { graphql } from 'gatsby'

export default ({ data, location }) => {
  return <EntryTypes data={data} location={location} />
}

export const howtosQuery = graphql`
  query howtosQuery {
    allContentfulPost(filter: { entryType: { eq: "how to's" } }) {
      edges {
        node {
          id
          title {
            title
          }
          slug
          summary
          featuredImage {
            fluid(maxHeight: 650) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

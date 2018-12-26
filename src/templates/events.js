import React from 'react'
import EntryTypes from './entry-types/entry'
import { graphql } from 'gatsby'

export default ({ data, location }) => {
  return <EntryTypes data={data} location={location} />
}

export const eventsQuery = graphql`
  query eventsQuery {
    allContentfulPost(filter: { entryType: { eq: "events" } }) {
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

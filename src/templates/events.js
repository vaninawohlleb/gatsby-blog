import React, { Component } from 'react'
import EntryTypes from './entry-types/entry'

export default ({ data }) => {
  return <EntryTypes data={data} />
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
            resolutions(width: 700) {
              ...GatsbyContentfulResolutions
            }
          }
        }
      }
    }
  }
`

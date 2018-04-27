import React, { Component } from 'react'
import EntryTypes from './entry-types/entry'

export default ({ data }) => {
  return <EntryTypes data={data} />
}

export const whoswhoQuery = graphql`
  query whoswhoQuery {
    allContentfulPost(filter: { entryType: { eq: "who's who" } }) {
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

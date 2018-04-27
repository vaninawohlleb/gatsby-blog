import React, { Component } from 'react'
import EntryTypes from './entry-types/entry'

export default ({ data }) => {
  return <EntryTypes data={data} />
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
            resolutions(width: 700) {
              ...GatsbyContentfulResolutions
            }
          }
        }
      }
    }
  }
`

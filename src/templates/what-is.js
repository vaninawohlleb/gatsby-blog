import React, { Component } from 'react'
import EntryTypes from './entry-types/entry'

export default ({ data }) => {
  return <EntryTypes data={data} />
}

export const whatQuery = graphql`
  query whatQuery {
    allContentfulPost(filter: {entryType: {eq: "what is"}}) {
      edges {
        node {
          id
          title {
            title
          }
          slug
          summary
          featuredImage{
            resolutions(width: 700) {
            ...GatsbyContentfulResolutions
            }
          }
        }
      }
    }
  }
`
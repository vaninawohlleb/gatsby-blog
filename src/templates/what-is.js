import React from 'react'
import EntryTypes from './entry-types/entry'
import { graphql } from 'gatsby'

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
            fluid(maxHeight: 650) {
            ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
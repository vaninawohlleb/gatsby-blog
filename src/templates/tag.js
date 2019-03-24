import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Grid from '../components/grid'

const H1BoldStyled = styled.h1`
  text-align: center;
`
const Tag = styled.div`

`
const TagPage = ({data, location}) => {
  const tag = location.pathname.replace(/([^a-z0-9-]+)/gi, '');

  return <Layout location={location}>
    <Tag>
      <H1BoldStyled>{tag.replace(/-/g, ' ')}</H1BoldStyled>
      <Grid data={data.allContentfulPost.edges} isHomePage />
    </Tag>
  </Layout>
}

TagPage.propTypes = {
  data: PropTypes.object
}

export default TagPage;

// Query Contentful for content type Category
export const TagQuery = graphql`
  query TagQuery($tag: String!) {
    allContentfulPost(filter: {
        tags: {
          in: [$tag]
        }
      }, sort: {
        fields: [date],
        order: DESC
      }) {
      edges {
        node {
          id
          date
          tags
          summary
          slug
          title {
            title
          }
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

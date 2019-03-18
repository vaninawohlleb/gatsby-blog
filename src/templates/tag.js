import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
// import Grid from '../components/grid'

const H1BoldStyled = styled.h1`
  text-align: center;
`

const Tag = styled.div`

`

const TagPage = ({data, location}) => {
  // const category = data.contentfulCategory
  console.log(data)
  return <Layout location={location}>
    <Tag>
      <H1BoldStyled>LALALLALA</H1BoldStyled>
    </Tag>
  </Layout>
}

TagPage.propTypes = {
  data: PropTypes.object
}

export default TagPage;

// Query Contentful for content type Category
export const TagQuery = graphql`
  query TagQuery($slug: String!) {
    allContentfulPost(filter: { tags: { in: [$slug] }}) {
      edges {
        node {
          id
          date
          tags
          summary
          title {
            title
          }
        }
      }
    }
  }
`

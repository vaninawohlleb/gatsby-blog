import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import Grid from '../components/grid'

const H1BoldStyled = styled.h1`
  text-align: center;
`

const Category = styled.div`

`

const CategoryPage = ({data, location}) => {
  const category = data.contentfulCategory
  return <Layout location={location}>
    <Category>
      <H1BoldStyled>{category.title}</H1BoldStyled>
      <Grid data={category.posts} isHomePage={false} />
    </Category>
  </Layout>
}

CategoryPage.propTypes = {
  data: PropTypes.object
}

export default CategoryPage;

// Query Contentful for content type Category
export const categoryQuery = graphql`
  query categoryQuery($slug: String!){
    contentfulCategory(slug: { eq: $slug }) {
      id
      title
      posts {
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
        author {
          id
          name
          website
        }
      }
    }
  }
`

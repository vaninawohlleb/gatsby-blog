import React, { Component } from 'react'
import Img from 'gatsby-image'
import styled, { extend } from 'styled-components'
import Link from 'gatsby-link'

import Post from './posts/post'
import Grid from '../layouts/grid'

const H1BoldStyled = styled.h1`
  text-align: center;
`

const Category = styled.div`

`

export default({data}) => {
  const category = data.contentfulCategory
  return <Category>
    <H1BoldStyled>{category.title}</H1BoldStyled>
    <Grid data={category.posts} isHomePage={false} />
  </Category>
}

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
          resolutions(width: 700) {
          ...GatsbyContentfulResolutions
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

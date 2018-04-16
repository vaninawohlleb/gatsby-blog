import React, { Component } from 'react'
import Img from 'gatsby-image'
import styled, { extend } from 'styled-components'
import Link from 'gatsby-link'

import Post from './posts/post'
import Grid from '../layouts/grid'

const H1BoldStyled = styled.h1`
  @media (max-width: 800px) {
    font-size: 40px;
    padding: 2.5em 0.7em 0;
  }

  padding: 1.5em 0.4em 0;
  max-width: 1024px;
  text-transform: uppercase;
  font-size: 70px;
  color: #004772;
  margin: 0 auto;
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
          resolutions(width: 400) {
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

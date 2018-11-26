import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Layout from '../components/layout'
import Grid from '../components/grid'

const H1BoldStyled = styled.h1`
  text-align: center;
`

const Category = styled.div`

`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulCategory(slug: {eq: $slug}) {
          id
          title
          posts {
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
            author {
              id
              name
              website
            }
          }
        }
      }
    `
  }
  render={data=>(
    <Layout>
      <Category>
        <H1BoldStyled>{data.contentfulCategory.title}</H1BoldStyled>
        <Grid data = {data.contentfulCategory.posts} isHomePage = { false }
        />
      </Category>
    </Layout>
  )}
  />
)

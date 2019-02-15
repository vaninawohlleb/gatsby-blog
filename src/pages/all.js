import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
//import Helmet from 'react-helmet'
import Layout from '../components/layout'
// import FeaturedPost from '../templates/posts/featured-post'
import Grid from '../components/grid'
import favicon from '../assets/bunnymoji.png'
import { graphql } from 'gatsby'

const PostsWrapper = styled.div`

`

const AllPage = ({data, location}) => {
  const posts = data.allContentfulPost.edges;
  
  return <Layout location={location}>
    <PostsWrapper>
      <Grid data={data.allContentfulPost.edges} isHomePage all/>
    </PostsWrapper>
  </Layout>
  }

AllPage.propTypes = {
  data: PropTypes.object
}

export default AllPage

export const contentQuery = graphql`
  query allQuery {
    allContentfulPost(
      sort: {
        fields: [date],
        order: DESC
      }
    ) {
      edges {
        node {
          id
          slug
          date
          title {
            title
          }
          featuredPost
          summary
          entryType
          featuredImage{
            file {
              url
              fileName
            }
            fluid(maxHeight: 650) {
            ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
` 
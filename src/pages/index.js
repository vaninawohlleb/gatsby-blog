import React, { Component } from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import styled, { extend } from 'styled-components'

import FeaturedPost from '../templates/posts/featured-post'
import Post from '../templates/posts/post'
import Grid from '../layouts/grid'

const PostsWrapper = styled.div`

`

class IndexPage extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  }

  render() {
    const { edges } = this.props.data.allContentfulPost
    const category = this.props.data.contentfulCategory
    const featured = edges.filter(
      ({ node }) =>
        category.title === 'featured' && node.id === category.posts[0].id
    )

    return <PostsWrapper>
        {/* Featured Post */}
        {featured && featured[0].node && <FeaturedPost post={featured[0].node} key={featured[0].node.id} />}
        {/* 6 posts */}
        <Grid data={edges} isHomePage/>
      </PostsWrapper>
  }
}


export default IndexPage

export const contentQuery = graphql`
  query contentQuery {
    allContentfulPost(
      limit: 10
      sort: { fields: [updatedAt], order: DESC }
    ) {
      edges {
        node {
          id
          slug
          title {
            title
          }
          summary
          featuredImage{
            file {
              url
              fileName
            }
            resolutions(width: 600) {
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

    contentfulCategory(id: {eq: "c29K62kBmPyq8O2EciGaKyE"}) {
      id
      title
      posts {
        id
        title {
          title
        }
        slug
      }
    }
  }
` 
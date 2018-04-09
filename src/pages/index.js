import React, { Component } from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import FeaturedPost from '../layouts/posts/featured-post'
import Post from '../layouts/posts/post-triple-column'
import styled, { extend } from 'styled-components'

const PostsWrapper = styled.div`

`
const PostsContainer = styled.div`

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

    return (
      <PostsWrapper>
        {/* Featured Post */}
        {featured &&
          featured[0].node && (
            <FeaturedPost post={featured[0].node} key={featured[0].node.id} />
          )}
        {/* 6 posts */}
        <PostsContainer>
          {edges &&
            edges
              .slice(1, 7)
              .map(({ node }) => <Post post={node} key={node.id} />)}
        </PostsContainer>
        {/* Some other shennigans */}
        lalalallala
        {/* 3 posts */}
        <PostsContainer>
          {edges &&
            edges
              .slice(7, 11)
              .map(({ node }) => <Post post={node} key={node.id} />)}
        </PostsContainer>
      </PostsWrapper>
    )
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
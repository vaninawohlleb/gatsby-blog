import React, { Component } from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import FeaturedPost from '../layouts/posts/featured-post'
import styled, { extend } from 'styled-components'

const PostsWrapper = styled.div`

`

class IndexPage extends React.Component {
  render() {
    const { edges } = this.props.data.allContentfulPost
    const category = this.props.data.contentfulCategory

    return <PostsWrapper>
      {edges && edges.map(({ node }) => <div key={node.id}>
        {category.title === 'featured' && node.id === category.posts[0].id && <FeaturedPost post={node} key={node.id} />}

        {/* get 6 more posts here  */}
        {/* some social media, or signup situation going full width */}
        {/* the rest of the posts - 3 */}
      </div>)}
    </PostsWrapper>
  }
}

IndexPage.PropTypes = {
  // edges: PropTypes.array
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
            resolutions(width: 1600) {
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
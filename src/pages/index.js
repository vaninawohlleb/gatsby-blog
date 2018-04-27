import React, { Component } from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import styled, { extend } from 'styled-components'

import FeaturedPost from '../templates/posts/featured-post'
import Post from '../templates/posts/post'
import Grid from '../layouts/grid'

const PostsWrapper = styled.div`

`
const BGRWrapper = styled.div`
  width: 100%;
  height: 600px;

  @media (min-width: 700px) {
    height: 750px;
  }
`
class IndexPage extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  }

  render() {
    const { edges } = this.props.data.allContentfulPost
    const category = this.props.data.contentfulCategory
    const sortFeatured = category.posts.sort(function(a, b) {
      return a.updatedAt > b.updatedAt
    }).reverse()

    const featured = edges.filter(
      ({ node }) => 
        category.title === 'featured' && sortFeatured[0].id === node.id
    )

    return <PostsWrapper>
        {/* Featured Post */}
        {featured && <BGRWrapper>
          <FeaturedPost post={featured[0].node} key={featured[0].node.id} />
        </BGRWrapper>}
        <Grid data={edges} featuredId={featured[0].node.id} isHomePage />
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

    contentfulCategory(id: {eq: "c29K62kBmPyq8O2EciGaKyE"}) {
      id
      title
      posts {
        id
        updatedAt
        title {
          title
        }
        slug
      }
    }
  }
` 
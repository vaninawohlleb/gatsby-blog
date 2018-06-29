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
 // background: #ee9ae5;

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
    const featured = edges.find(({ node }) => node.featuredPost == true)

    return <PostsWrapper>
        {/* Featured Post */}
        {featured && <BGRWrapper>
          <FeaturedPost post={featured} key={featured.id} />
        </BGRWrapper>}
        <Grid data={edges} featuredId={featured.id} isHomePage />
      </PostsWrapper>
  }
}

export default IndexPage

export const contentQuery = graphql`
  query contentQuery {
    allContentfulPost(
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          id
          slug

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
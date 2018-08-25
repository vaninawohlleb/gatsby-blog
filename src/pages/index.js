import React, { Component } from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import styled, { extend } from 'styled-components'
import Helmet from 'react-helmet'

import FeaturedPost from '../templates/posts/featured-post'
import Post from '../templates/posts/post'
import Grid from '../layouts/grid'
import favicon from '../assets/bunnymoji.png'

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
        <Helmet title="Sluttish - exploring female sexuality" meta={[{ name: 'description', content: 'Sluttish aims to explore female sexuality and fight slut shaming by creating and curating adult sex ed, feminist and alternative porn, practical sex tips, and everything that turns us on and needs exploring' }, { name: 'keywords', content: 'sluttish, feminist porn, ethical porn, female orgasm, masturbation, female pleasure, erotic photography, bdsm, shibari, sex, female friendly, anti-slut shaming, feminist, bondage, feminist submissive' }]} link={[ {rel: 'shortcut icon', type: 'image/png', href: `${favicon}`} ]}/> 
        {/* Featured Post */}
        {featured && <BGRWrapper>
          <FeaturedPost post={featured} key={featured.node.id} />
        </BGRWrapper>}
        <Grid data={edges} featuredId={featured.node.id} isHomePage />
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
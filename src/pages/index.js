import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import FeaturedPost from '../templates/posts/featured-post'
import Grid from '../components/grid'
import favicon from '../assets/bunnymoji.png'
import { graphql } from 'gatsby'

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
const IndexPage = ({data, location}) => {
  const posts = data.allContentfulPost.edges,
  specials = data.allContentfulSpecial.edges,
  allItems = posts.concat(specials),
  allItemsSorted = allItems.sort(function(a,b) {
    return new Date(b.node.date) - new Date(a.node.date);
  }),
  featured = allItemsSorted.find(({ node }) => node.featuredPost === true)

  return <Layout location={location}>
    <PostsWrapper>
      <Helmet title="Sluttish - exploring female sexuality" meta={[{ name: 'description', content: 'Sluttish aims to explore female sexuality and fight slut shaming by creating and curating adult sex ed, feminist and alternative porn, practical sex tips, and everything that turns us on and needs exploring' }, { name: 'keywords', content: 'sluttish, feminist porn, ethical porn, female orgasm, masturbation, female pleasure, erotic photography, bdsm, shibari, sex, female friendly, anti-slut shaming, feminist, bondage, feminist submissive' }]} link={[ {rel: 'shortcut icon', type: 'image/png', href: `${favicon}`} ]}/> 
      {/* Featured Post */}
      {featured && <BGRWrapper>
        <FeaturedPost post={featured} key={featured.node.id} />
      </BGRWrapper>}
      <Grid data={allItemsSorted} featuredId={featured.node.id} isHomePage />
    </PostsWrapper>
  </Layout>
  }

IndexPage.propTypes = {
  data: PropTypes.object
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

    allContentfulSpecial(
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          id
          slug
          title
          date
          featuredPost
          featuredImage {
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
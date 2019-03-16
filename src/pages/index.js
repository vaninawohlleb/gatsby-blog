import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import FeaturedPost from '../templates/posts/featured-post'
import Grid from '../components/grid'
import favicon from '../assets/bunnymoji.png'
import { graphql } from 'gatsby'
import CookieConsent from "react-cookie-consent"

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
      <Helmet title="Sluttish - exploring female sexuality" meta={[{ name: 'description', content: 'Sluttish aims to explore female sexuality and fight slut shaming by creating and curating adult sex ed, feminist and alternative porn, practical sex tips, and everything that turns us on and needs exploring' }, { name: 'keywords', content: 'sluttish, feminist porn, ethical porn, female orgasm, masturbation, female pleasure, erotic photography, bdsm, shibari, sex, female friendly, anti-slut shaming, feminist, bondage, feminist submissive' }, { name: 'og:image', content: 'https://images.ctfassets.net/268aledh5q1o/I8nVGEqg4oG26oQu0ySGo/6c71ff3700dae3cf3eb709665010d6b3/vaniva.jpg' }, { name: 'twitter:image', content: 'https://images.ctfassets.net/268aledh5q1o/I8nVGEqg4oG26oQu0ySGo/6c71ff3700dae3cf3eb709665010d6b3/vaniva.jpg' }]} link={[ {rel: 'shortcut icon', type: 'image/png', href: `${favicon}`} ]}/> 
      {/* Featured Post */}
      {featured && <BGRWrapper>
        <FeaturedPost post={featured} key={featured.node.id} />
      </BGRWrapper>}
      <Grid data={allItemsSorted} featuredId={featured.node.id} isHomePage />
    </PostsWrapper>
    <CookieConsent buttonStyle={{ color: "#fff", background: "transparent", border: "1px solid #fff" }}>
      This website uses cookies to enhance the user experience via analytics.
    </CookieConsent>
  </Layout>
  }

IndexPage.propTypes = {
  data: PropTypes.object
}

export default IndexPage

export const contentQuery = graphql`
  query contentQuery {
    allContentfulPost(
      limit: 13,
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
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Grid from '../components/grid'
import favicon from '../assets/bunnymoji.png'
import { graphql } from 'gatsby'

const PostsWrapper = styled.div`

`

const AllPage = ({data, location}) => {
  return <Layout location={location}>
    <PostsWrapper>
      <Helmet title="Sluttish - exploring female sexuality" meta={[{ name: 'description', content: 'Sluttish aims to explore female sexuality and fight slut shaming by creating and curating adult sex ed, feminist and alternative porn, practical sex tips, and everything that turns us on and needs exploring | Sluttish' }, { name: 'keywords', content: 'sluttish, feminist porn, ethical porn, female orgasm, masturbation, female pleasure, erotic photography, bdsm, shibari, sex, female friendly, anti-slut shaming, feminist, bondage, feminist submissive' }, { name: 'og:image', content: 'https://images.ctfassets.net/268aledh5q1o/I8nVGEqg4oG26oQu0ySGo/6c71ff3700dae3cf3eb709665010d6b3/vaniva.jpg' }, { name: 'twitter:image', content: 'https://images.ctfassets.net/268aledh5q1o/I8nVGEqg4oG26oQu0ySGo/6c71ff3700dae3cf3eb709665010d6b3/vaniva.jpg' }]} link={[ {rel: 'shortcut icon', type: 'image/png', href: `${favicon}`} ]}/> 
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
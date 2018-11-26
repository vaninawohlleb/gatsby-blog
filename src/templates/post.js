import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import favicon from '../assets/bunnymoji.png'
import { StaticQuery, graphql } from 'gatsby';
let InnerHTML

if (typeof window !== `undefined`) {
  InnerHTML = require('script-inner-html')
}

const SinglePost = styled.div`
  
`

const H1 = styled.h1`
  text-align: center;
`
const ImgWrapper = styled.div`
  text-align: center;
  > img {
    max-width: 100%;
  }
`
const PostBody = styled.div`
  max-width: 1025px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 2.1;

  img {
    display: block;
    margin: 0 auto var(--spacing);
  }

  p,
  h3 {
    margin: 1.57rem;
  }

  blockquote {
    font-size: 17px;
    border: 5px transparent solid;
    border-image: linear-gradient(
      to right,
      #1e2ad2 10%,
      #ee9ae5 100%,
      #1e2ad2 10%,
      #ee9ae5 100%
    );
    border-image-slice: 1;
    text-transform: uppercase;
    color: #1e2ad2;
    font-weight: 700;
    margin: 1.3rem;

    @media (min-width: 520px) {
      padding: var(--big-spacing);
    }
  }

  blockquote {
    * {
      &:last-child {
        margin-bottom: 1.57rem;
      }
    }
  }

  a,
  h3 {
    color: var(--purple);
  }

  @media (min-width: 520px) {
    padding: 2rem;
  }
`
const Info = styled.div`
  max-width: 1025px;
  margin: 0 auto;
  padding: 2rem;
`
const Meta = styled.div`
  display: block;
  text-align: center;
`
const Author = styled.a`
  &:after {
    content: '/';
    padding: 0 .3rem;
  }
`
const UpdatedAt = styled.span`

`
export default () => (
  <StaticQuery
    query={graphql`
      query($slug: String!){
        contentfulPost(slug: { eq: $slug }) {
          id
          title {
            title
          }
          summary
          body {
            childMarkdownRemark {
              html
            }
          }
          featuredImage{
            file {
              url
              fileName
            }
            resolutions(width: 1200) {
            ...GatsbyContentfulResolutions
            }
          }
          author {
            id
            name
            website
          }
          updatedAt
        }
      }
    `
  }
  render={data=>(
    <Layout>
    <SinglePost>
      <Helmet title={data.contentfulPost.title.title} meta={[{ name: 'description', content: data.contentfulPost.summary}, { name: 'keywords', content: 'sluttish, feminist porn, ethical porn, female orgasm, masturbation, female pleasure, erotic photography, bdsm, shibari, sex, female friendly, anti-slut shaming, feminist, bondage, feminist submissive' }]} link={[ {rel: 'shortcut icon', type: 'image/png', href: `${favicon}`} ]}/>
      {data.contentfulPost.featuredImage && <ImgWrapper>
          <img src={data.contentfulPost.featuredImage.file.url} />
        </ImgWrapper>}
      <Info>
        <H1>{data.contentfulPost.title.title}</H1>
        <Meta>
          {data.contentfulPost.author.map(author => (
            <Author key={author.id} href={author.website}>
              by {author.name}
            </Author>
          ))}
          {data.contentfulPost.updatedAt && <UpdatedAt>{moment(`${data.contentfulPost.updatedAt}`).format('DD MMMM')}</UpdatedAt>}
        </Meta>
      </Info>
      {typeof window !== 'undefined' && (
      <PostBody>
        <InnerHTML html={ data.contentfulPost.body.childMarkdownRemark.html } />
      </PostBody>
      )}
    </SinglePost>
  </Layout>
  )}
  />
)

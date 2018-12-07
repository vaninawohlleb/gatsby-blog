import React, { Component } from 'react'
import Img from 'gatsby-image'
import styled, { extend } from 'styled-components'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import moment from 'moment'
// import InstagramEmbed from 'react-instagram-embed'
let InnerHTML
import Helmet from 'react-helmet'
import favicon from '../assets/bunnymoji.png'

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

  @media(min-width: 520px) {
    padding: 2rem;
  }

  &.post__PostBody-zb1l64-3,
  &.kIxHOy {
    max-width: 100%;
    
    p, h3, blockquote {
      max-width: 1025px;
      margin: 1.5rem auto;
      padding: 1rem;
    }

    p, h3 {
      @media(min-width: 1000px) {
        padding: 0;
      }
    }

    blockquote {
      @media(min-width: 1000px) {
        padding: 2rem;
      }
    }
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
const PostPage = ({data}) => {
  const post = data.contentfulPost
  const date = moment(`${post.updatedAt}`).format('DD MMMM')
 
  return <SinglePost>
      <Helmet title={post.title.title} meta={[{ name: 'description', content: post.summary}, { name: 'keywords', content: 'sluttish, feminist porn, ethical porn, female orgasm, masturbation, female pleasure, erotic photography, bdsm, shibari, sex, female friendly, anti-slut shaming, feminist, bondage, feminist submissive' }]} link={[ {rel: 'shortcut icon', type: 'image/png', href: `${favicon}`} ]}/>
      {post.featuredImage && <ImgWrapper>
          <img src={post.featuredImage.file.url} />
        </ImgWrapper>}
      <Info>
        <H1>{post.title.title}</H1>
        <Meta>
          {post.author.map(author => (
            <Author key={author.id} href={author.website}>
              by {author.name}
            </Author>
          ))}
          {post.updatedAt && <UpdatedAt>{date}</UpdatedAt>}
        </Meta>
      </Info>
      {typeof window !== 'undefined' && (
      <PostBody>
        <InnerHTML html={ post.body.childMarkdownRemark.html } />
      </PostBody>
      )}
    </SinglePost>
}

PostPage.propTypes = {
  data: PropTypes.object,
}

export default PostPage

// Query Contentful for content type Post
export const postQuery = graphql`
  query postQuery($slug: String!){
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

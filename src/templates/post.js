import React, { Component } from 'react'
import Img from 'gatsby-image'
import styled, { extend } from 'styled-components'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const H1BoldStyled = styled.h1`
  @media (max-width: 800px) {
    font-size: 40px;
    padding: 2.5em 0.7em 0;
  }

  padding: 1.5em 0.4em 0;
  max-width: 1024px;
  text-transform: uppercase;
  font-size: 70px;
  color: #004772;
  margin: 0 auto;
`;
const H1White = H1BoldStyled.extend`
  color: white;
`

const PostBody = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 2em;
`
const Info = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`
const InfoGrey = Info.extend`
  padding: 2em 4em;
  background: #82a0a2;
  margin: -300px auto 0;
  z-index: 9;
  min-height: 350px;
`;
const Author = styled.a`
  display: block;

  // @media (max-width: 800px) {
  //   padding: 1.5em;
  // }

  padding: .5em 2em;
`;
const AuthorWhite = Author.extend`
  color: white;
  
` 
const PostPage = ({data}) => {
  const post = data.contentfulPost
  return <div className="post-single">
      {post.featuredImage && <div>
          <Img resolutions={post.featuredImage.resolutions} />
          <InfoGrey>
            <H1White>{post.title.title}</H1White>
            {post.author && post.author.map(author => (
                <AuthorWhite key={author.id} href={author.website}>
                  by {author.name}
                </AuthorWhite>
              ))}
          </InfoGrey>
        </div>}
      {!post.featuredImage && <Info>
          <H1BoldStyled>{post.title.title}</H1BoldStyled>
          {post.author.map(author => (
            <Author key={author.id} href={author.website}>
              by {author.name}
            </Author>
          ))}
        </Info>}
      {post.body &&
        <PostBody dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }} />
      }
      <span>{post.slug}</span>
    </div>;
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
`

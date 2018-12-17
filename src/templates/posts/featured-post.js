import React, { Component } from 'react'
import Img from 'gatsby-image'
import styled, { extend } from 'styled-components'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const FeaturedPostWrapper = styled.div`
  background: ${props => (props.img ? `url(${props.img})` : 'var(--grey)')};
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: left;
  height: 100%;

  // @media (min-width: 700px) {
  //   background-size: cover;
  // }
`

const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--spacing);
  color: white;
  max-width: 800px;

  > a {
    color: white;
  }

  h1 {
    font-size: 2.5rem;
  }

  @media (min-width: 700px) {
    padding: 5rem var(--big-spacing);

    h1 {
      font-size: 3rem;
    }
  }
`

const Summary = styled.div`
  font-size: 1.2rem;
  display: none;

  @media (min-width: 700px) {
    display: block;
  }
`
const FeaturedPost = ({ post }) => {

  return <FeaturedPostWrapper img={post.node.featuredImage.file.url}>
      <PostBody>
        <Link rel="canonical" to={post.node.slug}>
          <h1>{post.node.title.title ? post.node.title.title : post.node.title}</h1>
        </Link>
       <Summary>{post.node.summary ? post.node.summary : ''}</Summary>
      </PostBody>
    </FeaturedPostWrapper>
}

FeaturedPost.propTypes = {
  post: PropTypes.object
}

export default FeaturedPost

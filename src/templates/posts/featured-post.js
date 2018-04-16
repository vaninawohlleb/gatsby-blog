import React, { Component } from 'react'
import Img from 'gatsby-image'
import styled, { extend } from 'styled-components'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const FeaturedPostWrapper = styled.div`
  background: ${props => (props.img ? `url(${props.img})` : 'var(--grey)')};
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: left;
  height: 100%;

  @media (min-width: 700px) {
    opacity: 0.7;
    background-size: cover;
  }
`

const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem var(--spacing);
  color: black;
  max-width: 800px;

  @media (min-width: 700px) {
    color: white;
    padding: 5rem var(--big-spacing);

    > a {
      color: white;
    }
  }
`

const Summary = styled.div`
  font-size: 1.2rem;
`
const FeaturedPost = ({ post }) => {

  return <FeaturedPostWrapper img={post.featuredImage.file.url}>
      <PostBody>
        <Link to={post.slug}>
          <h1>{post.title.title}</h1>
        </Link>
       <Summary>{post.summary}</Summary>
      </PostBody>
    </FeaturedPostWrapper>
}

FeaturedPost.propTypes = {
  post: PropTypes.object
}

export default FeaturedPost

import React, { Component } from 'react'
import Img from 'gatsby-image'
import styled, { extend } from 'styled-components'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const PostWrapper = styled.div`
  .gatsby-image-outer-wrapper {
    margin-bottom: 1rem;
    text-align: center;
  }
  .gatsby-image-wrapper {
    max-width: 100%;
    max-height: 339px;
  }
`
const PostBody = styled.div`
  > a {
    color: #1e2ad2;
  }
`
const Post = ({ post }) => {
  return <PostWrapper>
      {post.featuredImage && <Img resolutions={post.featuredImage.resolutions} />}
      <PostBody>
        <Link to={post.slug}>
          <h2>{post.title.title}</h2>
        </Link>
        {post.summary}
      </PostBody>
    </PostWrapper>
}

Post.propTypes = {
  post: PropTypes.object
}

export default Post

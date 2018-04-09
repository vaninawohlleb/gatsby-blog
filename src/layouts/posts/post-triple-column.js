import React, { Component } from 'react'
import Img from 'gatsby-image'
import styled, { extend } from 'styled-components'
import Link from 'gatsby-link'
import H2Styled from '../../components/h2styled'
import PropTypes from 'prop-types'

const PostBody = styled.div`

`
const Post = ({ post }) => {
  return <div className="post-single__triple">
    {post.featuredImage && <Img resolutions={post.featuredImage.resolutions} />}
    <Link to={post.slug}>
      <H2Styled data={post.title.title} />
    </Link>
    <PostBody>{post.summary}</PostBody>
  </div>
}

Post.propTypes = {
  post: PropTypes.object
}

export default Post

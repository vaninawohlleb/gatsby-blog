import React, { Component } from 'react'
import Img from 'gatsby-image'
import styled, { extend } from 'styled-components'
import Link from 'gatsby-link'
import H2Styled from '../../components/h2styled'

const PostBody = styled.div`

`
export default ({ post }) => (
  <div className="post-single__triple">
    {post.featuredImage && <img src={post.featuredImage.file.url} />}
    <H2Styled data={post.title.title} />
    <PostBody>{post.summary}</PostBody>
  </div>
)

import React, { Component } from 'react'
import Img from 'gatsby-image'
import styled, { extend } from 'styled-components'
import Link from 'gatsby-link'
import H2Styled from '../../components/h2styled'
import PropTypes from 'prop-types'

const PostWrapper = styled.div`
  background: ${props => (props.img ? `url(${props.img})` : 'red')};
  background-size: 100%;
`

const PostBody = styled.div`

`
const FeaturedPost = ({ post }) => {
  console.log(post.featuredImage.file.url)
  return <div className="post-single__featured">
      <PostWrapper img={post.featuredImage.file.url}>
        <Link to={post.slug}>
          <H2Styled data={post.title.title} />
        </Link>
        <PostBody>{post.summary}</PostBody>
      </PostWrapper>
    </div>
}

FeaturedPost.propTypes = {
  post: PropTypes.object
}

export default FeaturedPost

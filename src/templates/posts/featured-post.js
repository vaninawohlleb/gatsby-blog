import React, { Component } from 'react'
import Img from 'gatsby-image'
import styled, { extend } from 'styled-components'
import Link from 'gatsby-link'
import H2Styled from '../../components/h2styled'
import PropTypes from 'prop-types'

const FeaturedPostWrapper = styled.div`
  background: ${props => (props.img ? `url(${props.img})` : 'red')};
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  height: 800px;
`

const PostBody = styled.div`

`
const FeaturedPost = ({ post }) => {

  return <FeaturedPostWrapper img={post.featuredImage.file.url}>
      <Link to={post.slug}>
        <H2Styled data={post.title.title} />
      </Link>
      <PostBody>{post.summary}</PostBody>
    </FeaturedPostWrapper>
}

FeaturedPost.propTypes = {
  post: PropTypes.object
}

export default FeaturedPost

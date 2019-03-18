import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const PostWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding-bottom: 2rem;
  
  .gatsby-image-outer-wrapper {
    margin-bottom: 1rem;
    text-align: center;
  }

  .gatsby-image-wrapper {
    max-width: 100%;
    max-height: 339px;
  }

  .margin {
    margin-top: 2rem;
  }

  h4, h2 {
    margin: .5rem 0;
  }

  h4 {
    color: var(--blue);
  }
`
const PostBody = styled.div`
  // > a {
  //   color: #1e2ad2;
  // }
`
const Post = ({ post }) => {
  const cleanEntryType = post.entryType ? 
    post.entryType.replace(/[^A-Z0-9 ]+/gi, '') :
    null

  const entryTypeSlug = cleanEntryType ?
    cleanEntryType.replace(' ', '-') :
    null

  return <PostWrapper>
    {entryTypeSlug &&
      <Link to={entryTypeSlug}>
        <h4>{post.entryType}</h4>
      </Link>
    }
    {post.featuredImage && <Img fluid={post.featuredImage.fluid} className={entryTypeSlug === null ? 'margin' : ''}/>}
    <PostBody>
      <Link to={post.slug}>
        <h2>{post.title.title ? post.title.title : post.title}</h2>
      </Link>
      {post.summary}
    </PostBody>
  </PostWrapper>
}

Post.propTypes = {
  post: PropTypes.object
}

export default Post

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
  const primaryTag = post.tags ? 
    post.tags[0].replace(/-/g, ' '):
    null

  return <PostWrapper>
    {primaryTag &&
      <Link to={primaryTag.replace(' ', '-')}>
        <h4>{primaryTag}</h4>
      </Link>
    }
    <Link rel="canonical" to={post.slug}>
      {post.featuredImage && <Img fluid={post.featuredImage.fluid} className={primaryTag === null ? 'margin' : ''}/>}
      <PostBody>
        
          <h2>{post.title.title ? post.title.title : post.title}</h2>
        
        {post.summary}
      </PostBody>
    </Link>
  </PostWrapper>
}

Post.propTypes = {
  post: PropTypes.object
}

export default Post

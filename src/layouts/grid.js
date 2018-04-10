import React, { Component } from 'react'
import styled, { extend } from 'styled-components'
import PropTypes from 'prop-types'

import Post from '../templates/posts/post'

const GridWrapper = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 3fr));
  grid-gap: 24px;
  grid-template-rows: auto auto 1200px auto;
`

const FullWidth = styled.div`
  width: 100%;

  @media(min-width: 679px) {
    grid-column: 1/3;
  }

  @media(min-width: 1023px) {
    grid-column: 1/4;
  }
`

const Grid = ({data, isHomePage}) => {
  const sixPosts = data.slice(1, 7)
  const threePosts = data.slice(7, 11)

  return (
  <GridWrapper>
    {isHomePage &&
      sixPosts.map(({ node }) => <Post post={node} key={node.id} />
    )}
    {isHomePage == false &&
      data.map(post => <Post post={post} key={post.id} />
    )}
    <FullWidth>LALALLALALA</FullWidth>
    {isHomePage &&
      threePosts.map(({ node }) => <Post post={node} key={node.id} />
    )}
    
  </GridWrapper>
  )
}

Grid.propTypes = {
  data: PropTypes.array 
}

export default Grid;

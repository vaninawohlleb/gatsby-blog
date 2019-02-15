import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SubscribeWidget from '../components/subscribe-widget'

import Post from '../templates/posts/post'

const GridWrapper = styled.div`
  max-width: 1250px;
  width: 100%;
  overflow: hidden;
  margin: var(--big-spacing) auto 0;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 3fr));
  grid-gap: var(--big-spacing);
  grid-template-rows: auto;

  @media (min-width: 480px) {
    padding: var(--big-spacing) var(--big-spacing);
  }
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

const Grid = ({ data, isHomePage, featuredId, all }) => {
  const sixPosts = isHomePage ? data
    .filter(({ node }) => node.id !== featuredId)
    .slice(0, 6)
    : null;
    
  const threePosts = isHomePage ? data
    .filter(({ node }) => node.id !== featuredId)
    .slice(6, 12)
    : null;

  const allPosts = all ? data.filter(({ node }) => node.id !== '3f9f779d-499c-56a5-b5b3-8ae0074c18e2') : null;

  return <div>
      <GridWrapper>
        {isHomePage && !allPosts &&
          sixPosts.map(({ node }) => (
            <Post post={node} key={node.id} />
          ))}
        {isHomePage && allPosts &&
          allPosts.map(({ node }) => (
            <Post post={node} key={node.id} />
        ))}
        {isHomePage === false && data.map(post => (
          <Post post={post} key={post.id} />
          ))}
      </GridWrapper>
      {isHomePage && !allPosts && <FullWidth>
          <SubscribeWidget />
        </FullWidth>}
      {isHomePage && (data.length > 6) && !allPosts && <GridWrapper>
          {threePosts.map(({ node }) => <Post post={node} key={node.id} />)}
        </GridWrapper>}
    </div>
}

Grid.propTypes = {
  data: PropTypes.array,
  isHomePage: PropTypes.bool,
  lcoation: PropTypes.object
}

export default Grid;

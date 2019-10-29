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

  return <div>
      <GridWrapper>
        {isHomePage && !all &&
          sixPosts.map(({ node }) => (
            <Post post={node} key={node.id} />
          ))}
        {all &&
          data.map(({ node }) => (
            <Post post={node} key={node.id} />
        ))}
        {!isHomePage && data.map(post => (
          <Post post={post} key={post.id} />
          ))}
      </GridWrapper>
      {isHomePage && !all && data.length > 6 && <FullWidth>
          <SubscribeWidget />
        </FullWidth>}
      {isHomePage && (data.length > 6) && !all && <GridWrapper>
          {threePosts.map(({ node }) => <Post post={node} key={node.id} />)}
        </GridWrapper>}
    </div>
}

Grid.propTypes = {
  data: PropTypes.array,
  isHomePage: PropTypes.bool,
  location: PropTypes.object
}

export default Grid;

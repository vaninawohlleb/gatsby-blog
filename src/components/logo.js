import React from 'react'
import Link from 'gatsby-link'
import styled, { extend } from 'styled-components'
import PropTypes from 'prop-types'

const LogoWrapper = styled.h1`
  font-size: ${props => (props.isSpecial ? '1.5rem' : '3.3rem')};
  font-weight: 900;
  margin: 0;
  color: ${props => ((props.isWhite || props.isSpecial) ? 'white' : 'var(--grey)')};
  opacity: ${props => (props.isSpecial ? '.7' : '1')};


  @media(min-width: 700px) {
    font-size: ${props => (props.isSpecial ? '2.7rem' : '4.3rem')};
  }
`

const Logo = ({isWhite, isSpecial}) => {
  return <Link to='/'><LogoWrapper isWhite={isWhite} isSpecial={isSpecial}>Sluttish</LogoWrapper></Link>
}

Logo.propTypes = {
  isWhite: PropTypes.bool
}

export default Logo
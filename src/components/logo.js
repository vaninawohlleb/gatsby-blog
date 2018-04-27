import React from 'react'
import Link from 'gatsby-link'
import styled, { extend } from 'styled-components'
import PropTypes from 'prop-types'

const LogoWrapper = styled.h1`
  font-size: 3.3rem;
  font-weight: 900;
  margin: 0;
  color: ${props => (props.isWhite ? 'white' : 'var(--grey)')};

  @media(min-width: 700px) {
    font-size: 4.3rem;
  }
`

const Logo = ({isWhite}) => (
  <Link to='/'><LogoWrapper isWhite={isWhite}>Sluttish</LogoWrapper></Link>
)

Logo.propTypes = {
  isWhite: PropTypes.bool
}

export default Logo
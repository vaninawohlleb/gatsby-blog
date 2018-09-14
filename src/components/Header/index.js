import React from 'react'
import BurgerMenu from './burger-menu'
import PropTypes from 'prop-types'
import styled, { extend } from 'styled-components'
import Logo from '../logo'

// Add back when you change the featured image
// color: ${props => (props.isWhite ? 'white' : 'var(--grey)')};

const HeaderWrapper = styled.div`
  position: ${props => ((props.isAbsolute || props.isSpecial) ? 'absolute' : 'relative')};
  width: 100%;
  z-index: 1;
  padding: ${props => (props.isSpecial ? '2em' : 'var(--spacing)')};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 700px) {
    padding: ${props => (props.isSpecial ? '2em' : 'var(--big-spacing)')};
  }
`
const Branding = styled.div`
  color: var(--grey);
`

const Slogan = styled.div`
  font: 400 0.94rem/1.7 var(--monospace-font);
  display: none;

  @media (min-width: 700px) {
    display: ${props => (props.isSpecial ? 'none' : 'block')};;
  }
`
const Burger = styled.div`
  display: ${props => (props.isSpecial ? 'none' : 'block')};
`
const Header = ({ data, location }) => {
  const isHomePage = location.pathname == '/' ? true : false;
  const isSpecial = location.pathname.includes('special') ? true : false;
  
  return <HeaderWrapper isAbsolute={isHomePage} isSpecial={isSpecial}>
      <Branding isWhite={isHomePage}>
        <Logo isWhite={isHomePage} isSpecial={isSpecial}/>
        <Slogan isSpecial={isSpecial}>Exploring female sexuality</Slogan>
      </Branding>
      <Burger isSpecial={isSpecial}>
        <BurgerMenu menu data={data} isWhite={isHomePage} />
      </Burger>
    </HeaderWrapper>}

Header.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object
}

export default Header

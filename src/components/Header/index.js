import React from 'react'
import BurgerMenu from './burger-menu'
import PropTypes from 'prop-types'
import styled, { extend } from 'styled-components'
import Logo from '../logo'

const HeaderWrapper = styled.div`
  position: ${props => (props.isAbsolute ? 'absolute' : 'relative')};
  width: 100%;
  z-index: 1;
  padding: var(--spacing);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 700px) {
    padding: var(--big-spacing);
  }
`
const Branding = styled.div`
  color: ${props => (props.isWhite ? 'white' : 'var(--grey)')};

`

const Slogan = styled.div`
  font: 400 0.94rem/1.7 var(--monospace-font);
  display: none;

  @media (min-width: 700px) {
    display: block;
  }
`
const Burger = styled.div`

`
const Header = ({ data, location }) => {
  const isHomePage = location.pathname == '/' ? true : false;

  return <HeaderWrapper isAbsolute={isHomePage}>
      <Branding isWhite={isHomePage}>
        <Logo isWhite={isHomePage} />
        <Slogan>Exploring female sexuality</Slogan>
      </Branding>
      <Burger>
        <BurgerMenu menu data={data} isWhite={isHomePage} />
      </Burger>
    </HeaderWrapper>}

Header.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object
}

export default Header

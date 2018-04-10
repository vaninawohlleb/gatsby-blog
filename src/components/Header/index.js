import React from 'react'
import Link from 'gatsby-link'
import BurgerMenu from './burger-menu'
import PropTypes from 'prop-types'
import styled, { extend } from 'styled-components'

const HeaderWrapper = styled.div`
  position: absolute;
  width: 100%;
`

const Branding = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Header = ({ data }) => (
  <HeaderWrapper>
    <BurgerMenu menu data={data} />
    <Branding>
      <h1>sluttish</h1>
    </Branding>
  </HeaderWrapper>
)

Header.propType = {
  data: PropTypes.object
}

export default Header

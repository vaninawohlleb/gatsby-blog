import React from 'react'
import Link from 'gatsby-link'
import BurgerMenu from './burger-menu'
import PropTypes from 'prop-types'

const Header = ({ data }) => (
  <div>
    <BurgerMenu menu data={data} />
    <div>
      <h1>sluttish</h1>
    </div>
  </div>
)

Header.propType = {
  data: PropTypes.object
}

export default Header

import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const MenuItem = styled.span`
  text-transform: uppercase;
  color: white;
  cursor: pointer;
`;


class BurgerMenu extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  handleStatechange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  render() {
    const categories = this.props.data.allContentfulCategory.edges
    const pages = this.props.data.allContentfulPage.edges

    return <div>
        {typeof window !== 'undefined' && window.location.href && <Menu width={'300px'} isOpen={this.state.menuOpen} noOverlay onStateChange={state => this.handleStatechange(state)} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
          {/* Categories */}
          <button onClick={() => this.closeMenu()}>Close Menu</button>
          {categories.map(category => (
            <Link key={category.node.id} to={category.node.slug}>
              <MenuItem>
                <h3>{category.node.title}</h3>
              </MenuItem>
            </Link>
          ))}

          {/* Pages */}
          {pages.map(page => (
            <Link key={page.node.id} to={page.node.slug}>
              <MenuItem onClick={() => this.closeMenu()}>
                <h3>{page.node.title}</h3>
              </MenuItem>
            </Link>
          ))}
        </Menu>}
      </div>
  }
}

export default BurgerMenu
import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const MenuWrapper = styled.div`
  position: absolute;
  margin-top: var(--spacing);
  top: 1rem;
  right: 1rem;

  @media (min-width: 700px) {
    top: 2rem;
    right: 3rem;
  }

  .bm-menu {
    z-index: 2;
    // background-image: linear-gradient(135deg, #43cbff 10%, #9708cc 100%);
    background-image: linear-gradient(135deg, #1e2ad2 20%, #ee9ae5 100%);
    padding: var(--big-spacing);
  }
  .bm-burger-bars {
    background: ${props => (props.isWhite ? 'white' : 'var(--grey)')};
  }
`
const MenuItem = styled.span`
  text-transform: uppercase;
  color: white;
  cursor: pointer;
`;

class BurgerMenu extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    categories: PropTypes.array,
    pages: PropTypes.array,
    isWhite: PropTypes.bool,
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
    const categoriesWithoutFeatured = categories.filter(({node}) => node.id !== 'c29K62kBmPyq8O2EciGaKyE');

    return <MenuWrapper isWhite={this.props.isWhite}>
        {typeof window !== 'undefined' && window.location.href && <Menu right width={'300px'} isOpen={this.state.menuOpen} noOverlay onStateChange={state => this.handleStatechange(state)} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
              {/* Categories */}
              {categoriesWithoutFeatured.map(category => (
                <Link key={category.node.id} to={category.node.slug}>
                  <MenuItem onClick={() => this.closeMenu()}>
                    <h3>{category.node.title}</h3>
                  </MenuItem>
                </Link>
              ))}

              {/* Custom Links*/}
              <Link key="who" to="whos-who">
                <MenuItem onClick={() => this.closeMenu()}>
                  <h3>who's who</h3>
                </MenuItem>
              </Link>
              <Link key="what-is" to="what-is">
                <MenuItem onClick={() => this.closeMenu()}>
                  <h3>what is</h3>
                </MenuItem>
              </Link>
              {/* <Link key='how' to='how-tos'>
                  <MenuItem>
                    <h3>how to's</h3>
                  </MenuItem>
                </Link> */}
              {/* <Link key="events" to="events">
                <MenuItem onClick={() => this.closeMenu()}>
                  <h3>events</h3>
                </MenuItem>
              </Link> */}

              {/* Pages */}
              {pages.map(page => (
                <Link key={page.node.id} to={page.node.slug}>
                  <MenuItem onClick={() => this.closeMenu()}>
                    <h3>{page.node.title}</h3>
                  </MenuItem>
                </Link>
              ))}
            </Menu>}
      </MenuWrapper>
  }
}

export default BurgerMenu
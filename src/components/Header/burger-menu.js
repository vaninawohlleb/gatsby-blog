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
const AccentLink = styled(Link)`
  border-top: 2px solid #fff;
  margin-top: 1rem;
  padding: 1rem 0 0;
`

const Tags = styled.div`
  border-bottom: 2px solid #fff;
  margin-bottom: 1.5rem;
`
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
    const categories = this.props.data.allContentfulCategory.edges,
      pages = this.props.data.allContentfulPage.edges,
      categoriesWithoutFeatured = categories.filter(({node}) => node.id !== '45c8015a-dc2e-5a1c-a40b-3f7442606aca'),
      tagsArray = ['sex-ed', 'self-love', 'dating', 'porn', 'bdsm', 'yas-kween', 'slut']

    return <MenuWrapper isWhite={this.props.isWhite}>
        {typeof window !== 'undefined' && window.location.href && <Menu right width={'300px'} isOpen={this.state.menuOpen} noOverlay onStateChange={state => this.handleStatechange(state)} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>

          {/* Tags */}
          <Tags>
            {tagsArray.map(tag => (
              <Link rel="canonical" key={tag} to={tag}>
                <MenuItem onClick={() => this.closeMenu()}>
                  <h3>{tag.replace(/-/g, ' ')}</h3>
                </MenuItem>
              </Link>
            ))}
          </Tags>

          {/* Categories */}
          {categoriesWithoutFeatured.map(category => (
            <Link rel="canonical" key={category.node.id} to={`/${category.node.slug}`}>
              <MenuItem onClick={() => this.closeMenu()}>
                <h3>{category.node.title}</h3>
              </MenuItem>
            </Link>
          ))}
          
          <AccentLink rel="canonical" key="all" to="/all">
            <MenuItem onClick={() => this.closeMenu()}>
              <h3>All articles</h3>
            </MenuItem>
          </AccentLink>

          <Link rel="canonical" key='about' to='/about'>	
            <MenuItem onClick={() => this.closeMenu()}>	
              <h3>About</h3>	
            </MenuItem>	
          </Link>
          
        </Menu>}
      </MenuWrapper>
  }
}

export default BurgerMenu
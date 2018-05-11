import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import styled, { extend } from 'styled-components'
import Logo from '../logo'

const FooterWrapper = styled.div`
  display: flex;
  justify-items: center;
  padding: 5rem 0;
  background: var(--purple);
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-end;
  }
`
const FooterWidget = styled.div`
  flex: 1 1 45%;
  padding: var(--spacing);
  text-align: center;
  color: white;
`
const Socials = styled.div`
  margin: 1rem auto;
`
const Social = styled.span`
  color: white;
  padding: .5rem;
  font-size: 1.2rem;
`
const Footer = ({ data }) => (
  <FooterWrapper>
    <FooterWidget>
      Sluttish aims to explore our sexuality by creating and curating
      adult sex ed, feminist and alternative porn, practical sex tips, 
      and everything that turns us on and needs exploring. It is written from a
      white, cis woman, non monogamous perspective, but it aims to be 
      inclusive to as many diverse perspectives as possible
    </FooterWidget>
    <FooterWidget>
      <Logo isWhite />
      <Socials>
        <a href="https://twitter.com/sluttishmedia">
          <Social><i className="fab fa-twitter" /></Social>
        </a>
        <a href="https://instagram.com/sluttish__">
          <Social><i className="fab fa-instagram" /></Social>
        </a>
        <a href="/">
          <Social><i className="fab fa-medium" /></Social>
        </a>
      </Socials>
    </FooterWidget>
    <FooterWidget>I am always interested in collaborations. 
      If you feel you have things to say on sex and relationships, you create content/art or work in this field,
      or you simply want to say Hi message me - vanina@sluttish.us</FooterWidget>
  </FooterWrapper>
)

Footer.propTypes = {
  data: PropTypes.object
}

export default Footer

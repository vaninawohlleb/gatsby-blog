import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import styled, { extend } from 'styled-components'

const FooterWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-items: center;
`
const FooterWidget = styled.div`
  flex: 1 1 45%;
`
const Footer = ({ data }) => (
  <FooterWrapper>
    <FooterWidget>social here</FooterWidget>
    <FooterWidget>something else</FooterWidget>
  </FooterWrapper>
)

Footer.propType = {
  data: PropTypes.object
}

export default Footer

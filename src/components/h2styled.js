import React, { Component } from 'react'
import styled, { extend } from 'styled-components'

const H2Styled = styled.h2`
  text-transform: uppercase;
`

export default({ data }) => (
  <H2Styled>{data}</H2Styled>
)
import React, { Component } from 'react'
import Img from 'gatsby-image'
import styled, { extend } from 'styled-components'
import Link from 'gatsby-link'
import H2Styled from '../../components/h2styled'

const PostBody = styled.div`

`
export default ({ post }) => {
    return <div className="post-single__featured">{post.title.title}</div>
}


import React, { Component } from 'react'
import Post from '../posts/post'
import Grid from '../../layouts/grid'
import PropTypes from 'prop-types'

const Entry = ({ data }) => (
  <Grid data={data.allContentfulPost.edges} isHomePage />
)

Entry.propTypes = {
  data: PropTypes.object
}

export default Entry

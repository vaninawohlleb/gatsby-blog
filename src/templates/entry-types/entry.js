import React from 'react'
import Grid from '../../components/grid'
import PropTypes from 'prop-types'
import Layout from '../../components/layout'

const Entry = ({ data, location }) => (
  <Layout location={location}>
    <Grid data={data.allContentfulPost.edges} isHomePage />
  </Layout>
)

Entry.propTypes = {
  data: PropTypes.object
}

export default Entry

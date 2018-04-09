const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const { createRedirect } = boundActionCreators

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost {
          edges {
            node {
              slug
            }
          }
        }
        allContentfulCategory {
          edges {
            node {
              slug
              title
            }
          }
        }
      }
    `).then(result => {

      // Contenful Posts
      result.data.allContentfulPost.edges.map(({ node }) => {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve('src/templates/post.js'),
          context: {
            slug: node.slug
          },
        })
      })

      // Contentful Categories
      result.data.allContentfulCategory.edges.map(({ node }) => {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve('src/templates/category.js'),
          context: {
            slug: node.slug
          },
        })
      })
      resolve()
    })
    
  })
}

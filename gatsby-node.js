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
              entryType
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
          // add primary topic before slug
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

      // Contenful Entry Types
      result.data.allContentfulPost.edges.map(({ node }) => {
        const cleanSlug = (node.entryType !== null) && node.entryType.replace(/[^a-zA-Z0-9-. ]/g, '')
        const entryTypeSlug = cleanSlug && cleanSlug.replace(/[^A-Z0-9]+/gi, '-')

        if (entryTypeSlug && entryTypeSlug !== null) {
          createPage({
            path: `${entryTypeSlug}`,
            component: path.resolve(`src/templates/${entryTypeSlug}.js`),
            context: {
              entryType: node.entryType,
            },
          })
        }
      })
      
      resolve()
    })
  })
}

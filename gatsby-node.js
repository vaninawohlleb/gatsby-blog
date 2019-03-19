const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const { createRedirect } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost {
          edges {
            node {
              slug
              entryType
              tags
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
        allContentfulSpecial {
          edges {
            node {
              slug
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

      // Contenful Tags (such as bondage, bdsm etc)
      result.data.allContentfulPost.edges.map(({ node }) => {
        if (node.tags) {
          node.tags.map(tag => {
            const cleanTag = tag.replace(/\s+/g, '-').toLowerCase();
            createPage({
              path: `/${cleanTag}`,
              component: path.resolve('src/templates/tag.js'),
              context: {
                slug: cleanTag,
                tag: tag
              },
            })
          })
        }
      })

      // Contentful Categories (such as guides, features etc)
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

      // Contenful Specials
      result.data.allContentfulSpecial.edges.map(({ node }) => {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve('src/templates/special.js'),
          context: {
            slug: node.slug
          },
        })
      })
      
      resolve()
    })
  })
}

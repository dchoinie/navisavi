const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("src/templates/blogPostTemplate.js")
    resolve(
      graphql(`
        {
          allContentfulBlog(sort: { fields: date, order: ASC }) {
            edges {
              node {
                author
                date(formatString: "DD MMM, YYYY")
                id
                title
                images {
                  fluid {
                    src
                  }
                }
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulBlog.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: blogPostTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })
        return
      })
    )
  })
}

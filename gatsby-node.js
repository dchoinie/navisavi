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
                body {
                  body
                  childMarkdownRemark {
                    html
                  }
                }
                author
                id
                date(formatString: "DD MMM, YYYY")
                slug
                title
                image {
                  fluid {
                    src
                    srcSet
                  }
                }
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
            path: `blog/${edge.node.slug}`,
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

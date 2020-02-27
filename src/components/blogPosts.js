import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BlogPost from "./blogPost"

const getBlogPosts = graphql`
  {
    blogPosts: allContentfulBlog(sort: { fields: date, order: ASC }) {
      edges {
        node {
          childContentfulBlogContentRichTextNode {
            json
          }
          author
          title
          slug
          images {
            fluid {
              src
              ...GatsbyContentfulFluid
            }
          }
          date(formatString: "DD MMM, YYYY")
          id
        }
      }
    }
  }
`

export default () => {
  return (
    <div className="px-6">
      <StaticQuery
        query={getBlogPosts}
        render={data => {
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {data.blogPosts.edges.map(({ node: blogPost }) => {
                return <BlogPost key={blogPost.id} blogPost={blogPost} />
              })}
            </div>
          )
        }}
      />
    </div>
  )
}

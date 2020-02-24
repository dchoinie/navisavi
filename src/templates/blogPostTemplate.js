import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import BlogPostDetails from "../components/blogPostDetails"

const blogPostTemplate = ({ data }) => {
  return (
    <Layout>
      <BlogPostDetails blogPost={data.contentfulBlog} />
    </Layout>
  )
}

export const blogDetailQuery = graphql`
  query blogDetailQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      author
      date(formatString: "DD MMM, YYYY")
      id
      title
      images {
        fluid {
          src
          ...GatsbyContentfulFluid
        }
      }
      slug
    }
  }
`

export default blogPostTemplate

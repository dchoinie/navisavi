import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import BlogPostDetails from "../components/blogPostDetails"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

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
`

export default blogPostTemplate

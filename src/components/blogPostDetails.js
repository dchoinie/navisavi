import React from "react"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default ({ blogPost }) => {
  return (
    <div className="flex flex-col justify-center px-6 py-24">
      <SEO title={blogPost.title} />
      <div className="max-w-4xl mx-auto flex flex-col">
        <h2 className="lowercase teal text-xl lg:text-5xl">{blogPost.title}</h2>
        <h5 className="text-gray-700">By: {blogPost.author}</h5>
        <p className="text-gray-600">{blogPost.date}</p>
        <div className="blog">
          <div
            dangerouslySetInnerHTML={{
              __html: blogPost.body.childMarkdownRemark.html,
            }}
          ></div>
        </div>
        <div className="max-w-md">
          <Img fluid={blogPost.image.fluid} />
        </div>
      </div>
    </div>
  )
}

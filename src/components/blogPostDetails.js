import React from "react"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default ({ blogPost }) => {
  return (
    <>
      <SEO title={blogPost.title} />
      <div className="flex flex-col justify-center px-6 py-24">
        <h2 className="text-5xl lowercase self-center teal">
          {blogPost.title}
        </h2>
      </div>
    </>
  )
}

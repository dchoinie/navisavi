import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default ({ blogPost }) => {
  return (
    <Link to={`blog/${blogPost.slug}`}>
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl lowercase teal self-center">
          {blogPost.title}
        </h2>
        <p className="accent self-center">By: {blogPost.author}</p>
        <p className="self-center">{blogPost.date}</p>
        <div className="flex justify-center py-2">
          <Img
            fluid={blogPost.image.fluid}
            className="self-center w-1/2 rounded"
          />
        </div>
      </div>
    </Link>
  )
}

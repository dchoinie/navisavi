import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default ({ blogPost }) => {
  return (
    <Link to={`blog/${blogPost.slug}`}>
      <div className="flex flex-col justify-center">
        <h2 className="text-5xl lowercase teal self-center">
          {blogPost.title}
        </h2>
        <p className="accent self-center">By: {blogPost.author}</p>
        <p className="self-center">{blogPost.date}</p>
        <div className="flex justify-center py-2">
          <Img fluid={blogPost.images[0].fluid} className="self-center w-48" />
        </div>
      </div>
    </Link>
  )
}

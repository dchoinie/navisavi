import React from "react"
import Img from "gatsby-image"

export default ({ blogPost }) => {
  return (
    <>
      <div>
        <h2>{blogPost.title}</h2>
      </div>
    </>
  )
}

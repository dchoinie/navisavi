import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { FaUserCircle, FaAngleRight } from "react-icons/fa"

export default ({ blogPost }) => {
  return (
    <Link to={`blog/${blogPost.slug}`} className="rounded-md shadow-md">
      <div className="flex flex-col h-full">
        <div className="flex w-full">
          <Img
            fluid={blogPost.image.fluid}
            className="w-full rounded-tr-md rounded-tl-md"
          />
        </div>
        <div className="flex flex-col p-6 h-full justify-between">
          <h2 className="teal lowercase text-2xl">{blogPost.title}</h2>
          <div>
            <div className="flex w-full justify-between text-lg">
              <p className="flex">
                <FaUserCircle className="self-center mr-2" /> {blogPost.author}
              </p>
              <p>{blogPost.date}</p>
            </div>
            <div className="flex mt-2">
              <button className="flex bg-primary lowercase text-white fredoka px-4 py-1 rounded-full text-lg">
                View Post <FaAngleRight className="self-center ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

{
  /* <div className="flex flex-col justify-center">
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
</div> */
}

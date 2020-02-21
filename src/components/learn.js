import React from "react"
import { FaBan, FaCheck } from "react-icons/fa"

const Learn = () => {
  return (
    <div className="py-24 px-6">
      <h2 className="text-center text-5xl teal pb-12 lowercase">Learn</h2>
      <div className="flex flex-col justify-center">
        <h4 className="teal self-center text-center text-2xl flex flex-col lg:flex-row">
          <span className="flex lowercase">
            <FaBan className="self-center mx-2" /> No Photos.
          </span>
          <span className="flex lowercase">
            <FaBan className="self-center mx-2" /> No Reviews.
          </span>
          <span className="flex lowercase">
            <FaCheck className="self-center mx-2" />
            Just Videos.
          </span>
        </h4>
        <p className="self-center text-center text-md text-gray-600">
          Videos uploaded by travelers, locals, and friends for travel rewards.
          Now you can search, save, and share, all in one app.
        </p>
      </div>
      <div className="max-w-2xl mx-auto py-6">
        <div className="iframe-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rbK4jrWYEPc"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Learn

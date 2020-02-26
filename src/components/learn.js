import React from "react"
import { FaBan, FaCheck } from "react-icons/fa"

const Learn = () => {
  return (
    <div className="py-24 px-6" id="learn">
      <h2 className="text-center text-5xl teal lowercase">Learn</h2>
      <div className="flex flex-col justify-center">
        <div className="flex self-center text-2xl">
          <FaBan className="self-center accent mx-2" />
          <h5 className="text-gray-700">No Photos.</h5>
          <FaBan className="self-center accent mx-2" />
          <h5 className="text-gray-700">No Reviews.</h5>
          <FaCheck className="self-center accent mx-2" />
          <h5 className="text-gray-700">Just Videos.</h5>
        </div>
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

import React from "react"
import { FaBan, FaCheck } from "react-icons/fa"

const Learn = () => {
  return (
    <div className="bg-gray-200 py-12 px-6">
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl text-gray-700 self-center text-center mb-12">
          Learn More
        </h2>
        <h4 className="teal self-center text-center text-2xl flex flex-col lg:flex-row">
          <span className="flex">
            No Photos. <FaBan className="self-center mx-2" />
          </span>
          <span className="flex">
            No Reviews. <FaBan className="self-center mx-2" />
          </span>
          <span className="flex">
            Just Videos.
            <FaCheck className="self-center mx-2" />
          </span>
        </h4>
        <p className="self-center text-center text-md fredoka text-gray-500">
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
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="text-2xl text-gray-700 self-center text-center">
          That’s why Savi Travelers Start Here. Navi Savi.
        </h4>
      </div>
    </div>
  )
}

export default Learn

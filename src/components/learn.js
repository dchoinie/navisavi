import React from "react"

const Learn = () => {
  return (
    <div className="bg-gray-200 py-12">
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl text-gray-700 self-center text-center">
          Learn More
        </h2>
        <h4 className="teal self-center text-center text-xl">
          No Photos. No Reviews. Just Videos.
        </h4>
      </div>
      <div className="flex justify-center py-6">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7hQQDCLHLOM"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="rounded-lg"
        ></iframe>
      </div>
      <div className="flex flex-col justify-center">
        <p className="teal self-center text-center text-xl fredoka">
          Videos uploaded by travelers, locals, and friends for travel rewards.{" "}
          <br />
          Now you can search, save, and share, all in one app.
        </p>
        <h4 className="text-3xl text-gray-700 self-center text-center">
          That’s why Savi Travelers Start Here. Navi Savi.
        </h4>
      </div>
    </div>
  )
}

export default Learn

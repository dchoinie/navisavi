import React from "react"
import { FaEnvelope } from "react-icons/fa"

const Partnership = () => {
  return (
    <div className="py-24 px-6 flex flex-col justify-center text-center">
      <h2 className="teal text-5xl lowercase ">Partnerships</h2>
      <h3 className="text-2xl text-gray-700">
        Do you have a brand that would be right for Navi Savi! Let’s Talk! We
        like partners…Multiple.
      </h3>
      <a
        href="mailto:contact@navisaviapp.com"
        className="partnerships-btn text-2xl fredoka lowercase text-white self-center rounded mt-6 p-2 flex"
        style={{
          padding: "0.5rem 1rem",
        }}
      >
        Email Us <FaEnvelope className="self-center ml-2" />
      </a>
    </div>
  )
}

export default Partnership

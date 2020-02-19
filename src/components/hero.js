import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaAngleRight } from "react-icons/fa"
import { useSpring, animated } from "react-spring"
import VideoGroup from "../components/videoGroup"

const Hero = () => {
  const fade = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
    },
  })
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
        }
      }
      phone: file(relativePath: { eq: "phone.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div
      className="flex justify-center h-screen"
      style={{
        height: "calc(100vh - 85.55px)",
      }}
    >
      <div className="w-1/2 flex flex-col justify-center">
        <div className="self-center">
          <h1 className="text-4xl teal">Savi Travelers Start Here</h1>
          <p className="text-gray-700 pb-2">
            Get on the list now to be the first to test our Beta App &amp; Earn
            Rewards.
          </p>
          <form
            action="https://formspree.io/xgekgznv"
            method="POST"
            className="flex self-center"
          >
            <input
              type="email"
              name="email"
              className="text-xl border border-gray-500 rounded-l"
              placeholder="Email"
              style={{
                padding: "0.25rem 0.5rem",
              }}
            />
            <input
              type="submit"
              value="Get Savi"
              className="text-xl fredoka text-white cursor-pointer rounded-r"
              style={{
                padding: "0.25rem 0.5rem",
                backgroundColor: "#01bdc8",
              }}
            />
          </form>
          <small className="text-gray-500">
            <em>Launching Spring 2020</em>
          </small>
        </div>
      </div>
      <div className="flex justify-center w-1/2">
        <Img
          className="w-full self-center"
          fluid={data.phone.childImageSharp.fluid}
          style={{ maxWidth: "275px" }}
        />
      </div>
    </div>
  )
}

export default Hero

{
  /* <div className="flex flex-col justify-center self-center w-full px-12 lg:px-0 lg:w-1/2 ">
        <div className="self-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-gray-200 lowercase tracking-wide whitespace-no-wrap text-center md:text-left"
            style={{ lineHeight: "1" }}
          >
            {data.site.siteMetadata.title}
          </h1>
          <animated.h3
            className="text-xl lg:text-2xl text-gray-700 text-center md:text-left"
            style={fade}
          >
            {data.site.siteMetadata.description}
          </animated.h3>
          <p className="text-gray-300 text-center md:text-left">
            Get on the list now to be the first to test our Beta App.
          </p>
          <form
            action="https://formspree.io/xgekgznv"
            method="POST"
            className="py-2 flex"
          >
            <input
              type="email"
              name="email"
              className="text-xl rounded-l"
              placeholder="Email"
              style={{
                padding: "0.25rem 0.5rem",
              }}
            />
            <input
              type="submit"
              value="Get Savi"
              className="text-xl fredoka bg-gray-700 text-white cursor-pointer rounded-r"
              style={{
                padding: "0.25rem 0.5rem",
              }}
            />
          </form>
          <p className="text-gray-400 self-center py-1 text-center md:text-left">
            <em>Launching Spring 2020</em>
          </p>
        </div>
      </div>
      <div className="hidden md:flex md:w-1/2 md:justify-center self-center">
        <Img
          className="self-center w-full"
          fluid={data.phone.childImageSharp.fluid}
          style={{ maxWidth: "275px" }}
        />
      </div> */
}

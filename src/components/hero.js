import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaAngleRight } from "react-icons/fa"
import { useSpring, animated } from "react-spring"

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
    <div className="flex teal-background xl:px-64 h-screen">
      <div className="flex flex-col justify-center self-center w-full px-12 lg:px-0 lg:w-1/2 ">
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
              className="text-xl"
              placeholder="Email"
              style={{ padding: "0.25rem 0.5rem" }}
            />
            <input
              type="submit"
              value="Get Savi"
              className="text-xl fredoka bg-gray-700 text-white cursor-pointer"
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
      <div className="hidden md:flex md:w-1/2 md:justify-center">
        <Img
          className="self-center w-full"
          fluid={data.phone.childImageSharp.fluid}
          style={{ maxWidth: "275px" }}
        />
      </div>
    </div>
  )
}

export default Hero

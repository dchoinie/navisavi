import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaAngleRight } from "react-icons/fa"
import { useSpring, animated } from "react-spring"
import HomeVideoMP4 from "../videos/final.mp4"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
        }
      }
      apple: file(relativePath: { eq: "downloads/apple1.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      google: file(relativePath: { eq: "downloads/google1.png" }) {
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
    <div className="flex flex-col lg:flex-row justify-center px-6 hero">
      <div className="flex flex-col justify-center lg:w-1/2 mb-6 lg:mb-0">
        <div className="self-center lg:self-end lg:mr-6">
          <h1 className="text-2xl md:text-4xl teal lowercase leading-none">
            Savi Travelers Start Here
          </h1>
          <h5 className="text-sm md:text-base text-gray-700 py-2 lato">
            Get on the list now to be the first to test our Beta App &amp; Earn
            Rewards.
          </h5>
          <form
            name="beta-signup"
            method="POST"
            data-netlify="true"
            className="flex"
          >
            <input
              type="email"
              name="beta-email"
              className="text-sm md:text-xl text-gray-700 border border-gray-500 rounded-l"
              placeholder="Email"
              style={{
                padding: "0.25rem 0.5rem",
              }}
            />
            <input type="hidden" name="form-name" value="beta-signup" />
            <button
              type="submit"
              value="Get Savi"
              className="beta-submit text-sm md:text-xl
              fredoka cursor-pointer rounded-r lowercase whitespace-no-wrap flex"
              style={{
                padding: "0.25rem 0.5rem",
              }}
            >
              Get Savi <FaAngleRight className="self-center" />
            </button>
          </form>
          <div className="flex my-2">
            <Img
              fluid={data.apple.childImageSharp.fluid}
              className="mr-2 rounded w-24 lg:w-32"
            />
            <Img
              fluid={data.google.childImageSharp.fluid}
              className="rounded w-24 lg:w-32"
              objectFit="cover"
            />
          </div>
          <small className="text-xs md:text-sm text-gray-500">
            <em>Launching Spring 2020</em>
          </small>
        </div>
      </div>
      <div className="hidden self-center lg:flex lg:justify-start lg:ml-6 lg:w-1/2">
        <video className="home-video" autoPlay={true} loop={true} muted={true}>
          <source src={HomeVideoMP4} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Hero

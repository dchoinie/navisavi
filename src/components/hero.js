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
      phone2: file(relativePath: { eq: "phones/iPhone4.png" }) {
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
      className="flex justify-center h-screen pb-12"
      style={{
        height: "calc(100vh - 85.55px)",
      }}
    >
      <div className="w-1/2 flex flex-col justify-center">
        <div className="self-center">
          <h1 className="text-2xl md:text-4xl teal">
            Savi Travelers Start Here
          </h1>
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
                border: "1px solid transparent",
              }}
            />
          </form>
          <small className="text-gray-500">
            <em>Launching Spring 2020</em>
          </small>
        </div>
      </div>
      <div className="hidden lg:flex justify-center w-1/2">
        <Img
          className="w-full self-center"
          fluid={data.phone.childImageSharp.fluid}
          style={{ maxWidth: "275px" }}
        />
        <Img
          className="w-full self-center"
          fluid={data.phone2.childImageSharp.fluid}
          style={{
            maxWidth: "275px",
            marginLeft: "-115px",
            marginTop: "100px",
          }}
        />
      </div>
    </div>
  )
}

export default Hero

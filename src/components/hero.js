import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaAngleRight } from "react-icons/fa"

const Hero = () => {
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
      className="flex"
      style={{
        height: "100vh",
        marginTop: "-85.55px",
        backgroundImage:
          "linear-gradient(to bottom right, #01bdc8 15%, #fff 50%)",
      }}
    >
      <div className="flex w-1/2 flex-col justify-center">
        <div className="self-center">
          <h1
            className="big-text text-gray-900 lowercase"
            style={{ fontFamily: "Quicksand" }}
          >
            {data.site.siteMetadata.title}
          </h1>
          <h3 className="text-2xl text-gray-700 pb-2">
            {data.site.siteMetadata.description}
          </h3>
          <p className="text-gray-600 mb-1">
            Get on the list now to be the first to test our Beta App.
          </p>
          <p className="text-gray-600">
            <em>Launching Spring 2020.</em>
          </p>
          <form action="" className="py-2">
            <input
              type="email"
              name="email"
              className="mr-2 text-xl border border-gray-500"
              placeholder="Email"
              style={{ padding: "0.25rem 0.5rem" }}
            />
            <input
              type="submit"
              value="Get Savi"
              className="text-xl"
              style={{
                backgroundColor: "#01bdc8",
                color: "#fff",
                padding: "0.25rem 0.5rem",
                borderRadius: "0.25rem",
              }}
            />
          </form>
        </div>
      </div>
      <div className="flex w-1/2 justify-center">
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

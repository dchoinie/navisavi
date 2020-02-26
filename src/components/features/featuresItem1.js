import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaSearch } from "react-icons/fa"

const FeaturesItem1 = () => {
  const data = useStaticQuery(graphql`
    {
      phone1: file(relativePath: { eq: "phones/iPhone1.png" }) {
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
      className="flex flex-col lg:flex-row justify-between w-full"
      // style={{ border: "1px solid red" }}
    >
      <div
        className="flex justify-center w-full lg:w-1/2"
        //   style={{ border: "1px solid red" }}
      >
        <Img
          fluid={data.phone1.childImageSharp.fluid}
          style={{ width: "50%" }}
        />
      </div>
      <div
        className="flex flex-col justify-center lg:w-1/2 px-12 text-center"
        // style={{ border: "1px solid red" }}
      >
        <div className="self-center text-3xl lg:text-5xl teal mt-4 lg:my-2">
          <FaSearch className="accent" />
        </div>
        <h3 className="text-2xl text-gray-700 self-center">
          Search &amp; Filter Destinations
        </h3>
        <p className="self-center text-gray-600">
          Narrow down by cities, tags, distance and price.
        </p>
      </div>
    </div>
  )
}

export default FeaturesItem1

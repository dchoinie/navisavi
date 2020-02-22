import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaVideo } from "react-icons/fa"

const FeaturesItem2 = () => {
  const data = useStaticQuery(graphql`
    {
      phone2: file(relativePath: { eq: "phones/iPhone2.png" }) {
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
        className="flex flex-col justify-center w-full lg:w-1/2"
        //   style={{ border: "1px solid red" }}
      >
        <div className="self-center text-3xl lg:text-5xl teal my-2 ">
          <FaVideo className="accent" />
        </div>
        <h3 className="text-2xl text-gray-700 self-center">
          Browse Videos By Other Travellers
        </h3>
        <p className="self-center text-gray-600 mb-4 lg:mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          porro?
        </p>
      </div>
      <div
        className="flex justify-center w-full lg:w-1/2"
        //   style={{ border: "1px solid red" }}
      >
        <Img
          fluid={data.phone2.childImageSharp.fluid}
          style={{ width: "50%" }}
        />
      </div>
    </div>
  )
}

export default FeaturesItem2

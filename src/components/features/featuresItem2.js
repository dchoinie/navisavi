import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaVideo } from "react-icons/fa"

const FeaturesItem2 = () => {
  const data = useStaticQuery(graphql`
    {
      phone2: file(relativePath: { eq: "phones/iPhone2.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="flex flex-col lg:flex-row justify-between w-full">
      <div className="flex flex-col justify-center w-full lg:w-1/2 lg:p-12">
        <div className="self-center text-3xl lg:text-5xl teal my-2 ">
          <FaVideo className="accent" />
        </div>
        <h3 className="text-2xl text-gray-700 self-center">
          Browse Videos By Other Travellers
        </h3>
        <p className="self-center text-gray-600 mb-4 lg:mb-0">
          Watch short clips of friends, influencers, or other travelers
          vacations.
        </p>
      </div>
      <div className="flex justify-center w-full lg:w-1/2 pb-6">
        <Img
          fluid={data.phone2.childImageSharp.fluid}
          style={{ width: "50%" }}
        />
      </div>
    </div>
  )
}

export default FeaturesItem2

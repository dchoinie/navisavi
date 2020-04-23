import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaGraduationCap } from "react-icons/fa"

const FeaturesItem3 = () => {
  const data = useStaticQuery(graphql`
    {
      phone3: file(relativePath: { eq: "phones/iPhone3.png" }) {
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
    <div
      className="flex flex-col lg:flex-row justify-between w-full"
      // style={{ border: "1px solid red" }}
    >
      <div
        className="flex justify-center w-full lg:w-1/2"
        //   style={{ border: "1px solid red" }}
      >
        <Img
          fluid={data.phone3.childImageSharp.fluid}
          style={{ width: "50%" }}
        />
      </div>
      <div
        className="flex flex-col justify-center w-full lg:w-1/2 pb-6 lg:p-12"
        //   style={{ border: "1px solid red" }}
      >
        <div className="self-center text-3xl lg:text-5xl teal mt-4 lg:my-2">
          <FaGraduationCap className="accent" />
        </div>
        <h3 className="text-2xl text-gray-700 self-center">
          Learn More About An Experience
        </h3>
        <p className="self-center text-gray-600">
          Location information is verified by Navi Savi or the business.
        </p>
      </div>
    </div>
  )
}

export default FeaturesItem3

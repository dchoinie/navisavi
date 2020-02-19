import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Download = () => {
  const data = useStaticQuery(graphql`
    {
      apple: file(relativePath: { eq: "downloads/apple.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      google: file(relativePath: { eq: "downloads/google-play-badge.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      amazon: file(relativePath: { eq: "downloads/amazon.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="flex flex-col py-12 teal-background text-gray-200">
      <h2 className="self-center text-3xl">Download Now</h2>
      <div className="flex flex-col lg:flex-row justify-center my-6">
        <div
          className="flex self-center w-full lg:w-1/3 lg:mx-6"
          style={{ maxWidth: "200px" }}
        >
          <Img fluid={data.apple.childImageSharp.fluid} className="w-full" />
        </div>
        <div
          className="flex self-center w-full lg:w-1/3 lg:mx-6"
          style={{ maxWidth: "200px" }}
        >
          <Img fluid={data.google.childImageSharp.fluid} className="w-full" />
        </div>
        <div
          className="flex self-center w-full lg:w-1/3 lg:mx-6"
          style={{ maxWidth: "200px" }}
        >
          <Img fluid={data.amazon.childImageSharp.fluid} className="w-full" />
        </div>
      </div>
    </div>
  )
}

export default Download

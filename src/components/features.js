import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Features = () => {
  const data = useStaticQuery(graphql`
    {
      phone1: file(relativePath: { eq: "phones/iPhone1.png" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      phone2: file(relativePath: { eq: "phones/iPhone2.png" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      phone3: file(relativePath: { eq: "phones/iPhone3.png" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      phone4: file(relativePath: { eq: "phones/iPhone4.png" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="py-12 bg-gray-200">
      <h2 className="text-4xl text-center text-gray-700">Features</h2>
      <div className="features-grid lg:mx-24">
        <div className="flex flex-col p-12">
          <Img fluid={data.phone1.childImageSharp.fluid} className="w-full" />
          <h4 className="self-center my-6 text-2xl text-center capitalize text-gray-700">
            Search &amp; filter destinations
          </h4>
        </div>
        <div className="flex flex-col p-12">
          <Img fluid={data.phone2.childImageSharp.fluid} className="w-full" />
          <h4 className="self-center my-6 text-2xl text-center capitalize text-gray-700">
            Browse videos by other travellers
          </h4>
        </div>
        <div className="flex flex-col p-12">
          <Img fluid={data.phone3.childImageSharp.fluid} className="w-full" />
          <h4 className="self-center my-6 text-2xl text-center capitalize text-gray-700">
            Learn more about an experience
          </h4>
        </div>
        <div className="flex flex-col p-12">
          <Img fluid={data.phone4.childImageSharp.fluid} className="w-full" />
          <h4 className="self-center my-6 text-2xl text-center capitalize text-gray-700">
            Save clips and plan trips
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Features

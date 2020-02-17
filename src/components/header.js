import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logo-transparent.png" }) {
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
    <div id="nav" className="flex justify-between px-24">
      <div className="flex">
        <Img
          fluid={data.logo.childImageSharp.fluid}
          style={{ width: "175px" }}
        />
      </div>
      <div className="flex">
        <ul className="flex text-xl text-gray-700">
          <li className="mr-2 self-center">Learn More</li>
          <li className="mx-2 self-center">Earn Rewards</li>
          <li className="ml-2 self-center">Talk To Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Header

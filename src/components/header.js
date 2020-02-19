import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FaBars } from "react-icons/fa"

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
    <div id="nav" className="flex justify-between px-6 lg:px-24">
      <div className="flex">
        <Img
          fluid={data.logo.childImageSharp.fluid}
          style={{ width: "175px" }}
        />
      </div>
      <div className="flex lg:hidden">
        <FaBars className="text-2xl self-center" />
      </div>
      <div className="lg:flex hidden">
        <ul className="flex text-xl text-gray-300">
          <li className="mr-6 self-center fredoka text-center">
            <span className="uppercase">Learn</span> <br />
            <span className="text-base">More</span>
          </li>
          <li className="mx-6 self-center fredoka text-center">
            <span className="uppercase">Earn</span> <br />{" "}
            <span className="text-base">Rewards</span>
          </li>
          <li className="ml-6 self-center fredoka text-center">
            <span className="uppercase">Talk</span> <br />{" "}
            <span className="text-base">To Us</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header

import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FaBars } from "react-icons/fa"
import { Link } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logo-teal.png" }) {
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
      <Link to="/" className="flex">
        <Img
          fluid={data.logo.childImageSharp.fluid}
          style={{ width: "175px" }}
        />
      </Link>
      <div className="flex lg:hidden">
        <FaBars className="text-2xl self-center" />
      </div>
      <div className="lg:flex hidden">
        <ul className="flex text-xl">
          <li className="mr-6 self-center fredoka text-center">
            <span className="lowercase">Learn</span> <br />
            <span className="text-base lowercase">More</span>
          </li>
          <li className="mx-6 self-center fredoka text-center">
            <span className="lowercase">Earn</span> <br />{" "}
            <span className="text-base lowercase">Rewards</span>
          </li>
          <li className="ml-6 self-center fredoka text-center">
            <span className="lowercase">Talk</span> <br />{" "}
            <span className="text-base lowercase">To Us</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header

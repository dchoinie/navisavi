import React, { Component } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FaBars } from "react-icons/fa"
import { Link } from "gatsby"

export const Logo = () => {
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
    <Link to="/" className="flex">
      <Img fluid={data.logo.childImageSharp.fluid} style={{ width: "175px" }} />
    </Link>
  )
}

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navOpen: false,
    }
  }

  handleClickOutside() {
    this.setState({
      navOpen: false,
    })
  }

  toggleNav() {
    this.setState(prevState => ({
      navOpen: !prevState.navOpen,
    }))
  }
  render() {
    const { navOpen } = this.state
    return (
      <div className="flex justify-between px-6 lg:px-24">
        {console.log(navOpen)}
        <Logo />
        <div
          className="lg:hidden teal self-center relative"
          onClick={() => this.toggleNav()}
        >
          <FaBars className="cursor-pointer" />
          <div className="teal absolute" style={{ right: "0" }}>
            {navOpen && (
              <ul className="text-right">
                <li className="whitespace-no-wrap">Learn More</li>
                <li className="whitespace-no-wrap">Earn Rewards</li>
                <li className="whitespace-no-wrap">Talk To Us</li>
              </ul>
            )}
          </div>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex self-center text-center">
            <li className="lowercase fredoka teal mr-2">
              <span className="text-xl">Learn</span>
              <br />
              <span className="text-base">More</span>
            </li>
            <li className="lowercase fredoka teal mx-2">
              <span className="text-xl">Earn</span>
              <br />
              <span className="text-base">Rewards</span>
            </li>
            <li className="lowercase fredoka teal ml-2">
              <span className="text-xl">Talk</span>
              <br />
              <span className="text-base">To Us</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

import React, { Component } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
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
      <Img fluid={data.logo.childImageSharp.fluid} style={{ width: "185px" }} />
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
        <Logo />
        <div
          className="lg:hidden teal self-center relative cursor-pointer"
          onClick={() => this.toggleNav()}
        >
          <FaBars className="cursor-pointer" />
          <div className="teal absolute" style={{ right: "0" }}>
            {navOpen && (
              <ul className="text-right">
                <li className="whitespace-no-wrap my-1 cursor-pointer nav-item-hover">
                  <ScrollLink
                    to="learn"
                    smooth={true}
                    duration={500}
                    className="fredoka teal"
                    offset={96}
                  >
                    Learn
                  </ScrollLink>
                </li>
                <li className="whitespace-no-wrap my-1 cursor-pointer nav-item-hover">
                  <ScrollLink
                    to="features"
                    smooth={true}
                    duration={500}
                    className="fredoka teal"
                    offset={96}
                  >
                    Features
                  </ScrollLink>
                </li>
                <li className="whitespace-no-wrap my-1 cursor-pointer nav-item-hover">
                  <ScrollLink
                    to="earn"
                    smooth={true}
                    duration={500}
                    className="fredoka teal"
                    offset={96}
                  >
                    Rewards
                  </ScrollLink>
                </li>
                <li className="whitespace-no-wrap my-1 cursor-pointer nav-item-hover">
                  <ScrollLink
                    to="partner"
                    smooth={true}
                    duration={500}
                    className="fredoka teal"
                    offset={96}
                  >
                    Partner
                  </ScrollLink>
                </li>
                <li className="whitespace-no-wrap my-1 cursor-pointer nav-item-hover">
                  <ScrollLink
                    to="talk"
                    smooth={true}
                    duration={500}
                    className="fredoka teal"
                    offset={96}
                  >
                    Talk To Us
                  </ScrollLink>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex self-center text-center text-xl">
            <li className="lowercase fredoka teal mr-2 nav-item-hover">
              <ScrollLink
                to="learn"
                smooth={true}
                duration={500}
                className="fredoka cursor-pointer"
                offset={96}
              >
                Learn
              </ScrollLink>
            </li>
            <li className="lowercase fredoka teal mx-2 nav-item-hover">
              <ScrollLink
                to="features"
                smooth={true}
                duration={500}
                className="fredoka cursor-pointer"
                offset={96}
              >
                Features
              </ScrollLink>
            </li>
            <li className="lowercase fredoka teal mx-2 nav-item-hover">
              <ScrollLink
                to="earn"
                smooth={true}
                duration={500}
                className="fredoka cursor-pointer"
                offset={96}
              >
                Rewards
              </ScrollLink>
            </li>
            <li className="lowercase fredoka teal mx-2 nav-item-hover">
              <ScrollLink
                to="partner"
                smooth={true}
                duration={500}
                className="fredoka cursor-pointer"
                offset={96}
              >
                Partner
              </ScrollLink>
            </li>
            <li className="lowercase fredoka teal ml-2 nav-item-hover">
              <ScrollLink
                to="talk"
                smooth={true}
                duration={500}
                className="fredoka cursor-pointer"
                offset={96}
              >
                Talk
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

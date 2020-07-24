import React, { Component } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
import { FaBars } from "react-icons/fa"
import { Link } from "gatsby"
import styles from "../styles/Header.module.css"

export const Logo = () => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "new-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            src
            srcSet
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <Link to="/" className="">
      <Img fluid={data.logo.childImageSharp.fluid} style={{ width: "200px" }} />
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
      <div className={styles.nav}>
        <div className={styles.navLeft}>
          <Logo className={styles.logo}/>
        </div>
        <div
          className={styles.hamburger}
          onClick={() => this.toggleNav()}
        >
          <FaBars className="cursor-pointer" />
          <div className="">
            {navOpen && (
              <ul className="">
                <li className="">
                  <ScrollLink
                    to="learn"
                    smooth={true}
                    duration={500}
                    className=""
                    offset={96}
                  >
                    Learn
                  </ScrollLink>
                </li>
                <li className="">
                  <ScrollLink
                    to="features"
                    smooth={true}
                    duration={500}
                    className=""
                    offset={96}
                  >
                    Features
                  </ScrollLink>
                </li>
                <li className="">
                  <ScrollLink
                    to="earn"
                    smooth={true}
                    duration={500}
                    className=""
                    offset={96}
                  >
                    Rewards
                  </ScrollLink>
                </li>
                <li className="">
                  <ScrollLink
                    to="partner"
                    smooth={true}
                    duration={500}
                    className=""
                    offset={96}
                  >
                    Partner
                  </ScrollLink>
                </li>
                <li className="">
                  <ScrollLink
                    to="talk"
                    smooth={true}
                    duration={500}
                    className=""
                    offset={96}
                  >
                    Talk To Us
                  </ScrollLink>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className={styles.navRight}>
          <div className="">
            <ScrollLink
              to="learn"
              smooth={true}
              duration={500}
              className=""
              offset={96}
            >
              Learn
            </ScrollLink>
          </div>
          <div className="">
            <ScrollLink
              to="features"
              smooth={true}
              duration={500}
              className=""
              offset={96}
            >
              Features
            </ScrollLink>
          </div>
          <div className="">
            <ScrollLink
              to="earn"
              smooth={true}
              duration={500}
              className=""
              offset={96}
            >
              Rewards
            </ScrollLink>
          </div>
          <div className="">
            <ScrollLink
              to="partner"
              smooth={true}
              duration={500}
              className=""
              offset={96}
            >
              Partner
            </ScrollLink>
          </div>
          <div className="">
            <ScrollLink
              to="talk"
              smooth={true}
              duration={500}
              className=""
              offset={96}
            >
              Talk
            </ScrollLink>
          </div>
        </div>
      </div>
    )
  }
}

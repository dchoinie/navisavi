import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import Img from "gatsby-image"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      logoTransparent: file(relativePath: { eq: "logo-transparent.png" }) {
        childImageSharp {
          fluid {
            src
            srcWebp
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="bg-gray-900 py-6">
      <div className="flex flex-col lg:flex-row justify-between container mx-auto">
        <div className="flex justify-center lg:justify-start">
          <Link to="/">
            <Img
              fluid={data.logoTransparent.childImageSharp.fluid}
              className="w-40"
            />
          </Link>
        </div>
        <div className="flex flex-col self-center pb-2">
          <ul className="flex flex-col lg:flex-row lg:text-center">
            <li className="lg:mr-2 text-center lg:text-left teal self-center">
              <Link to="/about" className="fredoka">
                About
              </Link>
            </li>
            <li className="lg:mx-2 text-center lg:text-left teal self-center">
              <Link to="/blog" className="fredoka">
                Blog
              </Link>
            </li>
            <li className="lg:mx-2 text-center lg:text-left teal self-center">
              <Link to="/careers" className="fredoka">
                Careers
              </Link>
            </li>
            <li className="lg:mx-2 text-center lg:text-left teal self-center">
              <Link to="/privacy-policy" className="fredoka">
                Privacy Policy
              </Link>
            </li>
            <li className="lg:mx-2 text-center lg:text-left teal self-center">
              <Link to="/terms-of-service" className="fredoka">
                Terms Of Service
              </Link>
            </li>
            <li className="lg:ml-2 text-center lg:text-left teal self-center">
              <a href="mailto:contact@navisaviapp.com" className="fredoka">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto flex flex-col justify-center">
        <hr className="border-gray-800 py-2" />
        <ul className="flex justify-center lg:pt-2">
          <a
            href="https://www.facebook.com/navisaviapp/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <FaFacebook className="accent footer-icon" />
          </a>
          <a
            href="https://www.instagram.com/navisavi_official/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <FaInstagram className="accent footer-icon" />
          </a>
          <a
            href="https://twitter.com/navisaviapp"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <FaTwitter className="accent footer-icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/navi-savi/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <FaLinkedin className="accent footer-icon" />
          </a>
        </ul>
        <p className="text-center text-gray-600 pt-1">
          &copy; {new Date().getFullYear()} Navi Savi, All Rights Reserved{" "}
        </p>
      </div>
    </div>
  )
}

export default Footer

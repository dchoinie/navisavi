import React from "react"
import { Link } from "gatsby"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-500 py-6">
      <div className="flex flex-col lg:flex-row justify-between px-24">
        <ul className="flex flex-col self-center lg:flex-row">
          <li className="mx-2 text-center lg:text-left">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-2 text-center lg:text-left">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="mx-2 text-center lg:text-left">
            <Link to="/careers">Careers</Link>
          </li>
          <li className="mx-2 text-center lg:text-left">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li className="mx-2 text-center lg:text-left">
            <Link to="/terms-of-service">Terms Of Service</Link>
          </li>
          <li className="mx-2 text-center lg:text-left">Contact</li>
        </ul>
        <div className="flex flex-col">
          <div className="flex justify-end my-2">
            <a
              href="https://www.facebook.com/navisaviapp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="mr-1" />
            </a>
            <a
              href="https://www.instagram.com/navisavi_official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="mx-1" />
            </a>
            <a
              href="https://www.linkedin.com/company/navi-savi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="ml-1" />
            </a>
          </div>
          <p className="text-center lg:text-left pt-6 lg:pt-0">
            &copy; {new Date().getFullYear()} Navi Savi, All Rights Reserved{" "}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer

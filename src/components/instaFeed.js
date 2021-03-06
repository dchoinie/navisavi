import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"

const InstaFeed = () => {
  const data = useStaticQuery(graphql`
    {
      allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 6) {
        edges {
          node {
            localFile {
              childImageSharp {
                fluid(maxWidth: 500) {
                  src
                  srcSet
                  ...GatsbyImageSharpFluid
                }
              }
            }
            id
            caption
          }
        }
      }
    }
  `)
  return (
    <div className="py-24 px-6">
      <div className="flex flex-col">
        <h2 className="text-center text-5xl teal lowercase flex justify-center">
          Follow
        </h2>
        <div className="flex text-2xl justify-center pb-12">
          <a
            href="https://www.facebook.com/navisaviapp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="self-center accent mr-1" />
          </a>
          <a
            href="https://www.instagram.com/navisavi_official/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="self-center accent mx-1" />
          </a>
          <a
            href="https://twitter.com/navisaviapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="self-center accent mx-1" />
          </a>
          <a
            href="https://www.linkedin.com/company/navi-savi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="self-center accent ml-1" />
          </a>
        </div>
      </div>
      <div className="insta-grid">
        {data.allInstaNode.edges.map(({ node: insta }) => {
          return (
            <div key={insta.id} className="insta-container flex">
              <a
                href="https://www.instagram.com/navisavi_official/"
                className="flex w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img
                  fluid={insta.localFile.childImageSharp.fluid}
                  className="w-full rounded insta-img"
                  imgStyle={{ objectFit: "cover" }}
                />
                <div className="insta-text-overlay flex justify-center">
                  <p className="insta-text self-center text-white p-6">
                    {insta.caption}
                  </p>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default InstaFeed

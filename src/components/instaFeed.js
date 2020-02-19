import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const InstaFeed = () => {
  const data = useStaticQuery(graphql`
    {
      allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 6) {
        edges {
          node {
            localFile {
              childImageSharp {
                fluid {
                  src
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
    <div className="my-12">
      <h2 className="text-center text-3xl">Follow Us On Instagram</h2>
      <div
        className="insta-grid py-12 px-12"
        // style={{ border: "1px solid red" }}
      >
        {data.allInstaNode.edges.map(({ node: insta }) => {
          return (
            <div
              key={insta.id}
              className="insta-container flex"
              //   style={{ border: "1px solid blue" }}
            >
              <a
                href="https://www.instagram.com/navisavi_official/"
                className="flex w-full"
                target="_blank"
              >
                <Img
                  fluid={insta.localFile.childImageSharp.fluid}
                  // style={{ border: "1px solid green" }}
                  className="w-full"
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

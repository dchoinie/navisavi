import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaAngleRight } from "react-icons/fa"
import { useSpring, animated } from "react-spring"
import HomeVideoMP4 from "../videos/Navi_Savi_Homepage_Video.mp4"
import HomeVideoWEBM from "../videos/Navi_Savi_Homepage_Video.webm"
// import HomeVideoOGG from "../videos/Navi_Savi_Homepage_Video.ogg"

const Hero = () => {
  const fade = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
    },
  })
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
        }
      }
      phone: file(relativePath: { eq: "phone.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      phone2: file(relativePath: { eq: "phones/iPhone4.png" }) {
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
    <div
      className="flex flex-col lg:flex-row justify-between lg:justify-center lg:h-screen lg:pb-12 pt-12"
      style={{
        height: "calc(100vh - 85.55px)",
      }}
    >
      <div className="px-6 flex flex-col justify-center lg:w-1/2 lg:px-0">
        <div className="self-center lg:self-end lg:mr-6">
          <h1 className="text-2xl md:text-4xl teal lowercase">
            Savi Travelers Start Here
          </h1>
          <p className="text-gray-700 pb-2">
            Get on the list now to be the first to test our Beta App &amp; Earn
            Rewards.
          </p>
          <form name="beta-signup" method="POST" className="flex self-center">
            <input
              type="email"
              name="email"
              className="text-xl text-gray-700 border border-gray-500 rounded-l"
              placeholder="Email"
              style={{
                padding: "0.25rem 0.5rem",
              }}
            />
            <button
              type="submit"
              value="Get Savi"
              className="beta-submit text-xl
              fredoka cursor-pointer rounded-r lowercase whitespace-no-wrap flex"
              style={{
                padding: "0.25rem 0.5rem",
              }}
            >
              Get Savi <FaAngleRight className="self-center" />
            </button>
          </form>
          <small className="text-gray-500">
            <em>Launching Spring 2020</em>
          </small>
        </div>
      </div>
      <div className="lg:flex justify-start ml-6 w-1/2">
        <video
          className="max-w-xs lg:max-w-md"
          autoPlay="true"
          loop="true"
          muted="true"
        >
          <source src={HomeVideoMP4} type="video/mp4" />
          <source src={HomeVideoWEBM} type="video/mp4" />
          {/* <source src={HomeVideoOGG} type="video/ogg" /> */}
        </video>
        {/* <Img
          className="w-full self-center"
          fluid={data.phone.childImageSharp.fluid}
          style={{ maxWidth: "275px" }}
        />
        <Img
          className="w-full self-center"
          fluid={data.phone2.childImageSharp.fluid}
          style={{
            maxWidth: "275px",
            marginLeft: "-115px",
            marginTop: "100px",
          }}
        /> */}
      </div>
    </div>
  )
}

export default Hero

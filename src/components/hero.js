import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaAngleRight } from "react-icons/fa"
import HomeVideoMP4 from "../videos/final.mp4"
import styles from "../styles/Hero.module.css"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
        }
      }
      apple: file(relativePath: { eq: "downloads/apple1.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      google: file(relativePath: { eq: "downloads/google1.png" }) {
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
    <div className={styles.container}>
      <div className={styles.content}>
      <div className={styles.tagline}>
        <div>We're Ready. Are You?</div>
      </div>
      <div className={styles.signUpContainer}>
        <div className={styles.callToAction}>
          Get on the list now to be the first to test our Beta App &amp; Earn
          Rewards.
        </div>
        <div className={styles.inputContainer}>
          <form
            name="beta-signup"
            method="POST"
            data-netlify="true"
            className={styles.form}
          >
            <input
              id="beta-email"
              type="email"
              name="beta-email"
              className=""
              placeholder="Email"
              className={styles.mainInput}
            />
            <div className={styles.buttonContainer}>
              <input type="submit" value="Join"/>
            </div>
          </form>
        </div>
        <div className="">
          <Img
            fluid={data.apple.childImageSharp.fluid}
            className=""
          />
          <Img
            fluid={data.google.childImageSharp.fluid}
            className=""
            objectFit=""
          />
        </div>
      </div>
      <div className="" style={{display: "none"}}>
        <video className="" autoPlay={true} loop={true} muted={true}>
          <source src={HomeVideoMP4} type="video/mp4" />
        </video>
      </div>
      </div>
    </div>
  )
}

export default Hero

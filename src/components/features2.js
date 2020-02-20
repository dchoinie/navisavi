import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Dogs from "../videos/dog.mp4"
import {
  FaSearch,
  FaFolderOpen,
  FaGraduationCap,
  FaSave,
  FaPlaneDeparture,
  FaVideo,
} from "react-icons/fa"

const Features2 = () => {
  const data = useStaticQuery(graphql`
    {
      phone1: file(relativePath: { eq: "phones/iPhone1.png" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      phone2: file(relativePath: { eq: "phones/iPhone2.png" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      phone3: file(relativePath: { eq: "phones/iPhone3.png" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      phone4: file(relativePath: { eq: "phones/iPhone4.png" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="py-24 lg:mx-56">
      <h2 className="text-center text-5xl teal pb-12 lowercase">Features</h2>
      <div
        className="flex flex-col lg:flex-row justify-between w-full"
        // style={{ border: "1px solid red" }}
      >
        <div
          className="flex justify-center w-full lg:w-1/2"
          //   style={{ border: "1px solid red" }}
        >
          <Img
            fluid={data.phone1.childImageSharp.fluid}
            style={{ width: "50%" }}
          />
        </div>
        <div
          className="flex flex-col justify-center lg:w-1/2 px-12 text-center"
          // style={{ border: "1px solid red" }}
        >
          <div className="self-center text-3xl lg:text-5xl teal my-2">
            <FaSearch />
          </div>
          <h3 className="text-2xl text-gray-700 self-center">
            Search &amp; Filter Destinations
          </h3>
          <p className="self-center text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            porro?
          </p>
        </div>
      </div>
      <div
        className="flex flex-col lg:flex-row justify-between w-full"
        // style={{ border: "1px solid red" }}
        style={{ marginTop: "-10%" }}
      >
        <div
          className="flex flex-col justify-center w-full lg:w-1/2"
          //   style={{ border: "1px solid red" }}
        >
          <div className="self-center text-3xl lg:text-5xl teal my-2 ">
            <FaVideo />
          </div>
          <h3 className="text-2xl text-gray-700 self-center">
            Browse Videos By Other Travellers
          </h3>
          <p className="self-center text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            porro?
          </p>
        </div>
        <div
          className="flex justify-center w-full lg:w-1/2"
          //   style={{ border: "1px solid red" }}
        >
          <Img
            fluid={data.phone2.childImageSharp.fluid}
            style={{ width: "50%" }}
          />
        </div>
      </div>
      <div
        className="flex flex-col lg:flex-row justify-between w-full"
        // style={{ border: "1px solid red" }}
        style={{ marginTop: "-10%" }}
      >
        <div
          className="flex justify-center w-full lg:w-1/2"
          //   style={{ border: "1px solid red" }}
        >
          <Img
            fluid={data.phone3.childImageSharp.fluid}
            style={{ width: "50%" }}
          />
        </div>
        <div
          className="flex flex-col justify-center w-full lg:w-1/2"
          //   style={{ border: "1px solid red" }}
        >
          <div className="self-center text-3xl lg:text-5xl teal my-2">
            <FaGraduationCap />
          </div>
          <h3 className="text-2xl text-gray-700 self-center">
            Learn More About An Experience
          </h3>
          <p className="self-center text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            porro?
          </p>
        </div>
      </div>
      <div
        className="flex flex-col lg:flex-row justify-between w-full"
        // style={{ border: "1px solid red" }}
        style={{ marginTop: "-10%" }}
      >
        <div
          className="flex flex-col justify-center w-full lg:w-1/2"
          //   style={{ border: "1px solid red" }}
        >
          <div className="self-center text-3xl lg:text-5xl teal my-2">
            <FaPlaneDeparture />
          </div>
          <h3 className="text-2xl text-gray-700 self-center">
            Save Clips &amp; Plan Trips
          </h3>
          <p className="self-center text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            porro?
          </p>
        </div>
        <div
          className="flex justify-center w-full lg:w-1/2"
          //   style={{ border: "1px solid red" }}
        >
          <Img
            fluid={data.phone4.childImageSharp.fluid}
            style={{ width: "50%" }}
          />
        </div>
      </div>
    </div>
  )
}

export default Features2

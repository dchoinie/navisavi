import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaStar } from "react-icons/fa"

const Earn = () => {
  const data = useStaticQuery(graphql`
    {
      mosaic: file(relativePath: { eq: "mosaic.jpg" }) {
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
    <div className="py-24" id="earn">
      <h2 className="text-center text-5xl teal pb-12 lowercase">Earn</h2>
      <div className="flex flex-col lg:flex-row lg:px-24 justify-between">
        <div className="hidden w-1/2 lg:flex justify-center max-w-xl">
          <Img fluid={data.mosaic.childImageSharp.fluid} className="w-full" />
        </div>
        <div className="lg:w-1/2 lg:self-center px-6 lg:px-0">
          <div className="flex flex-col">
            <div className="flex py-6">
              <div className="flex justify-end w-1/4">
                <FaStar className="text-5xl teal mr-4 accent" />
              </div>
              <div className="flex flex-col w-3/4">
                <h2
                  className="teal text-2xl pb-2 lowercase"
                  style={{ lineHeight: "1" }}
                >
                  Wanna Be A VIP?
                </h2>
                <p className="text-gray-700">
                  Navi Savi is looking for travelers, influencers, and well,
                  anyone with great short videos of their recent travels. Be one
                  of the first on the app to get discovered, share your
                  itineraries, and get rewarded for being one of our trusted
                  travelers trying out Navi Savi.
                </p>
              </div>
            </div>
            <div className="flex py-6">
              <div className="flex justify-end w-1/4">
                <FaStar className="text-5xl teal mr-4 accent" />
              </div>
              <div className="flex flex-col w-3/4">
                <h2
                  className="teal text-2xl pb-2 lowercase"
                  style={{ lineHeight: "1" }}
                >
                  Rewards
                </h2>
                <p className="text-gray-700">
                  We are looking for content to launch Navi Savi! For every
                  approved video uploaded before we launch, we help you fund
                  your next travels! Upload videos, or start shooting new ones
                  now!
                </p>
              </div>
            </div>
            <div className="flex py-6">
              <div className="flex justify-end w-1/4">
                <FaStar className="text-5xl teal mr-4 accent" />
              </div>
              <div className="flex flex-col w-3/4">
                <h2
                  className="teal text-2xl pb-2 lowercase"
                  style={{ lineHeight: "1" }}
                >
                  Want Navi Savi In Your City?
                </h2>
                <p className="text-gray-700">
                  Be a part of our street teams who capture content of your
                  city, create itineraries of your favorite “hot spots” and
                  promote Navi Savi to tourists visiting your town.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Earn

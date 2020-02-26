import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="flex flex-col justify-center py-24 px-6">
        <h2 className="text-center text-5xl teal lowercase">About</h2>
        <p
          className="text-center text-2xl text-gray-700"
          style={{ paddingBottom: "calc(24px + 1.5rem)" }}
        >
          Well, what about us.
        </p>
        <div className="max-w-2xl mx-auto text-gray-600">
          <p className="py-2">
            Born in 2013, Navi Savi was originally a TV show idea. We showed you
            a city in the episode, you go online to watch short, more in depth
            experiences, and could “check the box” to book all from one
            platform.
          </p>
          <p className="py-2">
            Ya, that didn’t end up happening, so we had to get clever.
          </p>
          <p className="py-2">
            Let’s try it as an app, we said. (years later!)
          </p>
          <p className="py-2">
            Finally in 2018 we got started on the idea and we are finally ready
            for full launch in 2020.
          </p>
          <p className="py-2">
            Thought we’d kick it off in new decade, because 2019 sucked.
          </p>
          <p className="py-2">
            We are excited to finally share Navi Savi with the World. She’s been
            brewing a while.
          </p>
          <p>"Rally" Sally Bunnell</p>
          <p>CEO/Founder Navi Savi</p>
        </div>
      </div>
    </Layout>
  )
}

export default About

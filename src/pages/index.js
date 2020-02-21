import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Learn from "../components/learn"
import Features from "../components/features"
import Features2 from "../components/features2"
import Earn from "../components/earn"
import Download from "../components/download"
import InstaFeed from "../components/instaFeed"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Learn />
    <Features2 />
    <Earn />
    {/* <Download /> */}
    <Contact />
    <InstaFeed />
  </Layout>
)

export default IndexPage

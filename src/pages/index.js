import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Learn from "../components/learn"
import Features from "../components/features"
import Features2 from "../components/features2"
import Download from "../components/download"
import InstaFeed from "../components/instaFeed"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    {/* <Learn /> */}
    <Features2 />
    <Download />
    <InstaFeed />
  </Layout>
)

export default IndexPage

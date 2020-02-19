import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Learn from "../components/learn"
import Features from "../components/features"
import Download from "../components/download"
import InstaFeed from "../components/instaFeed"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Learn />
    <Features />
    <Download />
    <InstaFeed />
  </Layout>
)

export default IndexPage

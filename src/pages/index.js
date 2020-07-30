import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Features from "../components/features"
import Earn from "../components/earn"
import InstaFeed from "../components/instaFeed"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Features />
    <Earn />
    <Contact />
    <InstaFeed />
  </Layout>
)

export default IndexPage

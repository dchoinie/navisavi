import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "../styles/InstaFeed.module.css"

const InstaFeed = () => {
    const data = useStaticQuery(graphql`
        {
            allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 6) {
                edges {
                    node {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 500) {
                                    src
                                    srcSet
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
        <div className={styles.container}>
            {data.allInstaNode.edges.map(({ node: insta }) => {
                return (
                    <div className="" key={insta.id}>
                        <a
                            href="https://www.instagram.com/navisavi_official/"
                            className=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Img
                                fluid={insta.localFile.childImageSharp.fluid}
                                className=""
                            />
                            <div className="">
                                <div className="">{insta.caption}</div>
                            </div>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export default InstaFeed

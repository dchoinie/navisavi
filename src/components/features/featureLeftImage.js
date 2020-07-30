import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaSearch } from "react-icons/fa"
import styles from "../../styles/Feature.module.css"

const FeatureLeftImage = ({ icon, mainText, subText }) => {
    const data = useStaticQuery(graphql`
        {
            phone1: file(relativePath: { eq: "phones/iPhone1.png" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        src
                        srcSet
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <div className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.mainTextContainer}>
                    {icon}
                    <div className={styles.mainText}>{mainText}</div>
                </div>
                <div className={styles.subText}>{subText}</div>
            </div>
        </div>
    )
}

export default FeatureLeftImage

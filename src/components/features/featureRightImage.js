import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaVideo } from "react-icons/fa"
import styles from "../../styles/Feature.module.css"

const FeatureRightImage = ({ icon, mainText, subText }) => {
    const data = useStaticQuery(graphql`
        {
            phone1: file(relativePath: { eq: "phones/iPhone2.png" }) {
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
            <div className={styles.textContainer}>
                <div className={styles.mainTextContainer}>
                    {icon}
                    <div className={styles.mainText}>{mainText}</div>
                </div>
                <div className={styles.subText}>{subText}</div>
            </div>
            <div className={styles.imageContainer}>
                <div className={styles.image}/>
            </div>
        </div>
    )
}

export default FeatureRightImage

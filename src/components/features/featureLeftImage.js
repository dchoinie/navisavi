import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaSearch } from "react-icons/fa"
import iPhone1 from "../../images/phones/iPhone1.png";
import iPhone3 from "../../images/phones/iPhone3.png";
import styles from "../../styles/Feature.module.css"

const FeatureLeftImage = ({ imageNum, icon, mainText, subText }) => {
    let image = imageNum == 1 ? iPhone1 : iPhone3;
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer} >
                <div className={styles.image} style={{ backgroundImage: "url(" + image + ")" }} />
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

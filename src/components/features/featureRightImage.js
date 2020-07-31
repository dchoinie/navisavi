import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaVideo } from "react-icons/fa"
import iPhone2 from "../../images/phones/iPhone2.png";
import iPhone4 from "../../images/phones/iPhone4.png";
import styles from "../../styles/Feature.module.css"

const FeatureRightImage = ({ imageNum, icon, mainText, subText }) => {
    let image = imageNum == 2 ? iPhone2 : iPhone4;
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
                <div className={styles.image} style={{ backgroundImage: "url(" + image + ")" }} />
            </div>
        </div>
    )
}

export default FeatureRightImage

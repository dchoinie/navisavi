import React from "react"
import styles from "../styles/EarnLink.module.css"

const EarnLink = () => {
    return (
        <div className={styles.container} id="learn">
            <div className={styles.mainText}>Want to get paid to travel?</div>
            <div className={styles.buttonContainer}>
                <div className={styles.button}>
                    <div className={styles.buttonText}>Show me how!</div>
                </div>
                <div className={styles.buttonShadow} />
            </div>
        </div>
    )
}

export default EarnLink

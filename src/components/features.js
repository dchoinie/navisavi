import React from "react"
import { FaSearch, FaVideo, FaGraduationCap, FaPlaneDeparture } from "react-icons/fa"
import FeatureLeftImage from "./features/FeatureLeftImage"
import FeatureRightImage from "./features/FeatureRightImage"
import EarnLink from "./EarnLink"
import styles from "../styles/Features.module.css"

const Features = () => {
    return (
        <div className={styles.container} id="learn">
            <FeatureLeftImage
                icon={<FaSearch className={styles.icon} />}
                mainText="Search & Filter Destinations"
                subText="Narrow down by cities, tags, distance and price."
            />
            <FeatureRightImage
                icon={<FaVideo className={styles.icon} />}
                mainText="Browse Videos By Other Travellers"
                subText="Watch short clips of friends, influencers, or other travelers vacations."
            />
            <FeatureLeftImage
                icon={<FaGraduationCap className={styles.icon} />}
                mainText="Learn More About An Experience"
                subText="Location information is verified by Navi Savi or the business."
            />
            <FeatureRightImage
                icon={<FaPlaneDeparture className={styles.icon} />}
                mainText="Save Clips Plan Trips"
                subText="Build and share a video itinerary of your next vacation."
            />
        </div>
    )
}

export default Features

import React from "react"
import FeaturesItem1 from "./features/featuresItem1"
import FeaturesItem2 from "./features/featuresItem2"
import FeaturesItem3 from "./features/featuresItem3"
import FeaturesItem4 from "./features/featuresItem4"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import styles from "../styles/Features.module.css"

const Features = () => {
    return (
        <div className={styles.container} id="learn">
            <div className={styles.title}>Features</div>
            <div className={styles.carouselContainer}>
                <Carousel
                  showThumbs={false}
                  showStatus={false}
                  infiniteLoop={true}
                  autoPlay={true}
                  swipeable={true}
                  showArrows={true}
                  showIndicators={true}
                >
                    <FeaturesItem1 />
                    <FeaturesItem2 />
                    <FeaturesItem3 />
                    <FeaturesItem4 />
                </Carousel>
            </div>
        </div>
    )
}

export default Features

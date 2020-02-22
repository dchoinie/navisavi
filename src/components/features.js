import React from "react"
import FeaturesItem1 from "./features/featuresItem1"
import FeaturesItem2 from "./features/featuresItem2"
import FeaturesItem3 from "./features/featuresItem3"
import FeaturesItem4 from "./features/featuresItem4"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const Features = () => {
  return (
    <div className="py-24 lg:mx-56">
      <h2 className="text-center text-5xl teal pb-12 lowercase">Features</h2>
      <div className="px-6 lg:px-0">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          swipeable={true}
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

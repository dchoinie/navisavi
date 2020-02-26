import React from "react"
import FeaturesItem1 from "./features/featuresItem1"
import FeaturesItem2 from "./features/featuresItem2"
import FeaturesItem3 from "./features/featuresItem3"
import FeaturesItem4 from "./features/featuresItem4"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const Features = () => {
  return (
    <div className="py-24 lg:mx-56" id="features">
      <h2 className="text-center text-5xl teal lowercase">Features</h2>
      <div
        className="flex justify-center text-2xl"
        style={{ paddingBottom: "calc(24px + 1.5rem)" }}
      >
        <h5 className="text-gray-700">One Is Not Enough.</h5>
      </div>
      <div className="px-6 lg:px-0">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          swipeable={true}
          showArrows={true}
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

import React from "react"
import Ibiza from "../videos/ibiza.mp4"
import Balloon from "../videos/balloon.mp4"
import Dog from "../videos/dog.mp4"
import Turtle from "../videos/turtle.mp4"

const VideoGroup = () => {
  return (
    <div className="flex">
      <video
        autoPlay="true"
        loop="true"
        muted="true"
        width="100%"
        style={{ maxHeight: "550px", objectFit: "fill" }}
      >
        <source src={Ibiza} type="video/mp4" />
      </video>
      {/* <video
        autoPlay="true"
        loop="true"
        muted="true"
        height="auto"
        width="100%"
        style={{ maxHeight: "550px", objectFit: "fill" }}
      >
        <source src={Balloon} type="video/mp4" />
      </video> */}
      <video
        autoPlay="true"
        loop="true"
        muted="true"
        height="auto"
        width="100%"
        style={{ maxHeight: "550px", objectFit: "fill" }}
      >
        <source src={Dog} type="video/mp4" />
      </video>
      <video
        autoPlay="true"
        loop="true"
        muted="true"
        height="auto"
        width="100%"
        style={{ maxHeight: "550px", objectFit: "fill" }}
      >
        <source src={Turtle} type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoGroup

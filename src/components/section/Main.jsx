import React from 'react'
import videoMainBg from '../../assets/images/home/videoMainBg.mp4'

const Main = () => {
  return (
    <div className="container">
      <video
        autoPlay
        loop
        muted
        className="video-bg"
      >
        <source src={ videoMainBg } type="video/mp4" />
      </video>
      <div className="wrapper main">
        <h1 className="title">UX/UI</h1>
        <div className="info-text">
          <h1 className="title">
            Design Agency
          </h1>
          <div className="description">
            With 18 years in user experience and brand identity we help forward-thinking companies create digital products that are intuitive,
            engaging, and deliver results.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
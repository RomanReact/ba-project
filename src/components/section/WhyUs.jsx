import React from 'react'
import SideNavigation from '../SideNavigation'
import Button from '../Button'

const WhyUs = () => {
  return (
    <div className="container light-300" id="whyChooseUs">
      <SideNavigation active={1}/>
      <div className="wrapper">
        <div className="info-container">
          <div className="info-text">
            <div className="title">
              Why us
            </div>
            <div className="description">
              <p>
                We define, design, and develop transformative experiences across all the brand’s touchpoints.
              </p>
              <p>
                With 18 years in user experience and brand identity we help forward-thinking companies create digital products that are
                intuitive, engaging, and deliver results.
              </p>
            </div>
          </div>
          <Button title="Our Showcases" />
        </div>
      </div>
    </div>
  )
}

export default WhyUs
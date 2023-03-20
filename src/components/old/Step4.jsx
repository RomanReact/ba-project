import React from 'react'
import infographic1 from '../../assets/image/infographic-1.png'
import infographic2 from '../../assets/image/infographic-2.png'
import infographic3 from '../../assets/image/infographic-3.png'
import fan from '../../assets/image/fan-image.png'

const Step4 = () => {
  return (
    <div className="step-4">
      <div className="title-right">
        <div className="step-title">
          <div className="step">step 4</div>
          <h3>Infographics</h3>
        </div>
      </div>
      <img src={infographic1} alt="infographic1" className="image-left"/>
      <img src={infographic2} alt="infographic2" className="image-right"/>
      <div className="infographic3">
        <div className="color-dark"></div>
        <div className="color-light"></div>
        <img src={infographic3} alt="infographic3" className="image-1"/>
        <img src={fan} alt="fan" className="image-2"/>
      </div>
    </div>
  )
}

export default Step4
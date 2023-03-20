import React from 'react'
import arrowRightBottom from '../assets/image/icons/arrow-right-bottom.png'

import macbook from '../assets/image/devices/macbook.png'
import iphone from '../assets/image/devices/iphone14.png'
import InfoContainer from '../components/InfoContainer'
import { casesData } from '../const/casesData.js'

const Cases = () => {
  const { Ayla, MOLOCO } = casesData
  return (
    <>
      <div className="cases">
        <div className="big-container container">
          <InfoContainer Case={Ayla} />
          <div className="label">
            UX/UI Product Design, Strategy & Branding
          </div>
          <img src={ macbook } alt="macbook" className="macbook" />
          <img src={ iphone } alt="iphone" className="iphone" />
        </div>
        <div className="medium-container container">
          <InfoContainer Case={MOLOCO} />
          <div className="label">
            UX/UI Product Design, Strategy & Branding
          </div>
          <img src={ macbook } alt="macbook" className="macbook" />
          <img src={ iphone } alt="iphone" className="iphone" />
        </div>
      </div>


    </>
  )
}

export default Cases
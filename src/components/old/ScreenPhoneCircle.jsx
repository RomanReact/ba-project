import React from 'react'
import screenPhone9 from '../../assets/image/screen-phone9.png'
import banner from '../../assets/image/bg-screen-ellipse.png'

const ScreenPhoneCircle = () => {
  return (
    <div className="screen-phone-circle bg-color">
      <div className="bg-phone-circle" style={{ backgroundImage: `url(${banner})` }}>
        <img src={screenPhone9} alt="screenPhone9" />
      </div>
    </div>
  )
}

export default ScreenPhoneCircle
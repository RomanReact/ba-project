import React from 'react'
import img1 from '../../assets/image/AylaStep3/img1.png'
import img2 from '../../assets/image/AylaStep3/img2.png'
import img3 from '../../assets/image/AylaStep3/img3.png'
import img4 from '../../assets/image/AylaStep3/img4.png'
import img5 from '../../assets/image/AylaStep3/img5.png'
import img6 from '../../assets/image/AylaStep3/img6.png'
import img7 from '../../assets/image/AylaStep3/img7.png'

import img1Absol from '../../assets/image/AylaStep3/img1Absol.png'
import img2Absol from '../../assets/image/AylaStep3/img2Absol.png'

const Step3 = () => {
  return (
    <div className="screen-phone-four">
      <div className="gallery-step3">
        <img src={img1} alt="img1" />
        <img src={img2} alt="img2" />
        <img src={img3} alt="img3" />
        <img src={img4} alt="img4" />
        <img src={img5} alt="img5" />
        <img src={img6} alt="img6" />
        <img src={img7} alt="img7" />
        <img src={img1Absol} alt="img1Absol" className="img1Absol absol" width="100%" />
        <img src={img2Absol} alt="img2Absol" className="img2Absol absol" width="100%" />
      </div>
    </div>
  )
}

export default Step3
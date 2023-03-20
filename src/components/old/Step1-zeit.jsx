import React from 'react'
import variant1 from '../../assets/image/zeitview/variant-1.png'
import variant2 from '../../assets/image/zeitview/variant-2.png'
import variant3 from '../../assets/image/zeitview/variant-3.png'
import variant4 from '../../assets/image/zeitview/variant-4.png'
import variant5 from '../../assets/image/zeitview/variant-5.png'
import variant6 from '../../assets/image/zeitview/variant-6.png'
import zeitHorizon from '../../assets/image/zeitview/zeitHorizon.jpg'
import zeitImg1 from '../../assets/image/zeitview/zeitImg1.jpg'

const Step1Zeit = () => {
  return (
    <>
      <div className="step-1 zeit">
        <div className="step-title desc wrapper">
          <div className="step">step 1</div>
          <h3>Logotype</h3>
          <div className="step-desc">
            Dictum eget laoreet nulla nisl eros ac commodo est. Facilisis amet sit fames volutpat vel.
            Interdum arcu amet arcu adipiscing varius ullamcorper feugiat amet.
          </div>
        </div>

      <div className="var-container">
        <img src={variant1} alt="variant1" className="image-right"/>
        <img src={variant2} alt="variant2" className="image-left"/>
        <img src={variant3} alt="variant3" className="image-right"/>
        <img src={variant4} alt="variant4" className="image-left"/>
        <img src={variant5} alt="variant5" className="image-right"/>
        <img src={variant6} alt="variant6" className="image-left"/>
      </div>
      <div className="wrapper descWrap">
        Dictum eget laoreet nulla nisl eros ac commodo est. Facilisis amet sit fames volutpat vel.
        Interdum arcu amet arcu adipiscing varius ullamcorper feugiat amet.
      </div>
      <img src={zeitHorizon} alt="zeitHorizon" width="100%"/>

      <div className="bg-dark-color">
        <div className="wrapper descWrap">
          Dictum eget laoreet nulla nisl eros ac commodo est. Facilisis amet sit fames volutpat vel.
          Interdum arcu amet arcu adipiscing varius ullamcorper feugiat amet.
        </div>
      </div>
      <img src={zeitImg1} alt="zeitImg1" width="100%"/>
      </div>
    </>
  )
}

export default Step1Zeit
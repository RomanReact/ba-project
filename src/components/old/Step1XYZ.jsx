import React from 'react'
import img1 from '../../assets/image/xyztrust/step1/img-1.png'
import img2 from '../../assets/image/xyztrust/step1/img-2.png'
import img3 from '../../assets/image/xyztrust/step1/img-3.png'
import img4 from '../../assets/image/xyztrust/step1/img-4.png'
import img5 from '../../assets/image/xyztrust/step1/img-5.png'
import img6 from '../../assets/image/xyztrust/step1/img-6.png'
import img7 from '../../assets/image/xyztrust/step1/img-7.png'
import img8 from '../../assets/image/xyztrust/step1/img-8.png'
import img9 from '../../assets/image/xyztrust/step1/img-9.png'
import img10 from '../../assets/image/xyztrust/step1/img-10.png'
import img11 from '../../assets/image/xyztrust/step1/img-11.png'
import img12 from '../../assets/image/xyztrust/step1/img-12.png'
import img13 from '../../assets/image/xyztrust/step1/img-13.png'

import zeitHorizon from '../../assets/image/zeitview/zeitHorizon.jpg'
import zeitImg1 from '../../assets/image/zeitview/zeitImg1.jpg'

const Step1Xyz = () => {
  return (
    <>
      <div className="step-1 zeit">
        <div className="step-title desc wrapper">
          <div className="step">step 1</div>
          <h3>Slide <br/> Collateral</h3>
          <div className="step-desc">
            Dictum eget laoreet nulla nisl eros ac commodo est. Facilisis amet sit fames volutpat vel. Interdum arcu amet arcu
            adipiscing varius ullamcorper feugiat amet.
          </div>
        </div>

        <div className="wrap-container">
          <img src={img1} alt="img1" className="image-left"/>
          <img src={img2} alt="img2" className="image-right"/>
          <img src={img3} alt="img3" className="image-left"/>
          <img src={img4} alt="img4" className="image-right"/>
          <img src={img5} alt="img5" className="image-left"/>
          <img src={img6} alt="img6" className="image-right"/>
          <img src={img7} alt="img7" className="image-left"/>
          <div>
            <img src={img8} alt="img8" className="image-right"/>
            <img src={img9} alt="img9" className="image-left"/>
          </div>
          <img src={img10} alt="img10" className="image-left"/>
          <img src={img11} alt="img11" className="image-left"/>
        </div>

        <div className="bg-dark-color">
          <div className="lr-container first">
            <img src={img12} alt="img12" className="image-left"/>
            <img src={img13} alt="img13" className="image-right"/>
          </div>
        </div>




        {/*<div className="wrapper descWrap">*/}
        {/*  Dictum eget laoreet nulla nisl eros ac commodo est. Facilisis amet sit fames volutpat vel.*/}
        {/*  Interdum arcu amet arcu adipiscing varius ullamcorper feugiat amet.*/}
        {/*</div>*/}
        {/*<img src={zeitHorizon} alt="zeitHorizon" width="100%"/>*/}

        {/*<div className="bg-dark-color">*/}
        {/*  <div className="wrapper descWrap">*/}
        {/*    Dictum eget laoreet nulla nisl eros ac commodo est. Facilisis amet sit fames volutpat vel.*/}
        {/*    Interdum arcu amet arcu adipiscing varius ullamcorper feugiat amet.*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<img src={zeitImg1} alt="zeitImg1" width="100%"/>*/}
      </div>
    </>
  )
}

export default Step1Xyz
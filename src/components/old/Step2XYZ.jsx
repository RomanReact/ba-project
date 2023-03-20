import React from 'react'
import img1 from '../../assets/image/xyztrust/step2/img-1.png'
import img2 from '../../assets/image/xyztrust/step2/img-2.png'
import img3 from '../../assets/image/xyztrust/step2/img-3.png'
import img4 from '../../assets/image/xyztrust/step2/img-4.png'
import img5 from '../../assets/image/xyztrust/step2/img-5.png'
import img6 from '../../assets/image/xyztrust/step2/img-6.png'
import img7 from '../../assets/image/xyztrust/step2/img-7.png'
import img8 from '../../assets/image/xyztrust/step2/img-8.png'
import img9 from '../../assets/image/xyztrust/step2/img-9.png'
import img10 from '../../assets/image/xyztrust/step2/img-10.png'
import img11 from '../../assets/image/xyztrust/step2/img-11.png'
import img12 from '../../assets/image/xyztrust/step2/img-12.png'
import img13 from '../../assets/image/xyztrust/step2/img-13.png'

const Step2Xyz = () => {
  return (
    <div className="step-1 zeit xyz">
      <div className="step-title desc wrapper">
        <div className="step-desc">
          Dictum eget laoreet nulla nisl eros ac commodo est. Facilisis amet sit fames volutpat vel. Interdum arcu amet arcu adipiscing varius
          ullamcorper feugiat amet. Sit potenti habitasse ac eget ornare tincidunt amet, pretium etiam.
        </div>
        <div>
          <div className="step">step 2</div>
          <h3>User <br/> Interface <br/> Design</h3>
        </div>
      </div>

        <img src={img1} alt="img1" className="image-right"/>
      <div className="gallery-container wrapper">
        <img src={img2} alt="img2" />
        <img src={img13} alt="img13" className="absolute img-2"/>
        <img src={img3} alt="img3" className="img-3"/>
        <div className="flex flex-end gap-2 imgDouble">
          <img src={img4} alt="img4" className="image-left"/>
          <img src={img5} alt="img5" className="image-right"/>
        </div>
        <div className="flex flex-start gap-2">
          <img src={img6} alt="img6" className="image-left"/>
          <img src={img7} alt="img7" className="image-right"/>
        </div>
      </div>
        <img src={img8} alt="img8" className="img-8"/>
      <div className="bg-dark-color">
        <div className="lr-container second">
          <img src={img9} alt="img9" className="image-left"/>
          <img src={img10} alt="img10" className="image-right"/>
        </div>
      </div>

        <img src={img11} alt="img11" className="img-11"/>
        <img src={img12} alt="img12" className="img-12"/>
    </div>
  )
}

export default Step2Xyz
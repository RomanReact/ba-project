import React from 'react'
import img1 from '../../assets/image/zeitview/step3-img1.png'
import img2 from '../../assets/image/zeitview/step3-img2.png'
import img3 from '../../assets/image/zeitview/step3-img3.png'
import img4 from '../../assets/image/zeitview/step3-img4.png'
import img5 from '../../assets/image/zeitview/step3-img5.png'
import img6 from '../../assets/image/zeitview/step3-img6.png'
import img7 from '../../assets/image/zeitview/step3-img7.png'
import img8 from '../../assets/image/zeitview/step3-img8.png'
import img9 from '../../assets/image/zeitview/step3-img9.png'
import img10 from '../../assets/image/zeitview/step3-img10.png'

const Step3Zeit = () => {
  const imageData = [ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 ]

  return (
    <div>
      <div className="step-title-container step3-zeit">
        <div className="step-title desc wrapper">
          <div className="title">
            <div className="step">step 3</div>
            <h3>Web Collaterals</h3>
          </div>
          <div className="step-desc">
            Dictum eget laoreet nulla nisl eros ac commodo est. Facilisis amet sit fames volutpat vel. Interdum arcu amet arcu adipiscing
            varius ullamcorper feugiat amet.
          </div>
        </div>
        <div>
          {
            imageData.map((x, i) => (
              <img src={x} alt={ `img${i+1}` } className={ `img${i+1}` } />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Step3Zeit
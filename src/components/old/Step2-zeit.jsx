import React from 'react'
import zeitStep2Img1 from '../../assets/image/zeitview/zeitStep2Img1.png'
import zeitStep2Img15 from '../../assets/image/zeitview/zeitStep2Img15.png'
import img1 from '../../assets/image/zeitview/gallery/img1.png'
import img2 from '../../assets/image/zeitview/gallery/img2.png'
import img3 from '../../assets/image/zeitview/gallery/img3.png'
import img4 from '../../assets/image/zeitview/gallery/img4.png'
import img5 from '../../assets/image/zeitview/gallery/img5.png'
import img6 from '../../assets/image/zeitview/gallery/img6.png'
import img7 from '../../assets/image/zeitview/gallery/img7.png'
import img8 from '../../assets/image/zeitview/gallery/img8.png'
import img9 from '../../assets/image/zeitview/gallery/img9.png'
import img10 from '../../assets/image/zeitview/gallery/img10.png'
import img11 from '../../assets/image/zeitview/gallery/img11.png'
import img12 from '../../assets/image/zeitview/gallery/img12.png'
import img13 from '../../assets/image/zeitview/gallery/img13.png'

const Step2Zeit = () => {
  const gallery = [ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13 ]

  return (
    <div>
      <div className="step-title-container right bg-dark-color">
        <div className="step-title desc wrapper">
          <div className="title">
            <div className="step">step 2</div>
            <h3>Style Guide</h3>
          </div>
          <div className="step-desc">
            Dictum eget laoreet nulla nisl eros ac commodo est. Facilisis amet sit fames volutpat vel. Interdum arcu amet arcu
            adipiscing varius ullamcorper feugiat amet. Sit potenti habitasse ac eget ornare tincidunt amet, pretium etiam.
          </div>
        </div>

      </div>
      <img src={zeitStep2Img1} alt="zeitStep2Img1" width="100%" />
      <div className="grid-gallery">
        {
          gallery.map((x, i) => (
            <img src={x} alt={x} className={ `img${i+1}` } />
          ))
        }
      </div>
      <img src={zeitStep2Img15} alt="zeitStep2Img15" width="100%"/>
    </div>
  )
}

export default Step2Zeit
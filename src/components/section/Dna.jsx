import React from 'react'
import Slider from 'react-slick'
import dna1 from '../../assets/images/home/dna-1.png'
import dna2 from '../../assets/images/home/dna-2.png'
import dna3 from '../../assets/images/home/dna-2.png'
import dna4 from '../../assets/images/home/dna-2.png'
import { dnaData } from '../../const/dnaData'
import SideNavigation from '../SideNavigation'

const Dna = () => {
  const settingsDna = {
    // className: 'center',
    // centerMode: true,
    infinite: false,
    // centerPadding: '100px',
    slidesToShow: 2,
    speed: 500,
    dots: false,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true
  }
  return (
    <div className="container light-600" id="dna">
      <SideNavigation active={3}/>
      <div className="wrapper dna-container">
        <div className="title">
          Our DNA
        </div>
        <Slider { ...settingsDna } className="slider-dna">
          {dnaData.map(item =>
            <div className="slider-item">
              <div className="title-dna">{item.title}</div>
              <div className="desc-dna">{item.desc}</div>
            </div>
          )}
        </Slider>
      </div>
    </div>
  )
}

export default Dna
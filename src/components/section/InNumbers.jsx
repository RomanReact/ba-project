import React from 'react'
import bottomSemiCircle from '../../assets/images/home/bottom-half-icon.png'
import Slider from 'react-slick'
import vimpel from '../../assets/images/home/logo-vimpel.png'
import inseego from '../../assets/images/home/logo-inseego.png'
import moloco from '../../assets/images/home/logo-moloco.png'
import ayla from '../../assets/images/home/logo-ayla.png'
import track from '../../assets/images/home/logo-track.png'
import SideNavigation from '../SideNavigation'
import Button from '../Button'

const InNumbers = () => {
  const settingsLogo = {
    className: 'slider variable-width',
    centerMode: true,
    infinite: true,
    centerPadding: '200px',
    // slidesToShow: 4,
    speed: 3000,
    dots: false,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    variableWidth: true,
    autoplaySpeed: 3000,
    cssEase: 'linear'
  }

  return (
    <div className="container light-900" id="inNumbers">
      <SideNavigation active={2}/>
      <img src={ bottomSemiCircle } alt="" className="bg-element" />
      <div className="wrapper">
        <div className="info-container">
          <div className="title">
            BlueApple in numbers
          </div>
          <div className="list-inNumbers">
            <div className="item">
              <div className="info-num">
                <span>$</span>750m<span>+</span>
              </div>
              <div className="description">Investments raised</div>
            </div>
            <div className="item">
              <div className="info-num">
                18
              </div>
              <div className="description">Years in business</div>
            </div>
            <div className="item">
              <div className="info-num">
                400<span>+</span>
              </div>
              <div className="description">Projects delivered</div>
            </div>
          </div>
          <Button title="Clients" />
        </div>
      </div>
      <Slider { ...settingsLogo } className="slider-logo">
        <div className="slider-item"><img src={ vimpel } alt="" /></div>
        <div className="slider-item"><img src={ inseego } alt="" /></div>
        <div className="slider-item"><img src={ moloco } alt="" /></div>
        <div className="slider-item"><img src={ ayla } alt="" /></div>
        <div className="slider-item"><img src={ track } alt="" /></div>
        <div className="slider-item"><img src={ ayla } alt="" /></div>
      </Slider>
    </div>
  )
}

export default InNumbers
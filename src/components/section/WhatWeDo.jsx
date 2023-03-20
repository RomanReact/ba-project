import React from 'react'
import SideNavigation from '../SideNavigation'
import videoMainBg from '../../assets/images/home/videoMainBg.mp4'
import { listWhatWeDo } from '../../const/servicesData'
import Accordion from '../Accordion'
import arrowRight from '../../assets/images/home/ico_arrow.png'
import { useState } from 'react'
import Button from '../Button'

const WhatWeDo = () => {
  const [active, setActive] = useState('Explore')
  return (
    <div className="container color-light" id="whatWeDo">
      <SideNavigation active={ 4 } />
      <div className="wrapper what-block">
        <video
          autoPlay
          loop
          muted
          className={ 'video-bg ' + active }
        >
          <source src={ videoMainBg } type="video/mp4" />
        </video>
        <div>
          <div className="title">
            What We Do
          </div>
          {
            listWhatWeDo.map((item, index) =>
              <Accordion item={ item } index={ index } active={ active } setActive={ setActive } />
            )
          }
        </div>
        <Button title="Services" light={ true }/>
      </div>
    </div>
  )
}

export default WhatWeDo
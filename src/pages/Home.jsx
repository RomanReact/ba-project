import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from 'react-slick'
import arrowRight from '../assets/images/home/ico_arrow.png'
import semicircle from '../assets/images/home/semicircle.png'
import bottomSemiCircle from '../assets/images/home/bottom-half-icon.png'
import dna1 from '../assets/images/home/dna-1.png'
import dna2 from '../assets/images/home/dna-2.png'
import don from '../assets/images/home/don.png'
import vimpel from '../assets/images/home/logo-vimpel.png'
import inseego from '../assets/images/home/logo-inseego.png'
import moloco from '../assets/images/home/logo-moloco.png'
import ayla from '../assets/images/home/logo-ayla.png'
import track from '../assets/images/home/logo-track.png'
import videoMainBg from '../assets/images/home/videoMainBg.mp4'
import Accordion from '../components/Accordion'
import { listWhatWeDo } from '../const/servicesData'
import { reviewsData } from '../const/reviewsData'
import useScrollSnap from 'react-use-scroll-snap'
import Main from '../components/section/Main'
import SideNavigation from '../components/SideNavigation'
import WhyUs from '../components/section/WhyUs'
import InNumbers from '../components/section/InNumbers'
import Dna from '../components/section/Dna'
import SidebarMenu from '../components/SidebarMenu'
import WhatWeDo from '../components/section/WhatWeDo'
import ClientSay from '../components/section/ClientSay'

const Home = () => {



  const settings3 = {
    className: 'slider variable-width',
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true
  }
  // const scrollRef = useRef(null)
  // useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 })
  return (
    <div className="homepage">
      <Header />
      <Main />
      <WhyUs />
      <InNumbers />
      <Dna />
      <WhatWeDo />
      <ClientSay />
      <Footer/>
    </div>
  )
}

export default Home
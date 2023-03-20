import React from 'react'
import Header from '../../components/Header'
import MainScreen from '../../components/MainScreen'
import DesignProcess from '../../components/old/DesignProcess'
import Step1 from '../../components/old/Step1'
import ScreenPhone from '../../components/old/ScreenPhone'
import ScreenPhoneCircle from '../../components/old/ScreenPhoneCircle'
import ScreenPhoneFour from '../../components/old/ScreenPhoneFour'
import HandBlock from '../../components/old/handBlock'
import Step4 from '../../components/old/Step4'
import Footer from '../../components/Footer'
import macbook from '../../assets/image/MacbookAir(2022).png'
import process from '../../assets/image/process.png'
import Prefooter from '../../components/Prefooter'
import Step3 from '../../components/old/Step3'

const Ayla = () => {
  const main = {
    title: 'Ayla Networks',
    text: '"BlueApple is reliable, fast, and quality of work is always top-notch. Our expectations are high and BlueApple\n' +
      '          team nails it every single time."',
    author: 'Alla Oks, Sr. Director Marketing, Ayla Networks'
  }
  const overview = {
    client: 'Ayla Networks enables consumer brand manufacturers (OEMs) & Internet service providers (ISPs) to realize\n' +
      '              better business outcomes through AI & IoT.',
    mainTask: 'BlueApple led a corporate identity redesign project with the complete overhaul of website structure and visual design.',
    list: [
      { name: 'Sitemap' },
      { name: 'Scope Definition' },
      { name: 'Research', class: 'desktop' },
      { name: 'Information Architecture' },
      { name: 'Wireframing' },
      { name: 'User Interface' },
      { name: 'Usability Testing' },
      { name: 'Infographics' },
      { name: 'Marketing Materials' },
      { name: 'Icon Package' },
    ]
  }
  return (
    <>
      <div className="wrapper">
        <Header />
        <MainScreen macbook={ macbook } main={main} overview={ overview }/>
      </div>
      <DesignProcess process={ process }/>
      <Step1 />
      <Step3 />
      <ScreenPhone />
      <ScreenPhoneCircle />
      <ScreenPhoneFour />
      <HandBlock />
      <Step4 />
      <Prefooter />
      <Footer />
    </>
  )
}

export default Ayla
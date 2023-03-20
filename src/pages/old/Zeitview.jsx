import React from 'react'
import Header from '../../components/Header'
import MainScreen from '../../components/MainScreen'
import Footer from '../../components/Footer'
import DesignProcess from '../../components/old/DesignProcess'
import macbook from '../../assets/image/zeitview/MacbookAir(2022).png'
import process from '../../assets/image/zeitview/process.png'
import Step1Zeit from '../../components/old/Step1-zeit'
import Step2Zeit from '../../components/old/Step2-zeit'
import Step3Zeit from '../../components/old/Step3-zeit'

const Zeitview = () => {
  const main = {
      title: 'Zeitview',
      text: 'Orci maecenas euismod quis donec. Ultrices lectus porttitor ullamcorper nisl augue ipsum cursus imperdiet. ' +
        'Laoreet enim sed tincidunt lectus vel id risus egestas.',
      author: 'XXX, Zeitview'
  }

  const overview = {
      client: 'Cursus aenean pellentesque urna vitae nunc feugiat. Libero, viverra augue vitae, elit quis odio. Nec platea sit nisl dictumst est ipsum egestas semper arcu eget volutpat.',
      mainTask: 'Lacus consequat in gravida amet tortor, velit bibendum volutpat. Magnis facilisis nec sed suspendisse in vitae ut suspendisse arcu sit.',
      list: [
        { name: 'Scope Definition' },
        { name: 'Research' },
        { name: 'Information Architecture' },
        { name: 'Logotype' },
        { name: 'Style Guide' },
        { name: 'Slide Collateral' },
        { name: 'Diagrams & Schemes' },
      ]
  }


  return (
    <div className="zeit">
      <div className="wrapper">
        <Header />
        <MainScreen main={main} macbook={ macbook } overview={ overview }/>
      </div>
      <DesignProcess process={ process }/>
      <Step1Zeit />
      <Step2Zeit />
      <Step3Zeit />
      <Footer />
    </div>
  )
}

export default Zeitview
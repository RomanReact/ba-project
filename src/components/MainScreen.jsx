import React from 'react'
import macbook from '../assets/image/MacbookAir(2022).png'

const MainScreen = () => {
  return (
    <div className="main-screen">
      <div className="main-info">
        <h1>Ayla Networks</h1>
        <p>“BlueApple is reliable, fast, and quality of work is always top-notch. Our expectations are high and BlueApple
          team nails it every single time.”</p>
        <span>Alla Oks, Sr. Director Marketing, Ayla Networks</span>
      </div>
      <div className="macbook-block">
        <img src={ macbook } alt="macbook" />
      </div>
      <div className="overview-block">
        <div className="overview-title">
          <h2>Overview</h2>
        </div>
        <div className="overview-info">
          <div>
            <h4>Client</h4>
            <p>Ayla Networks enables consumer brand manufacturers (OEMs) & Internet service providers (ISPs) to realize
              better business outcomes through AI & IoT.</p>
          </div>
          <div>
            <h4>Main Task</h4>
            <p>BlueApple led a corporate identity redesign project with the complete overhaul of website structure and visual design.</p>
          </div>
          <div>
            <h4>What We Did</h4>
            <ul>
              <li>Sitemap</li>
              <li>Scope Definition</li>
              <li className="desktop">Research</li>
              <li>Information Architecture</li>
              <li>Wireframing</li>
              <li>User Interface</li>
              <li>Usability Testing</li>
              <li>Infographics</li>
              <li>Marketing Materials</li>
              <li>Icon Package</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainScreen
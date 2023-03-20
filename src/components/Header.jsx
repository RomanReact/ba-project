import React from 'react'
import logo from '../assets/images/home/logo.png'
import { ReactComponent as LogoIcon } from '../assets/images/home/logoIcon.svg'
import menuIcon from '../assets/images/home/ico_menu.png'
import logotype from '../assets/images/home/logotype.png'
import close from '../assets/images/home/close.png'
import { useState } from 'react'
import arrowRight from '../assets/images/home/ico_arrow.png'
// import SidebarMenu from './SidebarMenu'

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  const MobileMenu = () => {
    setActiveMenu(true)
  }
  return (
    <header className="header">
      <a href="/" className="logo">
        {/*<LogoIcon />*/ }
        <img src={ logo } alt="logo" />
      </a>
      <div className="header-info">
        <a href="/contact" className="btn-primary">Contact Us</a>
        <img src={ menuIcon } alt="burger icon" className="burger" onClick={ MobileMenu } />
      </div>
      <div className={ activeMenu ? 'sidebar-menu active' : 'sidebar-menu' }>
        {/*<div className='sidebar-menu active'>*/ }
        <div className="sidebar-menu-header">
          <img src={ logotype } alt="" />
          <img src={ close } alt="" className="icon-close" onClick={ () => setActiveMenu(false) } />
        </div>
        <ul className="menu">
          <li className="menu-item">
            <div className="xl">Showcases <img src={ arrowRight } alt="arrowRight" /></div>
            <div>Making technology grow stronger</div>
          </li>
          <li className="menu-item xl">Services</li>
          <li className="menu-item xl">Clients</li>
          <li className="menu-item xl">About</li>
        </ul>
        <div className="contacts">
          <div>415.309.0170</div>
          <div>info@blueappledesign.com</div>
        </div>
      </div>
    </header>
  )
}

export default Header
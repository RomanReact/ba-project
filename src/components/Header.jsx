import React from 'react'
import logo from '../assets/image/logo.png'
import menuIcon from '../assets/image/ico_menu.png'

const Header = () => {
  return (
    <header>
      <a href="/" className='logo'>
        <img src={ logo } alt="logo" />
      </a>
      <div className="header-info">
        <a href="/contact" className='btn-primary'>Contact Us</a>
        <img src={ menuIcon } alt="burger icon" className="mobile-menu"/>
      </div>
    </header>
  )
}

export default Header
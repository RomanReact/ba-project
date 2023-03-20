import React from 'react'
import phone from '../assets/image/icon-phone.png'
import mail from '../assets/image/icon-mail.png'
import logo from '../assets/images/home/logotype-footer.png'

const Footer = () => {
  return (
    <footer className="container footer">
      <img src={ logo } alt="logo" className="footer-logo"/>
      <div className="footer-wrapper">
        <div className="copyright">© 2023 BlueApple Design. All rights reserved.</div>
        <div className="footer-info">
          <div className="contacts">
            <span>415.309.0170</span>
            <span>info@blueappledesign.com</span>
          </div>
          <ul className="secondary-menu">
            <li>Cases</li>
            <li>Services</li>
            <li>Clients</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
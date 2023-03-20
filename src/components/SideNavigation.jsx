import React from 'react'
import { dnaData } from '../const/dnaData'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const SideNavigation = ({active}) => {
  const navList = [
    { title: 'Why choose us', id: 'whyChooseUs' },
    { title: 'BlueApple in numbers', id: 'inNumbers' },
    { title: 'Our DNA', id: 'dna' },
    { title: 'What we do', id: 'whatWeDo' },
    { title: 'Clients say', id: 'clientSay' },
    { title: 'Let’s talk', id: 'letsTalk' },
  ]
  return (
    <ul className="sideNav-list">
      {navList.map((item, index) =>
        <AnchorLink offset='0' href={ '#' + item.id }>
          <li className={active === index+1 ? 'active' : ''}>{ item.title }</li>
        </AnchorLink>
      )}
    </ul>
  )
}

export default SideNavigation
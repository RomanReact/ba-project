import React, { useEffect } from 'react'

const Accordion = ({ item, index, active, setActive }) => {
  return (
    <div className={ active === item.title ? 'accordion active' : 'accordion' } onMouseEnter={() => setActive(item.title)}>
      <div className="heading">
        <div className="index">{ index + 1 }</div>
        <div>{ item.title }</div>
      </div>
      <div className={ (active === item.title ? 'show' : '') + ' content' }>
        <ul>
          {
            item.list.map(item =>
              <li>{ item }</li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default Accordion
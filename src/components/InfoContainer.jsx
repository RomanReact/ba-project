import React from 'react'
import arrowRightBottom from '../assets/image/icons/arrow-right-bottom.png'

const InfoContainer = ({ Case }) => {
  console.log('case', Case)
  return (
    <div className="info">
      {/*<img src={require(`../assets/image/cases/${ Case.title }.png`) } alt="logo" className="logo" />*/}
      <img src={require(`../assets/image/cases/Ayla Networks.png`) } alt="logo" className="logo" />
      <div className="text">
        <div className="title">{ Case.title }</div>
        <div className="description">{ Case.description }</div>
      </div>
      <div className="button-main">
        <div>View Case</div>
        <img src={ arrowRightBottom } alt="arrowRightBottom" />
      </div>
    </div>
  )
}

export default InfoContainer
import React from 'react'
import arrowRight from '../assets/images/home/ico_arrow.png'
import arrowRightLight from '../assets/images/home/ico_arrow_light.png'

const Button = ({ title, light }) => {
  console.log('light', light)
  let ArrowIcon
  if (light) {
    ArrowIcon = <img src={ arrowRight } alt="arrowRight" />;
  } else {
    ArrowIcon = <img src={ arrowRightLight } alt="arrowRightLight" />;
  }
  return (
    <div className={light ? "button-main light" : 'button-main'}>
      <div>{ title }</div>
      <img src={ arrowRight } alt="arrowRight" />
    </div>
  )
}

export default Button
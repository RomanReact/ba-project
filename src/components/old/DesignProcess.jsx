import React from 'react'
// import process from '../assets/image/process.png'

const DesignProcess = ({ process }) => {
  return (
    <div className="bg-dark-color design-process">
      <div className="wrapper">
        <h2>Design Process</h2>
        <img src={ process } alt="design process" />
      </div>
    </div>
  )
}

export default DesignProcess
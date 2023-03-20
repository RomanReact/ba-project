import React from 'react'


const MainScreen = ({main, macbook, overview}) => {
  const {title, text, author} = main
  const {client, mainTask, list} = overview
  return (
    <div className="main-screen">
      <div className="main-info">
        <h1>{ title }</h1>
        <p>{ text }</p>
        <span>{ author }</span>
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
            <p>{ client }</p>
          </div>
          <div>
            <h4>Main Task</h4>
            <p>{ mainTask }</p>
          </div>
          <div>
            <h4>What We Did</h4>
            <ul>
              { list.map( x => ( <li className={ x.class }>{ x.name }</li> ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainScreen
import React from 'react'
import SideNavigation from '../SideNavigation'
import Slider from 'react-slick'
import { reviewsData } from '../../const/reviewsData'

const ClientSay = () => {
  const
    slider = React.useRef(null),
    settings2 = {
      customPaging: function (i) {
        console.log('i', i)
        return (
          <a className="review-info">
            <div className="avatar">
              <img src={ reviewsData[i].avatar } alt="don" />
            </div>
            <div className="hide">
              <div>
                <h2 className="name">{ reviewsData[i].name }</h2>
                <div className="job-title">{ reviewsData[i].jobTitle }</div>
              </div>
              <img src={ reviewsData[i].logo } alt="" />
            </div>
          </a>
        )
      },
      dots: true,
      fade: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  return (
    <div className="container light-300" id="clientSay">
      <SideNavigation active={ 5 } />
      <div className="wrapper quote-reviews">
        <div className="flex gap-6">
          <div className="circle">"</div>
          <Slider ref={ slider } { ...settings2 } className="quote-slider">
            <div>
              "Working with BlueApple was like collaborating with an internal team, clear and concise communication, a truly receptive environment."
            </div>
            <div>
              "We are a group of passionate designers who work with your team covering all creative aspects, so your product and marketing teams can focus on
              their critical projects."
            </div>
            <div>
              "With a relationship-based approach, we help companies establish a confident digital presence without the hassle of dealing with multiple agencies
              and extended timelines."
            </div>
            <div>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio, dolorem ipsum laborum libero minima placeat reiciendis. Ab animi at
              ex hic, itaque."
            </div>
            <div>"Accusamus dicta doloribus eligendi et, eum eveniet fugit harum hic id itaque iure maxime modi neque non quaerat quidem, quisquam quos ratione
              saepe tenetur?"
            </div>
          </Slider>
        </div>
        <div>
          <button onClick={ () => slider?.current?.slickPrev() } className="slick-prev" />
          <button onClick={ () => slider?.current?.slickNext() } className="slick-next" />
        </div>
      </div>
    </div>
  )
}

export default ClientSay
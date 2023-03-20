import React from 'react'
import imgStep1 from '../../assets/image/img-step1.png'
import wireframes1 from '../../assets/image/wireframes-1.png'
import wireframes2 from '../../assets/image/wireframes-2.png'

const Step1 = () => {
  return (
    <>
    <div className="step-1">
      <div className="step-title desc wrapper">
        <div className="step">step 1</div>
        <h3>Sitemap</h3>
        <div className="step-desc">
          Alongside Ayla’s marketing team, BlueApple organized content into a well-defined and easy-to-understand structure. This visual
          representation of the site infrastructure and content was one point of connection for writers, designers, and developers
          to stay on the same page.
        </div>
      </div>
      <img src={imgStep1} alt="img-step1" />

    </div>
    <div className="step-2 title-right">
      <div className="step-title">
        <div className="step">step 2</div>
        <h3>Wireframes</h3>
      </div>
      <img src={wireframes1} alt="wireframes1" className="image-left"/>
      <div className="step2-text">Wireframes allowed each team member to clearly understand the content and functionality of each unique page of the site.</div>
      <img src={wireframes2} alt="wireframes2" className="image-right"/>
    </div>

      <div className="step-3">
        <div className="step-title desc wrapper">
          <div className="step">step 3</div>
          <h3>User Interface Design</h3>
          <div className="step-desc">
            The goal was to create a dynamic, high contrast, and bold user interface to mirror the company’s direction of expanding into
            new markets and introducing new products. We brought that vision to life by contrasting large white spaces with beautiful
            dark photography, bright green accents, CTAs, and elegant micro animations across the site.
          </div>
        </div>

      </div>
    </>
  )
}

export default Step1
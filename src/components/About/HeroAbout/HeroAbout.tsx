import React from 'react'
import HeroImage from 'C:/HtmlFiles/ReactLearning/blog-page/src/components/Assets/Images/HeroAboutImage.jpg'
import './HeroAbout.css'

function HeroAbout() {
  return (
    <section>
        <div className='ImageWrap'>
          <img src={HeroImage} width={'100%'} height={"700px"} className='heroImage' alt='hero-about'></img>
          <div className='heroText'>
              <h1 className='heroTitleAbout'>About us</h1>
          </div>
        </div>
    </section>
  )
}

export default HeroAbout
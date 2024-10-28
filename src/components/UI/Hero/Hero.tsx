//Hero section of the page

import React from 'react'
import HeroImage from 'C:/HtmlFiles/ReactLearning/blog-page/src/components/Assets/Images/HeroImage.jpg'
import './Hero.css'
import { Link } from 'react-router-dom'

function Hero() {
  let width= '70'
  let height= '5'
  return (
    <section>
        <div className='ImageWrap'>
          <img src={HeroImage} width={'100%'} height={"70%"} className='heroImage' alt='hero'></img>
          <div className='heroText'>
              <h1 className='heroTitle'>Welcome</h1>
              <div className='secondTitleWrap'>
                <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 38 3" fill="none">
                  <rect width={width} height={height} fill="white"/>
                </svg>
                <h2 className='heroSecondTitle'>to blog</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 38 3" fill="none">
                  <rect width={width} height={height} fill="white"/>
                </svg>
              </div>
              <Link to='/blogs'><button className="custom-button">Explore more</button></Link>

          </div>
        </div>
    </section>
  )
}

export default Hero
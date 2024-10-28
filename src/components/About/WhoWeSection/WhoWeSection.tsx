import React from 'react'
import './WhoWeSection.css'
import WhoWeImage from 'C:/HtmlFiles/ReactLearning/blog-page/src/components/Assets/Images/whoWeImage.jpg'

function WhoWeSection() {
  return (
    <section className='whoWeWrap'>
        <div className='whoWeSection'>
            <h2 className='whoWeTitle'>Who we are?</h2>
             <p className='whoWeDescription'>Lorem ipsum dolor sit, amet consectetur adipisiciLorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, perferendis optio, nam reprehenderit ad pariatur numquam officiis hic, error laboriosam voluptas veniam! Asperiores rem eius praesentium quis repudiandae mollitia ng elit. Laborum, perferendis optio, nam reprehenderit ad pariatur numquam officiis hic, error laboriosam voluptas veniam! Asperiores rem eius praes.</p>   
        </div>
        <div className='whoWeImageWrap'>
            <img src={WhoWeImage} className='whoWeImage' alt='who-we-are'></img>
        </div>
    </section>
  )
}

export default WhoWeSection
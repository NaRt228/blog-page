import React from 'react'
import Header from '../UI/Header/Header'
import HeroAbout from './HeroAbout/HeroAbout'
import WhoWeSection from './WhoWeSection/WhoWeSection'
import OurTeam from './OurTeam/OurTeam'
import Footer from '../UI/Footer/Footer'


function About() {
  return (
    <main>

        <HeroAbout></HeroAbout>
        <WhoWeSection></WhoWeSection>
        <OurTeam></OurTeam>

    </main>
  )
}

export default About
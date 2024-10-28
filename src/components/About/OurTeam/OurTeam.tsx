import React from 'react'
import './OurTeam.css'
import { MdWork } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
function OurTeam() {
  return (
    <section>
        <div className='ourTeamTitleWrap'>
            <MdWork className='ourTeamIcon' color='orange'/>
            <h2 className='ourTeamTitle'>Our Team</h2>
            <FaUserFriends className='ourTeamIcon' color='orange'/>
        </div>

        <div className='ourTeamPeople'>
            <div className='ourTeamPerson'>
                <div className="personAvatar">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwRAHsN90ooeM60y0gcj4vjxCa47GKWelK3xHMshYl3Q&s" alt="Circle Image" className="circleImage" />
                </div>
                <h2 className='personName'>Lorem ipsum</h2>
                <p className='personDescription'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum molestiae est libero! Sunt necessitatibus voluptas minima ea architecto</p>
                <p className='positioning'>Main autor</p>
                <div className='socialLinks'>
                    <FaFacebookF className='socialIcon' color='black'/>
                    <FaInstagramSquare className='socialIcon' color='black'/>
                    <CiLinkedin className='socialIcon' color='black'/>
                </div>
            </div>
            <div className='ourTeamPerson'>
            <div className='ourTeamPerson'>
                <div className="personAvatar">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwRAHsN90ooeM60y0gcj4vjxCa47GKWelK3xHMshYl3Q&s" alt="Circle Image" className="circleImage" />
                </div>
                <h2 className='personName'>Lorem ipsum</h2>
                <p className='personDescription'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum molestiae est libero! Sunt necessitatibus voluptas minima ea architecto</p>
                <p className='positioning'>Blog autor</p>
                <div className='socialLinks'>
                    <FaFacebookF className='socialIcon' color='black'/>
                    <FaInstagramSquare className='socialIcon' color='black'/>
                    <CiLinkedin className='socialIcon' color='black'/>
                </div>
            </div>
            </div>
            <div className='ourTeamPerson'>
            <div className='ourTeamPerson'>
                <div className="personAvatar">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwRAHsN90ooeM60y0gcj4vjxCa47GKWelK3xHMshYl3Q&s" alt="Circle Image" className="circleImage" />
                </div>
                <h2 className='personName'>Lorem ipsum</h2>
                <p className='personDescription'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum molestiae est libero! Sunt necessitatibus voluptas minima ea architecto</p>
                <p className='positioning'>Designer</p>
                <div className='socialLinks'>
                    <FaFacebookF className='socialIcon' color='black'/>
                    <FaInstagramSquare className='socialIcon' color='black'/>
                    <CiLinkedin className='socialIcon' color='black'/>
                </div>
            </div>
            </div>
        </div>
    
    </section>
  )
}

export default OurTeam
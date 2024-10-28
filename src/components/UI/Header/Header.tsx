//header component for the blog page

import React from 'react'
import { FaBookOpen } from "react-icons/fa";
import './Header.css'
import { Link } from 'react-router-dom';
import { RxAvatar } from "react-icons/rx";

function Header() {
  return (
    <header className='mainHead'>
      <div className='header'>
        <div className='headerLeft'>
          <FaBookOpen color='orange' className='logoIcon'/>
          <p className='logoSign'>Blog page</p>
        </div>
        <div className='headerCenter'>
          <Link to='/' className='headerLinks'>Home</Link>
          <Link to='/about' className='headerLinks'>About</Link>
          <Link to='/blogs' className='headerLinks' >Blogs</Link>
          <Link to='/contact' className='headerLinks'>Contact</Link>
        </div>
        <div className='headerRight'>
          <Link to='/admin'><RxAvatar className='avatarIcon'/></Link>
        </div>
      </div>
    </header>
  )
}

export default Header
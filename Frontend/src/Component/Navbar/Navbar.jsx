import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'


const Navbar = () => {
  return (
    <div className='main-navbar'>
      <div className='icon-logo'>
<img src={assets.icon} alt="genai_icon"  className="icon" srcset="" />
<img src={assets.logo} alt="genai_logo" className='logo' srcset="" />
      </div>
    </div>
  )
}

export default Navbar

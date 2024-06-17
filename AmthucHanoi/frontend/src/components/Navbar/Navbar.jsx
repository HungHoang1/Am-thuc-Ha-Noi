import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt=""  className='logo'/>
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <button>Sigh In</button>
      </div>
    </div>
  )
}

export default Navbar
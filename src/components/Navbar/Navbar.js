import React, { useState } from 'react'

import './Navbar.css'

import { GiHamburgerMenu } from 'react-icons/gi';
import { FaWindowClose } from 'react-icons/fa';


const Navbar = () =>
{
  
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        logo
        {/* <img src="" alt="" /> */}
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">home</a></li>
        <li className='p__opensans'><a href="#home">about</a></li>
        <li className='p__opensans'><a href="#home">reviews</a></li>
        <li className='p__opensans'><a href="#home">contact</a></li>
      </ul>

      <div className='app__navbar-book'>
        <a href="#book" className='p__opensans'>Book Now</a>
      </div>

      
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#000000' fontSize={27} onClick={ () => setToggleMenu(true) } />
      </div>

      {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <FaWindowClose color='#000000' fontSize={27} className="overlay__close" onClick={ () => setToggleMenu(false) } />
          <ul className="app__navbar-smallscreen_links">
            <li><a href="#home" onClick={ () => {} }>Home</a></li>
            <li><a href="#about" onClick={ () => {} }>about</a></li>
            <li><a href="#menu" onClick={ () => {} }>reviews</a></li>
            
            <li><a href="#contact" onClick={ () => {} }>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
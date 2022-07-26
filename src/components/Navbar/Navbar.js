import React, { useState } from 'react'

import './Navbar.css'

import { GiHamburgerMenu } from 'react-icons/gi';
import { FaWindowClose } from 'react-icons/fa';

import images from '../../constants/images'

import { Link } from 'react-router-dom'



const Navbar = () =>
{
  
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <Link to=''>
          <img src={images.hali} alt="logo" />
        </Link>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><Link to="/">home</Link></li>
        <li className='p__opensans'><Link to="/about">about</Link></li>
        <li className='p__opensans'><Link to="/reviews">reviews</Link></li>
        <li className='p__opensans'><Link to="/contact">contact</Link></li>
      </ul>

      <div className='app__navbar-book'>
        <Link to="/contact">
          <button>book now</button>
        </Link>
      </div>

      
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#000000' fontSize={27} onClick={ () => setToggleMenu(true) } />
      </div>

      {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <FaWindowClose color='#000000' fontSize={27} className="overlay__close" onClick={ () => setToggleMenu(false) } />
          <ul className="app__navbar-smallscreen_links">
            <li><Link to="/" onClick={ () => setToggleMenu(false) }>Home</Link></li>
            <li><Link to="/About" onClick={ () => setToggleMenu(false) }>about</Link></li>
            <li><Link to="/reviews" onClick={ () => setToggleMenu(false) }>reviews</Link></li>
            
            <li><Link to="/contact" onClick={ () => setToggleMenu(false) }>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
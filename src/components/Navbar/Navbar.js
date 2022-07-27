import React, { useState } from 'react'

import './Navbar.css'

import { GiHamburgerMenu } from 'react-icons/gi';
import { FaWindowClose } from 'react-icons/fa';

import images from '../../constants/images'

import { Link } from 'react-router-dom'



const Navbar = ({ toggleBar, setToggleBar, handleCount }) =>
{
  const [toggleMenu, setToggleMenu] = useState(false);

  const set = () =>
  {
    setToggleMenu(!toggleMenu)
    handleCount();
  }

  console.log(toggleBar)


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

      
      {/* {toggleMenu && <div className='app__navbar-book'>
        <Link to="/contact">
          <button>book now</button>
        </Link>
      </div>} */}

      <div className='app__navbar-book'>
        <Link to="/contact">
          <button>book now</button>
        </Link>
      </div>
      

      
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#000000' fontSize={27} onClick={ () => set() } />
      </div>

      {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">

          <FaWindowClose color='#000000' fontSize={27} className="overlay__close" onClick={ () => set() } />
          <ul className="app__navbar-smallscreen_links">
            <li><Link to="/" onClick={ () => set() }>Home</Link></li>
            <li><Link to="About" onClick={ () => set() }>about</Link></li>
            <li><Link to="/reviews" onClick={ () => set() }>reviews</Link></li>
            
            <li><Link to="/contact" onClick={() => set()}>Contact</Link></li>
          </ul>

        </div>
      )}
    </nav>
  )
}

export default Navbar
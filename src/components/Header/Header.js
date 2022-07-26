import React from 'react'
import SubHeading from '../SubHeading/SubHeading'

import images from '../../constants/images'

import { Link } from 'react-router-dom'


import './Header.css'

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
          
        <h1 className='app__header-h1'>hali</h1>
        <p className='p__opensans' style={{ margin: '2rem 0' }}>Animal Day Care & pet hotel in Helsinki area</p>
        <Link to='./contact'>
          <button type='button' className='custom__buttom'>get in touch</button>
        </Link>
        <img src={images.people}  alt="review_img" />
      </div>

      <div className="app__wrapper_img">
        <img src={images.dog} alt="header_img" />
      </div>
     
    </div>
  )
}

export default Header
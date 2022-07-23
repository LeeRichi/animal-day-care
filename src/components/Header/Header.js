import React from 'react'
import SubHeading from '../SubHeading/SubHeading'

import images from '../../constants/images'

import blob from '../../assets/blob.svg'



import './Header.css'

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
        <div className='app__wrapper_info'>
          <h1 className='app__header-h1'>Laura Happonen</h1>
          <p className='p__opensans' style={{ margin: '2rem 0' }}>companies</p>
          <button type='button' className='custom__buttom'>book now</button>
          <img src={images.people}  alt="review_img" />
        </div>

        <div className="app__wrapper_img">
              <img src={images.dog} alt="header_img" />
        </div>
       
    </div>
  )
}

export default Header
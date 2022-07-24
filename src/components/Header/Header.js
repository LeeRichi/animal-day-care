import React from 'react'
import SubHeading from '../SubHeading/SubHeading'

import images from '../../constants/images'




import './Header.css'

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
          
        <h1 className='app__header-h1'>hali</h1>
        {/* <img className='header__logo' src={images.hali} alt="" /> */}
        <p className='p__opensans' style={{ margin: '2rem 0' }}>Animal Day Care & pet hotel in Helsinki area</p>
        <button type='button' className='custom__buttom'>get in touch</button>
        <img src={images.people}  alt="review_img" />
      </div>

      <div className="app__wrapper_img">
        <img src={images.dog} alt="header_img" />
        {/* <div className='header__card'><img src={images.a} alt="" /></div>
        <div className='header__card'><img src={images.b} alt="" /></div>
        <div className='header__card'><img src={images.c} alt="" /></div>
        <div className='header__card'><img src={images.d} alt="" /></div>
        <div className='header__card'><img src={images.e} alt="" /></div> */}
      </div>
       
    </div>
  )
}

export default Header
import React from 'react'

import './Reviews.css'
import img from '../../constants/images'

const Reviews = () => {
  return (
    <div className='reviews'>

      <div className='card'>
        <div className='user-img'>
          <img src={''} alt="" />
        </div>
        <div className='content'>
          comments..
        </div>
      </div>

      <div className='card'>
        <div className='user-img'>
          {/* img */}
        </div>
        <div className='content'>
          comments
        </div>
      </div>

      <div className='card'>
        <div className='user-img'>
          {/* img */}
        </div>
        <div className='content'>
          comments
        </div>
      </div>

    </div>
  )
}

export default Reviews;
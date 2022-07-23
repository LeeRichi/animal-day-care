import React from 'react'

import SubHeading from '../../components/SubHeading/SubHeading'

import images from '../../constants/images'



import './About.css'

const About = () =>
{
 

    return (
        
        <div className='about'>
            <img src={images.face} className='main' alt="review_img" />
            <div className='subHeading'>
                <SubHeading title='say something' />
                <p>Do you know the best way to show your skills to employers or potential clients? Stand out from the crowd by presenting a well-digitalized flexible portfolio and get your dream job.</p>
            </div>
            {/* <img src={images.face5} className='sub' alt="review_img" />
            <h1 className='about-me text'>about</h1> */}
        </div>
            
        
     
  )
}

export default About
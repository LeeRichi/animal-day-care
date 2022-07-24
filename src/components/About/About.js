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
                <SubHeading title='I am Laura' />
                <p>Do you know the best way to show your skills to employers or potential clients? Stand out from the crowd by presenting a well-digitalized flexible portfolio and get your dream job.</p>
                <p>Do you know the best way to show your skills to employers or potential clients? Stand out from the crowd by presenting a well-digitalized flexible portfolio and get your dream job.</p>
                <p>Do you know the best way to show your skills to employers or potential clients? Stand out from the crowd by presenting a well-digitalized flexible portfolio and get your dream job.</p>
                
                <div className='about__pto'>
                    <div className='pto'><img src={images.a} alt="" /></div>
                    <div className='pto'><img src={images.b} alt="" /></div>
                    <div className='pto'><img src={images.c} alt="" /></div>
                    <div className='pto'><img src={images.d} alt="" /></div>
                    <div className='pto'><img src={images.e} alt="" /></div>
                </div>
            </div>
        </div>
            
        
     
  )
}

export default About
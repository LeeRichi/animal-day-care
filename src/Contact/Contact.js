import React, { useState, useRef } from 'react'
import './Contact.css'

import emailjs from '@emailjs/browser';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range';
import images from '../constants/images';

const Contact = ({toggleBar}) =>
{   

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const form = useRef();
  
    const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hh37yvg",
        "template_11ut7sg",
        form.current,
        "user_KkzQmUfBwzHX54slkC4zh"
      )
      .then(
        (result) => {
          console.log(result.text);
          // setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };

    function handleSelect(ranges)
    {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

  return (
    <>
    <div className='contact'>
      <form action="" ref={form} onSubmit={handleSubmit}>
        <div className='contact__title'>
          <h1 className='contact h1'>chose dates & contact </h1>
          <img src={images.hali} alt="logo" className='contact__logo' />
        </div>
        
        <div className='flex__date'>
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            className='calendar'
            name='startDate'/>
        </div>

        <div className='flex__contact'>
          <ul>
            <textarea className='special' name="from" id="dates" cols="30" rows="10">
              {startDate}
            </textarea>
            <textarea className='special' name="to" id="dates" cols="30" rows="10">
              {endDate}
            </textarea>        
            
            <li>
              <input type="text" name='name' placeholder='name' required/>
            </li>
            <li>
              <input type="email" name='email' placeholder='email' required/>
            </li>
            <li>
              <input type="text" name='phone' placeholder='phone number' required/>
            </li>
            <li>
              <input type="text" name='breed' placeholder='breed' required/>
            </li>
            <li>
              <input type="text" name='age' placeholder='pets age' required/>
            </li>
            <textarea name="message" id="" cols="30" rows="10" placeholder='additional info(dogs name, personality..)'></textarea>
            
            <button className='submit__btn'>Submit</button>
          </ul>
        </div>
      </form>
 
    </div>
 
    </>
  )
}

export default Contact
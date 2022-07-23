import React, { useState } from 'react'
import './Contact.css'


import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range';

const Contact = () =>
{   
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

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
    <div className='contact'>
      <h1>choose the date</h1>
      <div className=''></div>
      <form action="">
        <DateRangePicker
          ranges={[selectionRange]}
          onChange={handleSelect}
          className='calendar' />
        
        <ul>
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
          <textarea name="message" id="" cols="30" rows="10" placeholder='additional info'></textarea>
        </ul>
      </form>
 
    </div>
  )
}

export default Contact
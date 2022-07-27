import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';

import Navbar from './components/Navbar/Navbar';
import Reviews from './components/Reviews/Reviews';
import Contact from './Contact/Contact';
import navOverlay from './Contact/Contact';

import { useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const App = () =>
{
  
  const [toggleBar, setToggleBar] = useState(true);

  function handleCount()
  {
    setToggleBar(!toggleBar)
    console.log(toggleBar)
  }

  return (
    <>
      {/* <Navbar /> */}
      <div className="App">
        <Navbar toggleBar={toggleBar} setToggleBar={setToggleBar} handleCount={handleCount} />
        <Header toggleBar={toggleBar} setToggleBar={setToggleBar}/>
        <About />
        <Reviews />

        {/* {toggleBar1 && <Contact toggleBar={toggleBar}/>} */}
        <Contact toggleBar={toggleBar} />
        {/* <navOverlay /> */}
      </div>
    </>
  )

  
}

export default App; 

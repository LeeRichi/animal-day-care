import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import Header from './components/Header/Header';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Reviews from './components/Reviews/Reviews';
import Contact from './Contact/Contact';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="header" element={<Header />} />
        <Route path="About" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
);


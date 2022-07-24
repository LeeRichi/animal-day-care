import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';

import Navbar from './components/Navbar/Navbar';
import Reviews from './components/Reviews/Reviews';
import Contact from './Contact/Contact';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const App = () => (
  <div className="App">
    <Navbar />
    <Header />

    <About />
    

    <Reviews />
    <Contact />
  </div>
)

export default App; 

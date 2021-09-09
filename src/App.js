import React, {useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Header";

import Navbar from './Navbar';
import Home from './Home';

function App() {

  
  
 
  return (
    <div>
      
        <Header/>
        <Navbar/>
        <Home/>
        
       </div>
    
  )
}

export default App

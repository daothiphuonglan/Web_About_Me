import logo from './logo.svg';
import './App.css';
import React from 'react'

import{Routes,Route,Link} from 'react-router-dom'
import {Article,Brand,Navbar, Skill, } from './components';
import {Blog,footer,Features,Header,AddHeader,Work} from './containers'

function App() {
  return (
    <div className="App">
    <div className='wrapper'>
    <div className='gradient_bg'>
        <Navbar></Navbar>
        <Header></Header>
        <AddHeader></AddHeader>
        
    </div>
    </div>
    
    <Work></Work>
    <Skill></Skill>
    <div className='wrapper-app-second'>
   
    

    
    
    
    
    </div>

    

    
    </div>
  );
}

export default App;

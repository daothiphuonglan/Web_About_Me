import React from 'react';
import './navbar.css';
import {RiMenu3Line} from 'react-icons/ri'
import {RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.png';
import {useState} from 'react';
import {useEffect } from 'react';

const Navbar = () => {
    const [toggleMenu, setToggleMenu]=useState(false);
   
    

    
   
    return (

        
    <div className='navbar'>
        <div className='navbar-links'>
            <div className='navbar-links_logo'>
                  <img src={logo} alt ='logo'></img>
                  <h2 className='navbar-links_logo_text'>ELIAS</h2>
            </div>
            <div className='navbar-links_container'
                 >
                <p><a href='#home'>Home</a></p>
                <p><a href='#work'>Work</a></p>
                <p><a href='#about-me'>About me</a></p>
                <p><a href='#contact'>Contact</a></p>
           
                <p className='p_dropdown'>
                <div class="dropdown">
                  <button class="dropdown-btn">Language</button>
                  <div class="dropdown-content">
                  <a href="#">English</a>
                  <a href="#">VietNamese</a>
                  </div>
                </div>
                </p>
            </div>

           

        </div>


        <div className='navbar-menu'>
        {
            toggleMenu
            ? <RiCloseLine color='#fff' size={27} 
                onClick={()=> setToggleMenu(false)}
            />
            :<RiMenu3Line color='#fff' size={27}
                onClick={()=> setToggleMenu(true)}
            />
        }
        {
            toggleMenu &&(
                <div className='navbar-menu_container'>
                    <div className='navbar-menu_container-links'>
                         <p><a href='#home'>Home</a></p>
                         <p><a href='#work'>Work</a></p>
                         <p><a href='#about-me'>About me</a></p>
                         <p><a href='#contact'>Contact</a></p>
           
                        <p className='p_dropdown'>
                           <div class="dropdown">
                           <button class="dropdown-btn">Language</button>
                              <div class="dropdown-content">
                              <a href="#">English</a>
                              <a href="#">VietNamese</a>
                              </div>
                            </div>
                        </p>
                    </div>
                </div>
            )
        }
        </div> 

    </div>
    );
};

export default Navbar;
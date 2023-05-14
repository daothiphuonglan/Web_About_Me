import React from 'react';
import logo from '../../assets/logo.png'
import './header.css'

const Header = () => {
    return (
        <div className='header section__padding' id='home'>
           <div className='header-content'>
              <h1 className ='gradient__text'>
                I'm a web desinger and front-end developer
              </h1>
              <p className='header__text_p'>My name is Phuong Lan , from Vinh Phuc</p>
            <div className='header-content_contact'>
                <button type='button'>
                    Contact me !
                </button>
            </div>

            
           </div>

           <div className='header-image'>
                <img src={logo}/>
            </div>


           

          
        </div>
    );
};

export default Header;
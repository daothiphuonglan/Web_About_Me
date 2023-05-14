import React from 'react';
import './work.css';
import 'react-icons'

import Features from "../features/Features"




const Work = () => {
    return (
        <div>
              <div className='work_project' id='work'>
                <h1 className='work_project_h1' >My Project</h1>
              </div>
             <div className='work-content' id='work'>
           <Features title="Portfolio" text1='HTML' text2='CSS' text3='REACTJS'
            text='I want to create this website because when people access it, they can learn more information about myself and what I have accomplished. This website is built using the React.js language.'/>
           <Features title="Cinema Ticke" text1='HTML' text2='CSS' text3='Java Script' 
            text='I want to create this website because when people access it, they can learn more information about myself and what I have accomplished. This website is built using the React.js language.'/>
           <Features title="Spotify" text1='HTML' text2='CSS' text3='REACTJS'
            text='I want to create this website because when people access it, they can learn more information about myself and what I have accomplished. This website is built using the React.js language.'
           />
           
        </div>
        </div>
       
    );
};

export default Work;
import React from 'react';
import skill from './skill.css'
import {GiCheckMark} from 'react-icons/gi'

const Skill = () => {
    
    return (
        <div className='wrapper-skill'>
            <div className='wrapper-start'>
            <h2>My Skill</h2>
            <div className='wrapper-start-line'></div>
            </div>



                <div className='wrapper-content'>
                    <div className='main language'>
                      <h1>JAVASCRIPT</h1>
                      <h1>JAVA</h1>
                    </div>
                    <div className='main data'>
                      <h1>REACTJS</h1>
                    </div>
                    <div className='main tools'>
                      <h1>MYSQL</h1>
                    </div>
                    <div className='main framework'>
                      <h1>FIGMA</h1>
                      <h1>GIT</h1>
                    </div>
                </div>
            </div>
            
       
    );
};

export default Skill;
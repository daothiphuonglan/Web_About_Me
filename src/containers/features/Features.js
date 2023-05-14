import React from 'react';
import './features.css'
import {useState} from 'react'

const Features = ({title, text1, text2,text3,text} ) => {
    const [readMore, setReadMore]= useState(false)
    return (
        
            <div className='features-start'>
               <div className='features-title'>
                <h1>{title}</h1>
               </div>
               <div className='features-start-list'>
                <ul>
                    <li>{text1}</li>
                    <li>{text2}</li>
                    <li>{text3}</li>
                    
                </ul>
                <div className='features-text' >
                    <p>
                    {readMore ? text: `${text.substring(0,99)}....`}
                    
                    <button className='btn-open-close' onClick={()=>setReadMore(!readMore)}>
                        {readMore? 'Show less':'Read More'}
                    </button>
                </p>
                </div>
               </div>
            
            </div>
        
    );
};

export default Features;
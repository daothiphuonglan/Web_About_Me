import React from 'react';
import {RiDoubleQuotesL} from 'react-icons/ri'
import {RiDoubleQuotesR} from 'react-icons/ri'
import './addHeader.css'

const AddHeader = () => {
    return (
        <div>
            <div className='addHeader-content'>
           <RiDoubleQuotesL></RiDoubleQuotesL>
           
            <h1>Don't watch the clock, do what it does. Keep going.</h1>
            
            
            <RiDoubleQuotesR></RiDoubleQuotesR>

            <h2>Sam Levenson</h2>
            </div>
            
        </div>
    );
};

export default AddHeader;
import React from 'react';
import {FaTimes} from 'react-icons/fa'
import skill from './skill.css'
import { useGlobalContext } from '../contex';


const Modal = ({title}) => {
    const {isModalOpen,closeModal}= useGlobalContext()
    
    return (
        <div className={`${
          isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
        }`}>
          <div className='modal-container'>
            <h3>{title}</h3>
            <div className='max-level'>
               
            </div>
            <div className='level'></div>

            <button className='close-modal-btn' onClick={closeModal}>
                <FaTimes/>
            </button>
          </div>  
        </div>
    );
};

export default Modal;
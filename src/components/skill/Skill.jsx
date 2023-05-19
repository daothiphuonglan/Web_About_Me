import React from 'react';
import Modal from './Modal'
import skill from './skill.css'
import {GiCheckMark} from 'react-icons/gi'
import {useEffect, useState} from 'react'
import { useGlobalContext } from '../contex';
const Skill = () => {
  const {openModal,closeModal}= useGlobalContext()
    
    return (
        <div className='wrapper-skill'>
            <div className='wrapper-start'>
            <h2>My Skill</h2>
            <div className='wrapper-start-line'></div>
            </div>



                <div className='wrapper-content'>
                    <div className='main language'>
                      <button className='btn_ js' onClick={openModal} >JAVASCRIPT</button>
                      {/* start leve of js*/ }
                     <Modal title='Leve of Jvascript'></Modal>
                      {/* end leve of js*/ }
                      <button className='btn_ java'  onClick={openModal}>JAVA</button>
                      {/* start leve of js*/ }
                     <Modal title="Leve of Java"  ></Modal>
                      {/* end leve of js*/ }
                    </div>
                    <div className='main data'>
                       <button className='btn_ react' onClick={openModal}>REACTJS</button>
                      {/* start leve of js*/ }
                     <Modal title="Leve of Java"  ></Modal>
                      {/* end leve of js*/ }
                    </div>
                    <div className='main tools'>
                     <button className='btn_ MSQL' onClick={openModal}>MYSQL</button>
                     {/* start leve of js*/ }
                     <Modal title="Leve of Java"  ></Modal>
                      {/* end leve of js*/ }
                    </div>
                    <div className='main framework'>
                      <button className="btn_ figma" onClick={openModal}>FIGMA</button>
                      {/* start leve of js*/ }
                     <Modal title="Leve of Java"  ></Modal>
                      {/* end leve of js*/ }
                      <button className="btn_ git" onClick={openModal}>Git</button>
                      {/* start leve of js*/ }
                     <Modal title="Leve of git"  ></Modal>
                      {/* end leve of js*/ }
                    </div>
                </div>
            </div>
            
       
    );
};

export default Skill;
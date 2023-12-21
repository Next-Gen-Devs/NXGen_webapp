import React from 'react';
import Navbar from './Navbar';
import './Cover.css';
import OurVision from './OurVision';
import OurProjects from './OurProjects';
import OurTeam from './OurTeam';
import { FaArrowRight } from "react-icons/fa";
function Cover() {
    return (
        <>
        <div className="coverContainer">
        <Navbar/>
        <br />
        <br />
            <h1 className='cover-h1'>NextGen Developers <br /><p className='subtitle'>Turning Your Vision into Web Reality - Crafting Tailor-Made Web Apps to Exceed Your Expectations</p></h1>
            <div className='btnContainer'>
            <button className='getStarted-Btn'>Get Started <FaArrowRight /></button>
            </div>
            <br />
            <br />
            <br />
            <OurVision/>   
            <OurProjects/>
            <OurTeam/>
        </div>
        
        </>
    )
}

export default Cover;
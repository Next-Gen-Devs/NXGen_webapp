import React from 'react';
import Navbar from './Navbar';
import './Cover.css';
import OurVision from './OurVision';
import OurProjects from './OurProjects';
import OurTeam from './OurTeam';
function Cover() {
    return (
        <>
        <div className="coverContainer">
        <Navbar/>
            <h1 className='cover-h1'>NextGen Developers<p className='subtitle'>Turning Your Vision into Web Reality - Crafting Tailor-Made Web Apps to Exceed Your Expectations</p></h1>
            <br />
            <OurVision/>   
            <OurProjects/>
            <OurTeam/>
        </div>
        
        </>
    )
}

export default Cover;
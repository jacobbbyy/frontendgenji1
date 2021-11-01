import React from 'react';
import '../../App.css';
import './Roadmap.css';
import Discord from '../Discord';
import Footer from '../Footer';




function RoadMap() {
    return (
        <>
            <div className='roadmap'> 
            <div className='discords-item'>
             <Discord/>
             </div> 
             <div className='footer__item'>
              <Footer/> 
             </div>
         
            </div>
         
        </>
    );
}

export default RoadMap;

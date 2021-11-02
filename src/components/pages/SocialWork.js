import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import './SocialWork.css';
import Discord from '../Discord';
import Footer from '../Footer';

function SocialWork() {
    return (
        <>
           <div className='socialwork'>  
             <div className='page2--content'>
               <h1 >Gachapan:</h1>
             </div>
             <div className='discords---item'>
             <Discord/>
             </div> 
             <div className='footer___item'>
              <Footer/> 
             </div>

           </div> 
        </>
    );
}

export default SocialWork;

import React from 'react';
import './Home.css';
import Discord from '../Discord';
import Footer from '../Footer';
import HeroSection from '../HeroSection';



function Home() {
    return (
        <>
        <div className='home'> 
        <div className='discords--item'>
             <Discord/>
             </div> 
             <div className='footer_item'>
              <Footer/> 
             </div>
             
        </div> 
        </>
    );
}

export default Home;


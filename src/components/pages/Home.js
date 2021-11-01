import React from 'react';
import './Home.css';
import Border from '../Border';
import HeroSection from '../HeroSection';

function Home() {
    return (
        <>
        <div className='home'> 
            <Border>
            <HeroSection/>
            </Border>
             
        </div> 
        </>
    );
}

export default Home;


import React from 'react';
import '../components/Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
      
         <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <img src='image/logo-01.png'/>
     </section>
        
    </div>

  );
}

export default Footer;

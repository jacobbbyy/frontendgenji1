import React from 'react';
import '../components/Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
      
      <div class="footer__container">
        <div className='info-column'>
          <div className='blockmark--column'>
            <div className='logo-row'>
              <img src='/image/Logo_yellow-01.png' height='150px' width='400px'></img>
            </div>
            <p className='baseline'> HIGH RESOLUTION 3D COLLECTION OF 5555 NFTS </p>
          </div>
          <p className='copyright'>
           ©2021 GENJI. All rights reserved
          </p>
        </div>

        <div className='right-column'>
          <div className='nav-column'>
            <div class='footer-link-items'>
            <div className='link--home'>
            <Link to='/'>Home</Link>
            </div>
            <div className='link--terms'>
            <Link to='/'>Terms & Condition</Link>
            </div>
            <div className='link--contract'>
            <Link to='/'>Smart Contract</Link>
            </div>
            </div>
          </div>
        <div className='social-row'>
        <div className='social-icons'>
            <div className='twitter-logo'>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            </div>
            
            <div className='discord--logo'>
            <Link
              class='social-icon-link discord'
              to='/'
              target='_blank'
              aria-label='discord'
            >
              <i class='fab fa-discord' />
            </Link>
            </div>
          </div>
        </div> 
          </div>

        </div>
    

  );
}

export default Footer;

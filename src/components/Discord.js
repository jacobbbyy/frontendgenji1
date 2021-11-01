import React from 'react';
import '../components/Discord.css';
import { Button } from './Button';

function Discord() {
    return (
      
         <div className='discord--container'>
        <section className='discord-link'>
        <h2 className='discord-link-heading'>
          Join the Club!
        </h2>
        <p>Genji Discord just started and you are VERY EARLY! Join us now and be enter the
            Genji OG's club for mint priorities and extra benefits. We will be releasing sneak peaks
            and will be having multiple giveaways to thank our early supporters. Join us NOW and
            wagmi.</p>

            <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
            >
            Join Our Discord 
            </Button>
        </section>
        
    </div>

  );
}

export default Discord;
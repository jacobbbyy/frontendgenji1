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
               <h1 class="hero--heading">SOCIAL WORK:</h1>
               <p class="hero--description">Here at Genji we adore changes and hope to make a difference by changing how NFT’s
               benefit everyone including the non-NFT investors. Nft is what made us connect with each
               other here in this community and we would like to unite as ONE to make a difference in this
               world. By participating in the mint event of our nft, you are not just getting a masterpiece
               (which every trait is hand-drawn and electronically rendered to perfection), you will be
               funding the start up of SOL HELP FUNDS (SHF), a dream that we here at Genji’s want to
               achieve. 

              SHF is just a concept for now but every successful story starts with a concept. SHF aims to
              be the first NFT help fund that will assist in reducing hardships or disasters faced by the
              people. With the presence of a help fund, NFT projects in the solana blockchain will be able
              to pool up funds that were allocated to help the world and make a bigger difference together </p>

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

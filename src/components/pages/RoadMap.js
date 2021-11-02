import React from 'react';
import '../../App.css';
import './Roadmap.css';
import Discord from '../Discord';
import Footer from '../Footer';




function RoadMap() {
    return (
        <>
            <div className='roadmap'>   
               <div className='phase--container'>
              <div className='header-roadmap'>
              <h1>ROADMAP:</h1>
              <p>10% royalties will be imposed to the sale of Genji Nft, where 30% of the weekly royalties will 
                 be accumulated for the reinvestment to further develop Genji Nft utility. 50% of the weekly 
                 royalties will be distributed to the community wallet and holders will decide on what to do 
                 with the funds. 20% of the weekly royalties will be given to the Genji Dev team.</p>
                 <p>Holders of Genji Nft will enjoy early access to the next nft collections.</p>
                 <p> Click for more info</p>
                 
                  <div className='pre--phase'>
                   <h1>PRE-PHASE (Q3 2021)</h1>
                   <p>-Roadmap planning and artwork designs</p>
                   <p>-Dev team setting up discord, website and details on Genji</p>
                  </div>

                  <div className='phase--1'>
                  <h1>PHASE 1 (Q4 2021)</h1>
                  <p>-Open discord server to public and raise project presence</p>
                  <p>-Partnerships with solana projects and communities</p>
                  <p>-Sneak peaks of artwork and asking for community suggestions</p>
                  <p>-Implementing community suggestions on the project</p>
                  <p>-Mint day + secondary market listing</p>
                  </div>

                  <div className='phase--2'>
                  <h1>PHASE 2 (Q1 2022)</h1>
                   <p>-Start up the recruitment for Solana Help Fund members
                    (community vote & voluntary involvement of solana nft influencers)</p>
                   <p>-Begin with the setting up of Genji DAO</p>
                   <p>-Start working on Genji Merch</p>
                   <p>-Mysterious Airdrop to holders (more details later)</p>
                   <p>-Ongoing partnerships with community voted solana projects and communities</p>
                  </div>
                  
                  <div className='phase--3'>
                  <h1>PHASE 3 (Q2 2022)</h1>
                   <p>-First Solana Help Fund collaboration event </p>
                   <p>-Release of Genji Merch and sales of merch (50% of merch profit goes to Genji DAO)</p>
                   <p>-Increase future utility for Genji Nft (to be decided by Genji Dao)</p>
                   <p>-Official launch of Genji Nft online store</p>
                  </div>

              </div>

            </div>
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

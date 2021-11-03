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
              <p>The journey here at Genji begins with a range of community events such as fan art contest,
twitter giveaways, Easter egg events and many more. Events will be continuously hosted up
until mint day where 20% of profits will be placed in a Genji community wallet. Priority after
mint-day would be to obtain secondary market listings to enable Genji to be traded. A 5%
royalty fee will be imposed for every transaction made on secondary market listings and
collective funds would be stored inside a community wallet. Devs will also work on setting up
a DAO and enable holders of Genji to participate in the future developments through voting
in Genji DAO. Furthermore, holders will also enjoy a range of Genji Token airdrops that will
enable token collectors to spend it on our very own Genji Merch store, Gachapon or use as a
vote in community polls.</p>
                
                 
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
                   <p>-Use first day sales royalties to buyback and
                       giveaway Genji through community events</p>
                   <p>-Start work on Genji DAO</p>
                   <p>-Airdrop to holders (Genji Token)</p>
                   <p>-Ongoing partnerships with community voted solana projects and communities</p>
                  </div>
                  
                  <div className='phase--3'>
                  <h1>PHASE 3 (Q2 2022)</h1>
                   <p>-First collaboration event </p>
                   <p>-Genji Holders will get a mysterious airdrop compliments of Genji DAO</p>
                   <p>-Increase future utility for Genji Nft (to be decided by Genji community) </p>
                   <p>-Official launch of Genji Nft online store</p>
                  </div>

              </div>

            </div>
           
         
            </div>
         
        </>
    );
}

export default RoadMap;

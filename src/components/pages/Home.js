import React,{useState,useEffect} from 'react';
import './Home.css';
import Discord from '../Discord';
import Footer from '../Footer';


function Home() {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => setOffsetY(window.pageYOffset);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    },[]);

    return (
        <>
        <div className='home'> 
        <div class="hero" >
      <div class="hero__container" style={{ transform:'translateY(${ offsetY * 0.9})'}}/>
        
     </div>
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


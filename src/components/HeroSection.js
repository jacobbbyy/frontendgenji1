import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div class="hero" >
        <div class="hero__container">
          <h1 class="hero__heading">Choose your <span>colors</span></h1>
          <p class="hero__description">Unlimited Possibilities</p>
          <button class="main__btn"><a href="#">Explore</a></button>
        </div>
      </div>
    );
}

export default HeroSection;

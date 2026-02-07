import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import animationData from "../assets/hero-animation1.json";

const HeroAnimation = () => {
  return (
    <div className="w-full flex justify-center items-center overflow-visible">
      <div className="w-full transform scale-125 md:scale-135 transition-all duration-500">
        <DotLottieReact
        data={animationData} 
        loop
        autoplay
        style={{ width: '100%', height: '100%' }}
      />
      </div>
    </div>
  );
};

export default HeroAnimation;
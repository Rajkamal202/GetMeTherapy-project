// src/components/PostLoginScreen/TrackingScreen.jsx

import RandomQuote from "../RandomQuote/RandomQuote";
import { useState } from 'react';
import AnalogClock from "./AnalogClock";
import SpeedSlider from "./SpeedSlider";
import ShareButton from "./ShareButton";
import {UserButton } from "@clerk/clerk-react";

const TrackingScreen = () => {
  // State to control the speed of the clock
  const [speed, setSpeed] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-500 p-4">
    <div className="flex gap-3 p-3 mb-12 border border-solid border-orange-900 bg-red-700 font-serif shadow-2xl size-4rem rounded-xl cursor-pointer hover:size-5rem hover:border-transparent">
       <UserButton/>
    </div>
      {/* Title */}
      <h1 className="text-2xl font-bold text-white mb-4">Tracking Screen</h1>
      
      {/* Analog Clock Component */}
      <AnalogClock speed={speed} />
      
      {/* Speed Slider Component */}
      <SpeedSlider speed={speed} setSpeed={setSpeed} />
      
      {/* Share Button Component */}
      <ShareButton speed={speed} />
      
      {/* Random Quote Component (Optional) */}
      <RandomQuote />
     
    </div>
  );
};

export default TrackingScreen;


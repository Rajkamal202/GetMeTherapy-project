// src/components/PostLoginScreen/AnalogClock.jsx

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clockBackground from '../../assets/Clockbackground2.jpg'; // Make sure to place your image in this path

const AnalogClock = ({ speed }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => new Date(prevTime.getTime() - 1000 * speed));
    }, 1000);

    return () => clearInterval(interval);
  }, [speed]);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();
  
  const secondHandStyle = {
    transform: `rotate(${seconds * -6}deg)`,
  };

  const minuteHandStyle = {
    transform: `rotate(${minutes * -6}deg)`,
  };

  const hourHandStyle = {
    transform: `rotate(${(hours % 12) * -30 + (minutes / 2) * -1}deg)`,
  };

  return (
    <div className="relative w-64 h-64 bg-cover bg-center border-4 border-gray-300 rounded-full flex items-center justify-center" style={{ backgroundImage: `url(${clockBackground})` }}>
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="w-1/2 h-1 bg-gray-800 origin-bottom" style={hourHandStyle}></div>
      </div>
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="w-3/4 h-1 bg-gray-600 origin-bottom" style={minuteHandStyle}></div>
      </div>
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="w-7/8 h-1 bg-red-500 origin-bottom" style={secondHandStyle}></div>
      </div>
      <div className="absolute w-4 h-4 bg-black rounded-full"></div>
    </div>
  );
};

AnalogClock.propTypes = {
  speed: PropTypes.number.isRequired,
};

export default AnalogClock;




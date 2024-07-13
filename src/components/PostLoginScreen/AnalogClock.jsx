import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clockBackground from '../../assets/Clockbackground2.jpg'; // Import the clock background image

const AnalogClock = ({ speed }) => {
  const [time, setTime] = useState(new Date()); // Initialize state with the current time

  useEffect(() => {
    // Set up an interval to update the time every second
    const interval = setInterval(() => {
      // Update the time state to count down (anticlockwise)
      setTime((prevTime) => new Date(prevTime.getTime() - 1000 * speed));
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [speed]);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();
  
  // Style for the second hand, rotating counterclockwise
  const secondHandStyle = {
    transform: `rotate(${seconds * 6}deg)`,
    backgroundColor: 'red',
    width: '2px',
    height: '40%',
    position: 'absolute',
    bottom: '50%',
    transformOrigin: 'bottom center',
  };

  // Style for the minute hand, rotating counterclockwise
  const minuteHandStyle = {
    transform: `rotate(${minutes * 6}deg)`,
    backgroundColor: 'black',
    width: '4px',
    height: '35%',
    position: 'absolute',
    bottom: '50%',
    transformOrigin: 'bottom center',
  };

  // Style for the hour hand, rotating counterclockwise
  const hourHandStyle = {
    transform: `rotate(${(hours % 12) * 30 + (minutes / 2)}deg)`,
    backgroundColor: 'black',
    width: '6px',
    height: '25%',
    position: 'absolute',
    bottom: '50%',
    transformOrigin: 'bottom center',
  };

  return (
    <div
      className="relative w-64 h-64 bg-cover bg-center border-4 border-gray-300 rounded-full flex items-center justify-center"
      style={{ backgroundImage: `url(${clockBackground})` }} // Apply the background image
    >
      {/* Hour hand */}
      <div className="absolute w-full h-full flex items-center justify-center">
        <div style={hourHandStyle}></div>
      </div>
      
      {/* Minute hand */}
      <div className="absolute w-full h-full flex items-center justify-center">
        <div style={minuteHandStyle}></div>
      </div>
      
      {/* Second hand */}
      <div className="absolute w-full h-full flex items-center justify-center">
        <div style={secondHandStyle}></div>
      </div>
      
      {/* Center circle to match the clock design */}
      <div className="absolute w-4 h-4 bg-red-500 rounded-full"></div>
    </div>
  );
};

AnalogClock.propTypes = {
  speed: PropTypes.number.isRequired, // Prop validation for speed
};

export default AnalogClock;





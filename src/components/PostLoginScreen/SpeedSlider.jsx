// src/components/PostLoginScreen/SpeedSlider.jsx
import PropTypes from 'prop-types';

const SpeedSlider = ({ speed, setSpeed }) => {
  const handleSpeedChange = (e) => {
    setSpeed(Number(e.target.value));
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <label htmlFor="speed-slider" className="mb-2 text-lg font-semibold text-white">Adjust Speed</label>
      <input
        id="speed-slider"
        type="range"
        min="0.1"
        max="2"
        step="0.1"
        value={speed}
        onChange={handleSpeedChange}
        className="w-64"
      />
    </div>
  );
};

SpeedSlider.propTypes = {
  speed: PropTypes.number.isRequired,
  setSpeed: PropTypes.func.isRequired,
};

export default SpeedSlider;



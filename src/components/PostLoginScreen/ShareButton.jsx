import PropTypes from 'prop-types';

const ShareButton = ({ speed }) => {
  const generateShareURL = () => {
    const url = `${window.location.origin}/tracking?speed=${speed}`;
    navigator.clipboard.writeText(url);
    alert('URL copied to clipboard!');
  };

  return (
    <button
      onClick={generateShareURL}
      className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      Share
    </button>
  );
};

ShareButton.propTypes = {
  speed: PropTypes.number.isRequired,
};

export default ShareButton;






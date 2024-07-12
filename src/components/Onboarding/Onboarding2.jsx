
import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/bgimage.png';

const Onboarding2 = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-orange-500 bg-opacity-75 p-6 rounded-3xl text-center text-white max-w-sm mx-4">
        <h1 className="text-3xl font-bold">We serve incomparable delicacies</h1>
        <p className="mt-4 text-lg">
        Savor every bite of our chef&apos;s specialties. The best dishes are waiting for you!
        </p>
        <div className="flex justify-between mt-8 w-full">
          <button className="text-white cursor-pointer" onClick={() => navigate('/onboarding3')}>
            Skip
          </button>
          <button className="text-white cursor-pointer animate-bounce" onClick={() => navigate('/onboarding3')}>
            Next &rarr;
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <div className="bg-white w-5 h-1 rounded-full mx-1 opacity-50 "></div>
          <div className="bg-white w-5 h-1 rounded-full mx-1"></div>
          <div className="bg-white w-5 h-1 rounded-full mx-1 opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding2;
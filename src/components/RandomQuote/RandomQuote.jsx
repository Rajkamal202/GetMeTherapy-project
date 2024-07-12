// src/components/RandomQuote.jsx

import { useEffect, useState } from 'react';

const RandomQuote = () => {
  // State to store the current quote
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
    };

    fetchQuote();
    // Fetch a new quote every 5 seconds
    const interval = setInterval(fetchQuote, 5000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4 p-4 bg-gray-200 rounded shadow">
      <p className="text-center italic">"{quote}"</p>
    </div>
  );
};

export default RandomQuote;


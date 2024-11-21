import React, { useState, useEffect } from 'react';

const slides = [
  {
    heading: 'Slide 1',
    image: 'https://via.placeholder.com/150',
    name: 'Name 1'
  },
  {
    heading: 'Slide 2',
    image: 'https://via.placeholder.com/150',
    name: 'Name 2'
  },
  {
    heading: 'Slide 3',
    image: 'https://via.placeholder.com/150',
    name: 'Name 3'
  },
  {
    heading: 'Slide 4',
    image: 'https://via.placeholder.com/150',
    name: 'Name 4'
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto p-4">
      <div className="overflow-hidden rounded-lg shadow-lg h-64 relative">
        <div
          className="absolute w-full h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateY(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-64 flex flex-col items-center justify-center p-4 bg-white">
              <h2 className="text-2xl font-bold mb-2">{slide.heading}</h2>
              <img src={slide.image} alt={slide.name} className="mb-4" />
              <p className="text-lg">{slide.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <button onClick={handlePrev} className="bg-blue-500 text-white p-2 rounded-full">
          &#9664;
        </button>
        <button onClick={handleNext} className="bg-blue-500 text-white p-2 rounded-full">
          &#9654;
        </button>
      </div>
      <div className="absolute bottom-4 transform p-2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;

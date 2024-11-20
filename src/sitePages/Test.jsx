import React, { useState, useEffect } from 'react';

const ScrollArrows = () => {
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      console.log(windowHeight);
      console.log(scrollPosition);
      console.log(documentHeight);
      // Determine when to show arrows
      if (scrollPosition === 0) {
        setShowUpArrow(false);
        setShowDownArrow(true);
      } else if (scrollPosition > (windowHeight/1.5)) {
        setShowUpArrow(true);
        setShowDownArrow(false);
      } else {
        setShowUpArrow(true);
        setShowDownArrow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Content to scroll */}
      <div className="py-20">
        <h1 className="text-4xl text-center mb-20">Scroll Down</h1>
        <p className="text-center mb-96">Keep scrolling to see the effect...</p>
        <h2 className="text-3xl text-center mt-96 mb-20">You're in the middle!</h2>
        <p className="text-center mb-96">Scroll some more...</p>
        <h1 className="text-4xl text-center mt-96">End of the Page</h1>
      </div>

      {/* Scroll arrows */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-50">
        {showUpArrow && (
          <button onClick={scrollToTop} className="animate-bounce bg-blue-500 text-white p-2 rounded-full">
            ▲
          </button>
        )}
        {showDownArrow && (
          <button onClick={scrollToBottom} className="animate-bounce bg-blue-500 text-white p-2 rounded-full">
            ▼
          </button>
        )}
      </div>
    </div>
  );
};

export default ScrollArrows;

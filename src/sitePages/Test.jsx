import React from 'react';

const Test = () => {
  return (
    <div className="relative w-full h-screen bg-gray-200 flex items-center justify-center">
      <div className="relative w-3/4 h-3/4 bg-white shadow-lg p-4">
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1/2 bg-blue-500 p-2 rounded">
          <p className="text-white text-center">Top Positioned Div</p>
        </div>
        <div className="mt-16 p-4">
          <h1 className="text-2xl font-bold">Main Content</h1>
          <p>This is the content of the larger div. The smaller div is positioned at the top.</p>
        </div>
      </div>


      <div style={{
                    backgroundImage: `url(${streamlineImg}),`, backgroundSize: 'cover', backgroundPosition: 'center', height: '520px', backgroundRepeat: 'no-repeat'}}
                    className="rounded-2xl text-white p-12 text-center space-y-4 w-3/4">
                    <h3 className="mt-12">Why Choose FBA Finance?</h3>
                    <p>Unlock growth opportunities, amplify your impact, and connect with a supportive network</p>
                    <div className="flex pt-8">
                        <div className="flex flex-col items-center justify-center">
                            <img src={bankHouse} alt="house-img" />
                            <p>Access to flexible funding</p>
                            <p>Access capital without traditional banking hurdles.</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img src={communityShield} alt="shield-img" />
                            <p>Access to flexible funding</p>
                            <p>Access capital without traditional banking hurdles.</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img src={solutions} alt="calcultor-img" />
                            <p>Access to flexible funding</p>
                            <p>Access capital without traditional banking hurdles.</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img src={rocket} alt="rocket-img" />
                            <p>Access to flexible funding</p>
                            <p>Access capital without traditional banking hurdles.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className='flex bg-white text-FBA-dark-text  px-4 py-2 rounded-full w-fit transform transition duration-300 ease-in-out hover:scale-110 cursor-pointer'>Find Out More</p>
                    </div>
                </div>
    </div>
  );
};

export default Test;




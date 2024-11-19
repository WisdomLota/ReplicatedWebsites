import React, { useEffect, useRef } from 'react'
import hondaPOD from "../assets/hondaAssets/hondaPOD.png";
import CarVid from "../assets/hondaAssets/CarVid.mp4";
import MotorCyclesVid from "../assets/hondaAssets/MotorCyclesVid.mp4";
import hondaCar from "../assets/hondaAssets/hondaCar.jpeg";

const hondaCyprus = () => {

  const elements = useRef([]); 
  const observer = useRef(null); 
  useEffect(() => 
    { observer.current = new IntersectionObserver( 
      (entries) => { entries.forEach((entry) => { 
        if (entry.isIntersecting) { entry.target.classList.add('animate-fade-up'); } else { entry.target.classList.remove('animate-fade-up'); 

        } 
      }); 
    }, { threshold: 0.1 } ); 
    elements.current.forEach((element) => { if (element) observer.current.observe(element); }); 
    return () => { if (observer.current) { observer.current.disconnect(); } }; }, []);

  return (
    <body>
      <header>

        <div className="flex justify-center mb-8 mt-4">
          <img src={hondaPOD} alt="honda-power" className="w-36 h-16 mr-16"/>
          <div className="flex space-x-8 pt-4 font-semibold">
            <p>Cars</p>
            <p>Motorcycles</p>
            <p>Book Service</p>
            <p>Press Releases</p>
            <p>Pricelist</p>
            <p>Contact Us</p>
          </div>
        </div>

      </header>

      <main>

        <div className="flex">
          <div>
            <video autoPlay loop muted>
              <source src={CarVid} type="video/mp4"/>
            </video>
            <p className="justify-center text-center text-4xl text-white bg-black p-4">Cars</p>
          </div>

          <div>
            <video autoPlay loop muted>
              <source src={MotorCyclesVid} type="video/mp4"/>
            </video>
            <p className="justify-center text-center text-4xl text-white bg-black p-4">Motorcycles</p>
          </div> 
        </div>

        <div style={{
          backgroundImage: `url(${hondaCar})`, height: '720px', backgroundSize: 'cover', backgroundPosition: 'center',
        }} className=" opacity-0 animate-fade-up">

          <div className="float-end w-1/3 text-white h-full bg-black bg-opacity-40 flex flex-col justify-center px-12 space-y-4">
            <h2 className="text-4xl opacity-0 mt-4 animate-fade-up" ref={(el) => (elements.current[0] = el)}>All-new Civic e:HEV - <br />the driver's hybrid</h2>
            <p className="font-semibold opacity-0 animate-fade-up mt-4" ref={(el) => (elements.current[1] = el)}>Self-charging, full hybrid hatchback that complements the Civic's 
              legendary dynamics, design and technology with exhilarating, electricfied  power.</p>
            <p className="font-bold opacity-0 mt-4 animate-fade-up" ref={(el) => (elements.current[2] = el)}>Launching autumn 2022.</p>
            <p className="text-white bg-orange-500 border-none w-2/5 p-2 rounded-sm text-center font-semibold opacity-0 mt-4 animate-fade-up" 
            ref={(el) => (elements.current[3] = el)}>DISCOVER MORE</p>
          </div>
          
        </div>
      </main>
    </body>
  )
}

export default hondaCyprus
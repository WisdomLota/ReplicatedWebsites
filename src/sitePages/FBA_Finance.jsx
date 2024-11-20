import { useState, useEffect } from "react";
import FBA_Logo from "../assets/FBA_FinanceAssets/FBA_FinanceLogo.svg";
import forwardArrow from "../assets/FBA_FinanceAssets/forwardArrow.svg";
import videoGuide from "../assets/FBA_FinanceAssets/FBA_Finance_Revolutionizing_Capital_Access_for_African_SMEs.mp4";
import bankHouse from "../assets/FBA_FinanceAssets/asset 2.svg";
import communityShield from "../assets/FBA_FinanceAssets/asset 3.svg";
import solutions from "../assets/FBA_FinanceAssets/asset 4.svg";
import rocket from "../assets/FBA_FinanceAssets/asset 5.svg";
import streamlineImg from "../assets/FBA_FinanceAssets/streamlineImg.svg";
import "../styles/fba.css";

const FBA_Finance = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <body className="bg-FBA-pink-100 bg-opacity-5 text-FBA-dark-text">
        
        <header className={`sticky top-0 z-50 ${isScrolled ? 'py-8 bg-FBA-pink-100 bg-opacity-10 backdrop-blur-sm' : 'py-4'}`}>
            <nav className="flex items-center justify-evenly shadow-sm transition-all duration-300">
                <div className={`transition-all duration-300 ${isScrolled ? "mr-80": ""}`}>
                    <img src={FBA_Logo} alt="FBA_Finance Logo" />
                </div>

                <ul className={`flex space-x-4 font-semibold p-4 rounded-full ${isScrolled ? 'bg-white': ''}`}>
                    <li><p>About Us</p></li>
                    <li><p>How it works</p></li>
                    <li><p>Documentation</p></li>
                    <li><p>Contact</p></li>
                </ul>  

                <div className={`flex-shrink-0 transition-all duration-300 ${isScrolled ? 'ml-80' : ''}`}>
                    <p className='flex bg-FBA-purple text-white px-4 py-2 rounded-full w-fit transform transition duration-300 ease-in-out hover:scale-110 cursor-pointer'> Get Early Access &nbsp; 
                    <img src={forwardArrow} alt="arrow" className="w-6 mt-0.5"/></p>
                </div>
            </nav>
        </header>

        <main className='min-h-screen'>

            <section className="mt-12 flex items-center justify-center mx-auto space-x-4 mb-8">
                <div className="fixed inset-0 flex items-center justify-center z-0 pointer-events-none"> 
                    <div className="w-2/5 h-1/3 bg-gradient-to-r from-FBA-blue to-FBA-pink-200 rounded-full blur-2xl opacity-30">
                    </div> 
                </div>
                <div className="w-5/12 space-y-4 z-10">
                    <p className="border border-gray-300 text-gray-700 rounded-full px-4 py-1 w-fit font-semibold text-sm mt-4">Welcome to FBA &nbsp;
                        <span className="bg-gradient-to-r from-FBA-purple-200 to-FBA-pink-200 bg-clip-text text-transparent">Fina</span>
                        <span className="bg-gradient-to-r from-red-300 to-FBA-purple bg-clip-text text-transparent">nce</span></p>
                    <h2 className="text-6xl font-bold">Empowering Your Financial Future.</h2>
                    <p className="font-semibold text-lg border-l-4 border-FBA-purple-100 border-opacity-40 px-2">Unlock the power of community-driven, blockchain-based <br />
                         financing for your small business or startup.</p>
                    <p className="font-thin text-lg">Get early access to our platform</p>
                    <p className='flex bg-FBA-purple text-white px-4 py-2 rounded-full w-fit transform transition duration-300 ease-in-out hover:scale-110 cursor-pointer'> Get Early Access &nbsp; 
                    <img src={forwardArrow} alt="arrow" className="w-6 mt-0.5"/></p>
                    <p className="font-light text-sm opacity-90">Be one of the first to know and get early access to out platform</p>
                </div>
                <div className="w-4/12 z-10">
                    <video autoPlay loop muted className="border-black rounded-lg">
                        <source src={videoGuide} type="video/mp4"/>
                    </video>
                </div>
            </section>

            <section className="mt-28 mb-12">
                <div className="flex flex-col items-center justify-center mx-auto space-x-4">

                    <div className="bg-FBA-pink-200 border-dashed text-center w-6/12 px-6 py-4 border-white border-4 space-y-2 custom-rounded-corners z-30">
                        <h3 className="text-3xl font-bold"><span className="text-4xl px-4 text-FBA-purple-100">|</span>Who are we?</h3>  
                        <p className="font-semibold pb-4">At FBA Finance, our mission is to revolutionize the way businesses access funding. 
                            We believe that every entrepreneur deserves a chance to thrive, and we're dedicated to providing innovative, 
                            accessible, and collaborative funding solutions that empower businesses to achieve their full potential.</p>
                    </div>

                    <div style={{backgroundImage: `url(${streamlineImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
                    className="rounded-2xl text-white p-12 text-center space-y-4 w-3/4 -mt-12 z-20">
                        <h3 className="pt-12 text-4xl">Why Choose FBA Finance?</h3>
                        <p className="text-xl">Unlock growth opportunities, amplify your impact, and connect with a supportive network</p>
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex pt-8 space-x-4">
                                <div className="flex flex-col items-center justify-center w-1/4">
                                    <img src={bankHouse} alt="house-img" />
                                    <p className="text-lg">Access to flexible funding</p>
                                    <p className="text-sm">Access capital without traditional banking hurdles.</p>
                                </div>
                                <div className="flex flex-col items-center justify-center w-1/4">
                                    <img src={communityShield} alt="shield-img" />
                                    <p className="text-lg">Collaborative Community</p>
                                    <p className="text-sm">Leverage the power of community funding through our innovative ROSCA model.</p>
                                </div>
                                <div className="flex flex-col items-center justify-center w-1/4">
                                    <img src={solutions} alt="calcultor-img" />
                                    <p className="text-lg">Tailored Solutions</p>
                                    <p className="text-sm">Benefit from personalized funding options, designed to meet your unique business needs.</p>
                                </div>
                                <div className="flex flex-col items-center justify-center w-1/4">
                                    <img src={rocket} alt="rocket-img" />
                                    <p className="text-lg">0% interest growth loans</p>
                                    <p className="text-sm">Empowering SMEs to reach their full potential through affordable funding and collaboration opportunities.</p>
                                </div>
                            </div>
                            <p className='flex bg-white text-FBA-dark-text font-semibold  px-16 py-2 rounded-full w-fit transform transition duration-300 ease-in-out hover:scale-110 cursor-pointer mt-8'>Find Out More</p>
                        </div>        
                    </div>

                </div>   
            </section>

        </main>
    </body>
  )
}

export default FBA_Finance
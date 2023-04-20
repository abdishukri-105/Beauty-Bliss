import React from 'react'
import { Link } from "react-router-dom";
import landingImage from"../images/landingpage.jpg"

function LandingPage() {
    return (
        <div className="min-h-screen py-12">
            <div className="container">
            <div className="flex flex-row ">
            {/* Content */}
            <div className="absolute flex flex-col items-center p-0 text-black left-4 right-[53.96%] top-[2 gap-8">
            <h1 className="text-6xl font-bold h-20 sm:h-[84px] w-full font-['Poppins']">
                Cosmetics that
            </h1>
            <div className="flex-col items-start p-0 font-normal w-full sm:w-full h-48 sm:h-1/2 gap-8 ">
            <h2 className='Poppins text-5xl italic h-[75px] w-[514px]'>
                Everyone loves!
            </h2>
            <p className="text-2xl h-[10rem] sm:w-[30rem]">
                "Elevate your beauty game with our premium cosmetics. Shop now and indulge in the ultimate beauty experience!"
                <br />
                <br />
            </p>

            <Link to= "/products">
            <button className=' px-12 py-19 w-[329px] h-[70px] text-4xl text-black font-semibold rounded-[32px] bg-pink bg-pink-300 hover:transparent focus:outline-none '>
    
                Shop Now {">"}
            </button>
          </Link>
            </div>

            </div>
            {/* Content */}

            <img 
            className=" absolute w-[460px] left-[860px] right-[5.56%] top-[140px] bottom-[26.73%] drop-shadow-lg backdrop-blur-[4px] h-[460px] rounded-[30px]" 
            src={landingImage}
            alt="landing page"/>
            </div>
            </div>

        </div>

    )
}

export default LandingPage




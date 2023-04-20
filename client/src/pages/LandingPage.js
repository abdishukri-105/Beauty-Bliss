import React from 'react'
import { Link } from "react-router-dom";
import landingImage from"../images/landingpage.jpg"

function LandingPage() {
    return (
   <div className="min-h-screen py-1">
     
       <div className="flex justify-around  ">
            {/* Content */}
        <div className=" col-span-4 flex flex-col items-center p-0 text-black left-4 right-[53.96%] top-[2 gap-8">
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
                <Link to= "/product-list">
                    <button className=' px-12 py-19 w-[90%] sm:w-[25rem] h-[70px]  text-4xl text-white font-semibold rounded-[32px]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 bg-pink hover:bg-pink-600 duration-300 '>
                        Shop Now {">"}
                    </button>
                </Link>
            </div>
        </div>
            {/* Content */}
         <div className='col-span-4 '>
            <img  className='h-auto w-96 rounded-2xl drop-shadow-lg backdrop-blur-[4px]'
            // className=" absolute w-[460px] left-[860px] right-[5.56%] top-[140px] bottom-[26.73%] drop-shadow-lg backdrop-blur-[4px] h-[460px] rounded-[30px]" 
            src={landingImage}
            alt="landing page"/>
        </div>
        </div>
      </div>
   

    )
}

export default LandingPage




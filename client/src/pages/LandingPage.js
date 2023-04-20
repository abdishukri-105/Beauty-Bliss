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
                    <button className=' px-12 py-19 w-[90%] sm:w-[25rem] h-[70px] text-4xl text-white font-semibold rounded-[32px]  transition ease-in-out delay-150 bg-pink hover:-translate-y-1 hover:scale-110 hover:bg-pink-600 duration-300 '>
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

// className={`absolute bottom-0 flex flex-col items-start p-0 font-bold w-[329px] h-[397.27667236328125px] left-[73px] right-[72.08%] top-[647.8213500976562px] gap-[31.76px] font-['Roboto']`}
// >
//   <div className="pr-12 flex items-start text-white pt-[19.81536865234375px] pb-[19.81536865234375px] w-[329px] h-[104.29141235351562px] pl-[54px] bg-[rgba(232,160,191,1)] rounded-[32px]">
//     <div className="gap-2.5 flex items-start p-2.5 w-[227px] h-[64.66067504882812px]">
//       <p className="text-4xl w-[165px] h-[42px]">Shop Now</p>
//       <Vector2 />
//     </div>
//   </div>
//   <div className="w-[282px] h-[147.52940368652344px] drop-shadow-lg backdrop-blur-[4px] mt-[45.05387878417969px] rounded-[30px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/345405e0e23a5d19e13378233d9160dc249fd2df.webp)_center_/_cover]" />
//   <p className="h-[36.882354736328125px] w-[97px] text-[15px] leading-[normal] text-[rgba(107,104,104,1)]">
//     Makeup brush
//     <br />
//   </p>
// </div>


import React from 'react'
import { Link } from "react-router-dom";
import landingImage from"../images/landingpage.jpg"

function LandingPage() {
    return (
        <div className="App  m-20">
            <div className="container">
            <div className="flex flex-row ">
            {/* Content */}
            <div className="absolute flex flex-col items-center p-0 text-black w-[552px] h-[340px] left-[82px] right-[53.96%] top-[240.921875px] bottom-[44.43%] gap-[7.21px]">
            <h1 className="text-6xl font-bold h-[84px] w-[582px] font-['Poppins'] ">
                Cosmetics that
            </h1>
            <div className="flex-col items-start p-0 font-normal w-[571px] h-[248.9326171875px] gap-[46.28px]">
            <h2 className='Poppins text-5xl italic h-[75px] w-[514px]'>
                Everyone loves!
            </h2>
            <p className="text-2xl h-[127.5634765625px] w-[571px]">
                "Elevate your beauty game with our premium cosmetics. Shop now and indulge in the ultimate beauty experience!"
                <br />
                <br />
            </p>
            <Link to= "/product-list">
            <button className=' px-12 py-19 w-[329px] h-[70px] text-4xl text-white font-semibold rounded-[32px] bg-pink hover:bg-pink-300 hover:transparent focus:outline-none '>
                Shop Now {">"}
            </button>
          </Link>
            </div>
            {/* <div className="absolute bottom-0 flex flex-col items-start p-0 font-bold w-[330px] h-[400px] left-[0px] right-[72.08%] top-[400px] gap-[32px] font-['Roboto']">

            <div className="w-[282px] h-[150px] drop-shadow-lg backdrop-blur-[4px] mt-[45px] rounded-[30px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/345405e0e23a5d19e13378233d9160dc249fd2df.webp)_center_/_cover]" />
            <p className="h-[37 px] w-[97px] text-[15px] leading-[normal] text-[rgba(107,104,104,1)]">
                Makeup brush
                <br />
            </p>
            </div> */}
            {/* <div className="w-[282px] h-[150px] drop-shadow-lg backdrop-blur-[4px] mt-[45px] rounded-[30px] [https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/1e838efdfa2a22e322fdca83427de4a5f7bcf77d.webp)_center_/_cover]">
            <p className="h-[37 px] w-[97px] text-[15px] leading-[normal] text-[rgba(107,104,104,1)]">
                Massage Jade roller
            <br />
            </p>

            </div> */}
            <div className="absolute bottom-0 flex flex-row items-start p-0 font-bold w-[660px] h-[400px] left-[0px] right-[72.08%] top-[400px] gap-[120px] font-['Roboto']">
            <div className="w-[282px] h-[150px] drop-shadow-lg backdrop-blur-[4px] mt-[45px] rounded-[30px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/345405e0e23a5d19e13378233d9160dc249fd2df.webp)_center_/_cover]">
                <p className="h-[37px] w-[97px] text-[15px] leading-[normal] text-[rgba(107,104,104,1)]">
                    Makeup brush
                    <br />
                </p>
            </div>
            <div className="w-[282px] h-[150px] drop-shadow-lg backdrop-blur-[4px] mt-[45px] rounded-[30px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/1e838efdfa2a22e322fdca83427de4a5f7bcf77d.webp)_center_/_cover]">
             <div className="gap-2.5 flex items-start p-2.5 w-[227px] h-[64.66067504882812px]">
                <p className="h-[37px] w-[97px] text-[15px] leading-[normal] text-[rgba(107,104,104,1)]">
                    Massage Jade roller
                    <br />
                </p>
            </div>

            </div>
            </div>

            </div>
            {/* Content */}

            <img className=" absolute w-[460px] left-[860px] right-[5.56%] top-[140px] bottom-[26.73%] drop-shadow-lg backdrop-blur-[4px] h-[460px] rounded-[30px]" 
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


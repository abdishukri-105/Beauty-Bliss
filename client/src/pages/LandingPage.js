import React from 'react';
import { Link } from 'react-router-dom';
import landingImage from '../images/landingpage.jpg';

function LandingPage() {
  return (
    <main className=" py-1">
      <div className="grid grid-cols-2 mt-10 ml-20 mr-20 mb-20">
        {/* Content */}
        <div className=" flex flex-col items-center p-0 text-black left-4 right-[53.96%] top-[2 gap-8">
          <h1 className="text-5xl font-bold h-8  w-full font-['Poppins']">
            Cosmetics that
          </h1>
          <div className="flex-col items-start p-0 font-normal w-full sm:w-full h-48 sm:h-1/2 gap-8">
            <h2 className="Poppins text-2xl italic h-16 w-[514px]">
              Everyone loves!
            </h2>
            <p className="text-2xl h sm:w-[30rem]">
              "Elevate your beauty game with our premium cosmetics. Shop now and indulge in the ultimate beauty experience!"
              <br />
              <br />
            </p>
            <Link to="/products">
              <button className="px-10 py-4   text-2xl text-white font-semibold rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-pink hover:bg-pink-600 duration-300">
                Shop Now 
              </button>
            </Link>
          </div>
        </div>
        {/* Content */}
        <div className=" h-[27rem] w-full rounded-2xl" style={{ backgroundImage: `url(${landingImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
      </div>
    </main>
  );
}

export default LandingPage;

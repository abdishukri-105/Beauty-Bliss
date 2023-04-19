import React from 'react'
import Search from './Search'
import ShoppingCart from './ShoppingCart'
import User from './User'
import { Link } from "react-router-dom";
function Navbar() {
    return (
  <nav className="w-full shadow-lg hover:cursor-pointer">
   
      <div className=" flex justify-around py-4 shadow-sm  ">
        <Link to='/'  className=" text-black font-bold text-3xl  hover:text-pink font-['Poppins'] ">
          Beauty Bliss
        </Link>
        <div className='flex justify-between'>
          <div className="flex justify-between mt-2 mr-10 text-black hover:text-white ">
            <div> <ShoppingCart /></div>
          </div>
          <div className="gap-2 flex items-center    text-[rgba(51,51,51,1)]">
            <User />
            <p className="text-lg ">
              Log In
            </p>
          </div>
         </div>
      </div>

  </nav>
    )
}

export default Navbar

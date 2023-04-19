import React from 'react'
import Search from './Search'
import ShoppingCart from './ShoppingCart'
import User from './User'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
      <nav className="">
      <div className="h-32 pt-8 bg-white flex items-start w-[1440px] pb-[49px] pl-[41px] pr-[73px]">
      <div className="flex items-center p-0 w-[1326px] h-[47px] gap-[600px]">
        <p className="font-bold text-black h-[47px] w-[223px] font-['Poppins'] text-[30px]">
          Beauty Bliss
        </p>
        <div className="flex items-start p-0 font-normal w-[504px] h-[34px] gap-[52px] font-['Taviraj']">
          <div className="flex items-center p-0 text-black w-[366px] h-[34px] gap-[49px]">
            <div className="gap-49px flex flex-col items-start p-0 w-[200px] h-[34px]">
              <p className="text-lg h-[31px] w-[57px] tracking-[0.02em]">
                search
              </p>
              <div className="h-0.5 w-[200px] outline outline-1 " />
            </div>
            <Search /> 
            <Link to="/checkout">
            <ShoppingCart /> 
            </Link>
            <Link>
          <div className="gap-2 flex items-center p-0 w-[86px] h-[31px] text-gray-900">
            <User />
            <p className="text-lg h-[31px] w-[54px] tracking-[0.02em]">
              Log In
            </p>
          </div>
          </Link>
          </div>
        </div>
      </div>
    </div>

        </nav>
    )
}

export default Navbar

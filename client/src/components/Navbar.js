import React from 'react'
// import Search from './Search'
// import ShoppingCart from '../pages/ShoppingCart'
import User from './User'
// import ProductPage from '../pages/ProductPage'
// import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function Navbar({}) {


    return (
  <nav className="w-full shadow-lg hover:cursor-pointer">
   
      <div className=" flex justify-around py-4 shadow-sm  ">
        <Link to='/'  className=" text-black font-bold text-3xl  hover:text-pink font-['Poppins'] ">
          Beauty Bliss
        </Link> 
        <div className='flex justify-between'>
          <div className="flex justify-between mt-2 mr-10 text-black hover:text-pink ">
            <Link className='mr-8 font-semibold' to="/products"> products </Link>
            {/* <Link to="/checkout"> <ShoppingCart /> </Link>  */}
            <Link  to="/order"  passHref >
                <a className=" relative" aria-label="cart">
                  <FontAwesomeIcon className="text-palette-primary w-6 m-auto" icon={faShoppingCart} />
                </a>
             </Link> 
          </div>
       
          <div className="gap-2 flex items-center    text-[rgba(51,51,51,1)]">
            <Link to="/login">
            <User />
            {/* <p className="text-lg ">
              Log In
            </p> */}
            </Link>
          </div>

         </div>

      </div>

  </nav>
    )
}

export default Navbar


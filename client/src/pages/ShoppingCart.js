import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import Receipt from "./Receipt"

function ShoppingCart({ cartItems, handleQuantityChange, handleDeleteItem, handleCheckout }) {
  
console.log(cartItems);

  return (
    <div>
      <div className="text-center text-2xl mt-5 ">
      <Link to="/products"><button className="border rounded-2xl py-2 px-4">back to all products</button>   </Link> 
      </div>
    <div className="min-h-80 max-w-4xl p-5 my-4 sm:my-8 mx-auto w-full shadow-lg rounded-md bg-pink-50" >
      <h1 className='text-center text-2xl uppercase font-bold underline italic mb-3'>your cart</h1>
        <table className="mx-auto">
          <thead>
            <tr className="uppercase text-xs sm:text-sm text-black border-b border-palette-light">
                {/* <th className="font-primary font-normal px-6 py-4">Item</th>
                <th className="font-primary font-normal px-6 py-4">image</th>
                <th className="font-primary font-normal px-6 py-4">Quantity</th>
                 <th className="font-primary font-normal px-6 py-4">Delete</th>
                <th className="font-primary font-normal px-6 py-4 hidden sm:table-cell">Price</th>
                <th className="font-primary font-normal px-6 py-4">Subtotal</th> */}
               
            </tr>
          </thead>
          <tbody>
            {cartItems.length > 0 ? 
                cartItems.map((item, index) => (
                    <tr key={index} className="text-black border-b border-palette-light">
                        <td className="font-primary font-normal px-6 py-4">{item.name}</td>
                         <td className='px-6 py-4' ><img className='h-10 w-10 rounded-md' src={item.image} alt="product" /></td>
                        <td className="font-primary font-normal px-6 py-4">
                          <input type="number" min="1" value={item.quantity} onChange={(e) => handleQuantityChange(e.target.value, item)} />
                        </td>
                        <td className="font-primary font-normal px-6 py-4"><button onClick={() => handleDeleteItem(item)}> <FontAwesomeIcon icon={faDeleteLeft}/></button></td>
                        <td className="font-primary font-normal px-6 py-4 hidden sm:table-cell">{item.price}</td>
                        <td className="font-primary font-normal px-6 py-4">{item.quantity * item.price}</td>
                    </tr>
                )) :
                <tr>
                    <td colSpan="5" className="text-center py-4 text-red-600 text-3xl font-bold">No items in cart</td>
                </tr>
            }
            {cartItems.length > 0 &&
              <tr>
                <td colSpan="4"></td>
                <td className='text-bold text-xl uppercase font-serif'>total:</td>
                <td className="font-primary  px-6 py-4 font-semibold"> {cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}</td>
                <td></td>
              </tr>
            }
          </tbody>
        </table>
{/* 
        {showReceipt ? <Receipt cartItems={cartItems} setShowReceipt={setShowReceipt} /> : (
      <div className="min-h-80 max-w-4xl p-5 my-4 sm:my-8 mx-auto w-full rounded-md bg-pink-50">
        ...
        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 font-primary font-bold uppercase text-dark bg-pink-200 rounded-md hover:bg-palette-light transition-colors duration-300" onClick={() => setShowReceipt(true)}>Checkout</button>
        </div>
      </div>
    )} */}

        <div className="flex justify-end mt-4">
          <button  onClick={handleCheckout}
          className="px-4 py-2 font-primary font-bold uppercase text-dark bg-pink-200 rounded-md hover:bg-palette-light transition-colors duration-300">Checkout</button>
        </div>
       
    </div>

      
  </div>
  )
  
}

export default ShoppingCart;
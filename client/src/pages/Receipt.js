import React from 'react';
import { Link } from "react-router-dom";

function Receipt({ cartItems,  formData, handleConfirm  }) {
    console.log(cartItems)

    console.log(formData)

  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  return (
    <div className="min-h-80 max-w-4xl p-5 my-4 sm:my-8 mx-auto w-full shadow-lg rounded-md bg-pink-50">
      <h1 className="text-center text-2xl uppercase font-bold underline italic mb-3">Receipt</h1>
      <div className='bg-gray-50 justify-around flex'>
        <p> {formData.name}</p>
        <p>{formData.address}</p>
        <p>{formData.phoneNumber}</p>
      </div>
      <table className="mx-auto">
        <thead>
          <tr className="uppercase text-xs sm:text-sm text-black border-b border-palette-light">
            <th className="font-primary font-normal px-6 py-4">Item</th>
            <th className="font-primary font-normal px-6 py-4">Quantity</th>
            <th className="font-primary font-normal px-6 py-4">Price</th>
            <th className="font-primary font-normal px-6 py-4">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index} className="text-black border-b border-palette-light">
              <td className="font-primary font-normal px-6 py-4">{item.name}</td>
              <td className="font-primary font-normal px-6 py-4">{item.quantity}</td>
              <td className="font-primary font-normal px-6 py-4">{item.price}</td>
              <td className="font-primary font-normal px-6 py-4">{item.quantity * item.price}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" className="text-bold text-xl uppercase font-serif">Total:</td>
            <td className="font-primary font-semibold px-6 py-4">{totalPrice}</td>
          </tr>
        </tbody>
      </table>
      
        <button
            className="mx-auto block mt-8 px-6 py-3 rounded-md text-white font-bold bg-black hover:bg-gray-800"
            // onClick={() => setShowReceipt(false)}
            onClick={handleConfirm}
        >
            Confirm 
      </button>
      
    </div>
  );
}

export default Receipt;

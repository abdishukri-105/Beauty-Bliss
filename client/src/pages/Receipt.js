import React from 'react';
import { Link } from "react-router-dom";

function Receipt({ cartItems,  formData, handleConfirm  }) {
    console.log(cartItems)

    console.log(formData)

  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  return (
    <div className="min-h-100 max-w-2xl p-5 my-4 sm:my-8 mx-auto w-full shadow-lg rounded-md bg-white">
      <h1 className="text-center text-2x text-pink uppercase font-bold  italic mb-3">Thank you for your order!</h1>
      <p className='text-grey'> "Thank you for placing your order! Before we can process your payment, we need to confirm the details of your purchase. Please review your order carefully and confirm that everything is correct. If you need to make any changes, please do so."</p>
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
            <tr key={index} className="text-grey border-b border-palette-light">
              <td className="font-primary font-normal px-6 py-4">{item.name}</td>
              <td className="font-primary font-normal px-6 py-4">{item.quantity}</td>
              <td className="font-primary font-normal px-6 py-4">{item.price}</td>
              <td className="font-primary font-normal px-6 py-4">{item.quantity * item.price}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" className="text-bold text-xl uppercase font-serif">Total:</td>
            <td className="font-primary font-semibold px-6 py-4 text-pink">{totalPrice}</td>
          </tr>
        </tbody>
      </table>
      <h2 className='text-center text grey font-semibold'>YOUR DETAILS</h2>
      <div className='bg-white justify-around flex'>
        <p> Name:  {formData.name}</p>
        <p> Address: {formData.address}</p>
        <p> Number: {formData.phoneNumber}</p>
      </div>

        <button
            className="mx-auto block mt-8 px-6 py-3 rounded-2xl text-white font-bold bg-pink hover:bg-pink-800"
            // onClick={() => setShowReceipt(false)}
            onClick={handleConfirm}
        >
            Confirm 
      </button>
      
    </div>
  );
}

export default Receipt;

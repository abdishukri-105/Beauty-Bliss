import React from 'react'

function Checkout() {
    return (
        <div className="min-h-80 max-w-2xl my-4 sm:my-8 mx-auto w-full" >
            <table className="mx-auto">
              <thead>
                <tr className="uppercase text-xs sm:text-sm text-black border-b border-palette-light">
                <th className="font-primary font-normal px-6 py-4">Item</th>
                    <th className="font-primary font-normal px-6 py-4">Quantity</th>
                    <th className="font-primary font-normal px-6 py-4 hidden sm:table-cell">Price</th>
                    <th className="font-primary font-normal px-6 py-4">Remove</th>
                </tr>
              </thead>
            </table>
        </div>
    )
}

export default Checkout

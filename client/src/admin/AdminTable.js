import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';





function AdminTable() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

// GET/products
  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

// delete logic
  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?,You cant go back once you do this")) {
      axios
        .delete(`http://localhost:3000/products/${productId}`)
        .then(() => {
          setProducts(products.filter((p) => p.id !== productId));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
// Search logic

  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  
return (
     
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="pb-4 bg-white dark:bg-gray-900">
        <label for="table-search" className="sr-only ">Search</label>
            <div class="relative mt-1 mx-auto">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" 
                       id="table-search" 
                       class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                       placeholder="Search for items"
                       value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                       />
            </div>
    </div>

    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    <span class="sr-only">
                    Image
                    </span>
                </th>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Product description
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {filteredProducts.map((product) => (

            <tr key={product.id}  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                {/* image  */}
                <td class="w-32 p-4">
                <img src={product.image} alt={product.name}/>
                </td>

                {/* product name */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product.name}
                </th>
                {/* description */}
                <td className=" px-6 py-4">
                    {product.description}
                </td>

                {/* category */}
                <td className="px-6 py-4">
                    {product.category}
                </td>

                {/* price */}
                <td className="px-6 py-4">
                {product.price}
                </td>


                <td className="flex items-center px-6 py-4 space-x-3">
                    {/* edit */}
                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">

                    <FontAwesomeIcon icon={faPenToSquare} style={{"--fa-primary-color": "#6691db", "--fa-secondary-color": "#3b60a0",}} />                    </button>

                    {/* delete */}
                    <button className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    onClick={() => handleDelete(product.id)}
                    >
                         <FontAwesomeIcon icon={faTrash} style={{color: "#ed4c07",}} />                        
                    </button>
                </td>
            </tr>
          ))}

        </tbody>
    </table>
</div>

    )
}

export default AdminTable

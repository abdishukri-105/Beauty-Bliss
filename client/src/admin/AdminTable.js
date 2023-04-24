import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import 'flowbite/dist/flowbite.min.css';
import 'flowbite/dist/flowbite.min.js';



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
     
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mr-20 ml-20 p-5">
        {/* Search */}
        <div className='flex  justify-start '>
            <div class="pb-4 bg-white dark:bg-gray-900 mr-9">
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
                </div> a
               {/* <Link to="add-product" type="button" class="flex items-center justify-center mr-5 text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm    dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                  <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                  </svg>
                  Add product
                </Link> */}

                <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" class="w-full mr-5 md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-4 w-4 mr-2 text-gray-400" viewbox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
                  </svg>
                    Filter
                  <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </button>
          </div>
        <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
          {/* Product */}

              
         <div class="flex items-center space-x-3 w-full md:w-auto">
          {/* Filter */}

              
         {/* filter dropdown */}
                <div id="filterDropdown" class="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                  <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose category</h6>
                        <ul class="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                                <li class="flex items-center">
                                <input id="apple" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"></label>
                              </li>
                        </ul>
                </div>
        </div>

        </div>

        <table className=" ml-20 mr-20 text-sm text-left text-gray-500 dark:text-gray-400">
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
import React from 'react';

import { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

const ProductList = ({ category, products, setProducts }) => {

    useEffect(() => {
      fetch(' http://localhost:3000/products')
        .then((response) => response.json())
        .then((data) => {
           console.log(data)
           setProducts(data)
          })
        .catch((error) => console.log(error));
    }, []);

  console.log(products)

  const filteredProducts = category
  ? products.filter((product) => product.category === category)
  : products;

  if (filteredProducts.length === 0) {
    return <div className="text-2xl ml-12 text-red-700">No product of this category</div>;
  }


    // const filteredProducts = category
    //   ? products.filter((product) => product.category === category)
    //   : products;

    //   if (filteredProducts.length === 0) {
    //     return <div className="text-2xl ml-12 text-red-700">No product of this category</div>;
    //   }
  
    // const handleDelete = (id) => {
    //   fetch(`https://api-article254.onrender.com/articles/${id}`, { method: 'DELETE' })
    //     .then((response) => {
    //       if (response.ok) {
    //         console.log(response)
    //         setArticles(articles.filter((article) => article.id !== id));
    //       } else {
    //         throw new Error('Not your article');
    //       }
    //     })
    //     .catch((error) => alert(error.message));
    // };
    
  
    return (
<div >
    {/* <Sidebar setCategory={setCategories} /> */}
    <div className="grid grid-cols-3 gap-4 p-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-5 relative">
            <div className="flex justify-between items-center">
              <Link
                to={`/product/${product.id}`}
                className="text-xl font-semibold cursor-pointer hover:text-blue-500  border-blue-600"
              >
                {product.name}
              </Link>
              {/* <div className="text-sm font-medium text-teal-600">{article.category}</div> */}
            </div>
            <p className="text-gray-700 mt-2 mb-4">{`${product.description.slice(0, 100)}${
              product.description.length > 25 ? '...' : ''
            }`}</p>
            <div className="">
              <div className="flex justify-between border-blue-300  border-t">
                <div className="flex justify-around">
                
                </div>
                {/* <button className="text-red-500 hover:text-red-500 mt-3 " onClick={() => handleDelete(article.id)}>
                  <img src={deleteIcon} alt="delete" />
                </button> */}
              </div>
            </div>
          </div>
        ))}
    </div>
    </div>
    );
  };
  

export default ProductList;

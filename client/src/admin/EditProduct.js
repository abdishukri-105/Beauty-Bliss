import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditProduct(props) {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    category: '',
  });

  useEffect(() => {
    const productId = props.match.params.productId;
    axios
      .get(`http://localhost:3000/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.match.params.productId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3000/products/${product.id}`, product)
      .then((response) => {
        console.log('Product updated:', response.data);
        // handle successful update
      })
      .catch((error) => {
        console.log(error);
      });
  };

    return (
        <div className="flex flex-col items-center mt-10 justify-center">
        <h2 className="text-2xl font-bold mb-2">Edit Product</h2>
        <form
          className="w-1/2 h-1/4 relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              type="text"
              name="name"
              value={product.name}
              onChange={(event) =>
                setProduct({ ...product, name: event.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            name="description"
            placeholder="Product Description"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          ></textarea>
        </div>
            <div className="mb-4">
            <label className="block text-gray-700 font-bold justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600" htmlFor="price">
                Price
            </label>
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                name="price"
                type="number"
                placeholder="Product Price"
                value={product.price} onChange={e => setProduct({...product, price: e.target.value})}
            />
            </div>
            <div className="mb-4">
        <label
            className="block text-gray-700 font-bold justify-between items-center pb-4 mb-4 rounded-t border-b"
            htmlFor="quantity"
        >
            Quantity
        </label>
  <input
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
    id="quantity"
    name="quantity"
    type="number"
    placeholder="Product Quantity"
    value={product.quantity}
    onChange={e => setProduct({...product, quantity: e.target.value})}
  />
</div>
    <div className="mb-4">
      <label
        className="block text-gray-700 font-bold justify-between items-center pb-4 mb-4 rounded-t border-b"
        id="quantity"
        name="quantity"
        type="number"
        placeholder="Product Quantity"
      />
    </div>
     <div className="mb-4">
      <label className="block text-gray-700 font-bold justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600" htmlFor="category">
        Category
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        name="category"
        type="text"
        placeholder="Product Category"
        value={product.category} onChange={e => setProduct({...product, category: e.target.value})}
      />
    </div>
    <div className="flex items-center justify-center">
    <button
          className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Update Product
        </button>
      </div>
    </form>
  </div>
);

    
}

export default EditProduct

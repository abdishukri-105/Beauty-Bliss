
import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import axios from "axios";


const ProductPage = ({ userId }) => {

  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    axios.get('https://beaty-product-shop.onrender.com/beauty_products', {
    })
    .then(response => {
      const data = response.data;
      const filtered = data.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
      setFilteredProducts(filtered);
    })
    .catch(error => console.log(error));
  }, [searchQuery]);
  
  
  return (
    <div className="flex p-5 ">
      <div className=" ">
        <Sidebar setCategory={setCategory} />
      </div>
      <div className="flex-grow ">
        <div className="flex justify-around">
          <div className="py-4">
            <Search onSearch={handleSearch} />
          </div>
      
        </div>
        <div className=" overflow-y-auto">
          <ProductList
            category={category}
            products={filteredProducts}
            setFilteredProducts={setFilteredProducts}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;


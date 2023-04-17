import { useState } from "react";

  
function Sidebar({ setCategory }) {
    const [categories, setCategories] = useState([
        "Skincare",
        "Makeup",
        "Haircare",
        "Fragrances",
        "Bath & Body",
        
      ]);
    
      const handleClick = (category) => {
        if (category === "All") {
          setCategory(null);
        } else {
          setCategory(category);
        }
      };
      

    return (
        <div className="p-2 text-center  h-screen w-44 bg-white">
        <h2 className="text-2xl  font-semibold mb-3">SHOP BY CATEGORIES</h2>
        <ul className="p-3">
          {categories.map((category) => (
            <li 
              key={category}
              className="cursor-pointer mb-3 text-grey  hover:text-pink"
              onClick={() => handleClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
  
    )
}

export default Sidebar

import { useState } from "react";

  
function Sidebar({ setCategory }) {
    const [categories, setCategories] = useState([
        "Skincare",
        "Makeup",
        "Haircare",
        "Fragrances",
        "Bath & Body",
        "Men's grooming",
        "Tools and accessories",
        "Beauty suppliments",
        "Natural/Organic products",
        "Specialized Products"
      ]);
    
      const handleClick = (category) => {
        if (category === "All") {
          setCategory(null);
        } else {
          setCategory(category);
        }
      };
      

    return (
        <div className="p-2   h-screen w-44 bg-white">
        <h2 className="text-l  font-extrabold mb-3 text-black h-7 w-[249px]">SHOP BY CATEGORIES</h2>
        <ul className="p-3 text-normal inline m-0 leading-[normal] relative font-bold h-[536px] w-[226px]">
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

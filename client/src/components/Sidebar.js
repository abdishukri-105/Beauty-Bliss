import { useState } from "react";

const Sidebar = ({ setCategory }) => {

  const [categories, setCategories] = useState([
    "All",
    "Skincare",
    "Makeup",
    "vaseline"

  ]);

  const handleClick = (category) => {
    if (category === "All") {
      console.log("All category")
      setCategory(null);
    } else {
      setCategory(category);
    }
  };

  return (
    <div className="p-2 text-center  h-screen w-44 bg-pink-50">
      <h2 className="text-2xl  font-semibold mb-3">Categories</h2>
      <ul className="p-3">
        {categories.map((category) => (
          <li 
            key={category}
            className="cursor-pointer mb-3 text-gray-900 border-b border-gray-500 hover:text-teal-300"
            onClick={() => handleClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
   </div>
  );
};

export default Sidebar;
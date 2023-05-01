// import React from 'react'
// import { useState } from "react";


// function CategoryBar() {
//     // const [categories, setCategories] = useState([
//     //     "All",
//     //     "Skincare",
//     //     "Makeup",
//     //     "vaseline"
//     //   ]);
    
//     //   const handleClick = (category) => {
//     //     if (category === "All") {
//     //       console.log("All category")
//     //       setCategory(null);
//     //     } else {
//     //       setCategory(category);
//     //     }
//     //   };
    
//     return (
//         <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
//             <button type="button" class="text-gray-900  border-white hover:border-gray-200 hover:text-pink  bg-white focus:ring-4 focus:outline-none  rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white">All categories</button>
//             <button type="button" class="text-gray-900  border-white hover:border-gray-200 hover:text-pink  bg-white focus:ring-4 focus:outline-none  rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white">Skincare</button>
//             <button type="button" class="text-gray-900  border-white hover:border-gray-200 hover:text-pink  bg-white focus:ring-4 focus:outline-none  rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white ">Makeup</button>
//             <button type="button" class="text-gray-900  border-white hover:border-gray-200  hover:text-pink bg-white focus:ring-4 focus:outline-none  rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white ">vaseline</button>
//         </div>
//     )
// }

// export default CategoryBar
// {/* <ul className="p-3 ">
// {categories.map((category) => (
//   <li 
//     key={category}
//     className="cursor-pointer mb-3 text-grey font-semibold hover:text-pink"
//     onClick={() => handleClick(category)}
//   >
//     {category}
//   </li>
// ))}
// </ul> */}
import React, { useState } from 'react';

function CategoryBar() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { name: "All" },
    { name: "Skincare" },
    { name: "Makeup" },
    { name: "Vaseline" }
  ];

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
      {categories.map((category) => (
        <button
          key={category.name}
          type="button"
          className={`text-gray-900 border-white hover:border-gray-200 hover:text-brown bg-white  text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 ${
            selectedCategory === category ? "text-brown" : "dark:text-white"
          }`}
          onClick={() => handleClick(category)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
export default CategoryBar;

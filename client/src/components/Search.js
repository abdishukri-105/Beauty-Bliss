import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (

<form className="flex items-center">   
    <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <input 
          type="text" 
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Search for items" 
          value={query}
          onChange={handleSearchChange}

          />
    </div>
    {/* <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <span class="sr-only">Search</span>
    </button> */}
</form>

    // <form className="relative w-80 ml-5 mr-5">
    //   <input
    //     name="search"
    //     type="text"
    //     placeholder="   Search  ....."
    //     className="bg-white rounded-xl py-3 px-12 w-full text-gray-900 shadow-md focus:outline-none focus:bg-pink-50 focus:shadow-outline mr-2"
    //   />
    //   <span className="absolute inset-y-0 left-0 flex text-2xl bg-white shadow-sm pr-3 pl-3  rounded-md items-center ">
    //   <FontAwesomeIcon icon={faSearch} />
    //   </span>
    // </form>
  );
};

export default Search;

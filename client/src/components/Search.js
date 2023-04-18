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
    <form className="relative w-80 ml-5 mr-5">
      <input
        name="search"
        type="text"
        placeholder="   Search  ....."
        value={query}
        onChange={handleSearchChange}
        className="bg-pink-50 rounded-xl py-3 px-12 w-full text-gray-900 shadow-md focus:outline-none focus:bg-pink-50 focus:shadow-outline mr-2"
      />
      <span className="absolute inset-y-0 left-0 flex text-2xl bg-pink-100 shadow-sm pr-3 pl-3  rounded-md items-center ">
      <FontAwesomeIcon icon={faSearch} />
      </span>
    </form>
  );
};

export default Search;

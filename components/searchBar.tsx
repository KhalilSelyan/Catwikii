import React from "react";
const SearchBar = ({ setSearch, setIsOpen }) => {
  return (
    <div className="flex items-center bg-white rounded-[59px] p-2 h-8 w-24 lg:w-96 lg:h-16 border border-[#bdbdbdbd]">
      <input
        className="w-full h-full border-none bg-transparent focus:outline-none placeholder:text-[#291507] px-4"
        type="text"
        placeholder="Search"
        onFocus={() => {
          setIsOpen(true);
        }}
        // onBlur={() => setIsOpen(false)}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <svg
        className=" h-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="#291507"
          d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
        />
      </svg>
    </div>
  );
};

export default SearchBar;

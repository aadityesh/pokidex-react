import React, { useState } from "react";

function SearchBox({ searchInput, setSearchInput }) {
  const [input, setInput] = useState("");

  const handleConditionChange = (e) => {
    setSearchInput(e);
    // console.log(e);
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") handleConditionChange(e.target.value);
  };

  return (
    <>
      <div
        style={{ boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.1)" }}
        className="w-[100%] flex justify-between p-2 px-3  rounded-md text-blue-700"
      >
        <img
          className="absolute translate-y-2 translate-x-1 h-5 w-5 text-blue-700"
          src="/assets/icons/search.svg"
          alt="search-icon"
        />
        <input
          className="w-[90%] outline-none rounded-md p-1 px-8 placeholder:text-blue-700"
          type="text"
          onChange={(e) => {
            if (e.target.value == "") {
              handleConditionChange("");
            } else {
              setInput(e.target.value.toLowerCase());
            }
          }}
          onKeyDown={(e) => handleKeyDown(e)}
          placeholder="Pokemon name, number or type"
        />
        <button
          onClick={() => handleConditionChange(input)}
          className="bg-yellow-400 rounded-md text-blue-700 font-[600] w-[100px] cursor-pointer shadow-md"
        >
          Search
        </button>
      </div>
    </>
  );
}

export default SearchBox;

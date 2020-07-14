import React from "react";
import "./seach.css";

const Search = ({ placeholder, handleChange }) => {
  return (
    <input
      className='search'
      type='search'
      name='search'
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Search;

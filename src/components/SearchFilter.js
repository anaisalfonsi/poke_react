import React from "react";

const SearchFilter = ({ handleFilter}) => {
  return (
    <div className="search-filter-buttons">
      <p>Expérience : </p>
      <button onClick={() => handleFilter(60)}> &#62;= 60 </button>
      <button onClick={() => handleFilter(110)}> &#62;= 110 </button>
      <button onClick={() => handleFilter(170)}> &#62;= 170 </button>
      <button onClick={() => handleFilter(230)}> &#62;= 230 </button>
    </div>
  );
};

export default SearchFilter;

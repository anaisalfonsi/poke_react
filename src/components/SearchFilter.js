import React from "react";

const SearchFilter = ({ handleFilter}) => {
  return (
    <div className="search-filter-buttons">
      <p>Expérience</p>
      <button onClick={() => handleFilter(60)}> Supérieur à 60 </button>
      <button onClick={() => handleFilter(110)}> Supérieur à 110 </button>
      <button onClick={() => handleFilter(170)}> Supérieur à 170 </button>
      <button onClick={() => handleFilter(230)}> Supérieur à 230 </button>
    </div>
  );
};

export default SearchFilter;

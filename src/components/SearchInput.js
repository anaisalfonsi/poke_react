import React from "react";

const SearchInput = ({ inputValue, handleChange, onKeyEvent, searchFilter }) => {
  return (
    <input
      type="text"
      value={inputValue}
      onChange={({ target: { value } }) => {
        handleChange(value);
        searchFilter(value);
      }}
      onKeyDown={({ key }) => {
        onKeyEvent(key);
      }}
    />
  );
};

export default SearchInput;

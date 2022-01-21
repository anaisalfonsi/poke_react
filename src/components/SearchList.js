import React from "react";
import { SearchItem } from ".";

const SearchList = ( { allPoke, catchPoke, deletePoke }) => {
  return (
    <ul>
      <SearchItem 
        allPoke={allPoke}
        catchPoke={catchPoke}
        deletePoke={deletePoke}
        />
    </ul>
  );
};

export default SearchList;

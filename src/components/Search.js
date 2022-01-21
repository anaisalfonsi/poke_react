import React from "react";
import { SearchInput, SearchFilter, SearchList } from ".";

const Search = ( { inputValue, handleChange, onKeyEvent, searchFilter, handleFilter, allPoke, catchPoke, deletePoke }) => {
  return (
    <>
      <section className="search__section">
        <div>
          <div className="search-div">
            <h2>Trouvez un Pokémon</h2>
            <div className="search-box">
              <SearchInput
                inputValue={inputValue}
                handleChange={handleChange}
                onKeyEvent={onKeyEvent}
                searchFilter={searchFilter}
              />
              <SearchFilter handleFilter={handleFilter} />
            </div>
          </div>
          <div className="search-results-div">
            <SearchList
              allPoke={allPoke}
              catchPoke={catchPoke}
              deletePoke={deletePoke}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;

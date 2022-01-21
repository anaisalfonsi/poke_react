import React from "react";

const SearchItem = ({ inBag, deletePoke }) => {
  return (
    <>
      {inBag
        ? inBag.map((pokeArr) => { return pokeArr.map((poke) => (
          <li id={poke.name} className="poke-card" key={poke.id}>
            <div>
              <div>
                <p>{poke.name}</p>
                <p>{poke.base_experience}</p>
                <img
                  src={poke.sprites.front_default}
                  alt={poke.name + " image"}
                />
                <div>
                  <button>Éditer</button>
                  <button onClick={() => deletePoke(poke.name)}>
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </li>
        ));})
        : null}
    </>
  );
};

export default SearchItem;

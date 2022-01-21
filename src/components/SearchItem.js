import React from "react";

const SearchItem = ({ allPoke, catchPoke, deletePoke, isDisabled }) => {

  return (
    <>
      {allPoke
        ? allPoke.map((poke) => (
            <li className="poke-card" key={poke.id}>
              <p>{poke.name}</p>
              <p>{poke.base_experience}</p>
              <img
                src={poke.sprites.front_default}
                alt={poke.name + " image"}
              />
              <div>
                <button 
                  onClick={() => catchPoke(poke.name)}
                  disabled={isDisabled}
                >Attraper</button>
                <button onClick={() => deletePoke(poke.name)}>Supprimer</button>
              </div>
            </li>
          ))
        : null}
    </>
  );
};

export default SearchItem;

import React from "react";
import { useState } from "react/cjs/react.development";

const SearchItem = ({ allPoke, catchPoke, deletePoke }) => {
    const [ isDisabled, setIsDisabled ] = useState(false);

    const disablePoke = (value) => {
      setIsDisabled(value);
    }

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
                <button onClick={(e) => {
                  disablePoke(true);
                  if (isDisabled === true) {
                    e.target.disabled = true;
                  }
                  catchPoke(poke.name);
                }}>Attraper</button>
                <button onClick={() => deletePoke(poke.name)}>Supprimer</button>
              </div>
            </li>
          ))
        : null}
    </>
  );
};

export default SearchItem;

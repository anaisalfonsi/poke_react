import React from "react";

const Catched = ({ inBag }) => {

  return (
    <>
      { inBag ? 
      <h3>Attrapés !</h3>
      : null }
      <ul className="center">
        {inBag ? inBag.map((pokeArr) => 
            pokeArr.map((poke, i) => (
            <li key={i}>
                <a href={"#"+ poke.name}>{poke.name}</a>
            </li>
            ))
          )
        : null}  
      </ul>
    </>
  );
};

export default Catched;

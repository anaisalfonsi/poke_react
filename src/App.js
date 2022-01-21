import logo from './logo.svg';
import './App.css';
import { Header, Search, CatchedItem } from "./components";
import { useEffect, useState } from "react";

const App = () => {
  const [allPoke, setAllPoke] = useState([]);
  const [value, setValue] = useState("");
  const [filteredPoke, setFilteredPoke] = useState([]);
  const [isInBag, setIsInBag] = useState([]);

  useEffect(() => {
    const fetchAllPoke = async () => {
      await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
        .then((response) => response.json())
        .then((data) => {
          data.results.map((poke) => {
            fetch(poke.url)
              .then((response) => response.json())
              .then((onePokeData) => {
                setAllPoke((prevState) => [...prevState, onePokeData]);
              });
          });
        });
    };

    fetchAllPoke();

    console.log(allPoke);
  }, []);

  const handleChange = (value) => {
    setValue(value);
  };

  const handleKeyEvent = (key) => {
    if (key === "Enter") {
      console.log("enter pressed");
    }

    if (key === "Escape") {
      setValue("");
      setFilteredPoke("")
    }
  };

  const searchFilter = (pokeName) => {
    setFilteredPoke(
      [
        ...allPoke.filter(
          (poke) => poke.name.toLowerCase().indexOf(pokeName.toLowerCase()) > -1
        ),
      ].sort((a, b) => {
        return a.base_experience - b.base_experience;
      })
    );

    if (pokeName == "") {
      setFilteredPoke("");
    }
  };

  const catchPoke = (pokeName) => {
      setIsInBag([
        ...isInBag,
        filteredPoke.filter((poke) => poke.name === pokeName),
      ]);
      setFilteredPoke([
        ...filteredPoke.filter(
          (poke) => poke.name != pokeName
        ),
      ]);
  };

  const deletePoke = (pokeName) => {
    setFilteredPoke(prevState => [...prevState, ...allPoke.filter((poke) => poke.name === pokeName)]);
    setIsInBag(
      isInBag.filter(
        (pokeArr) =>
          pokeArr.map((poke) => {
            return poke.name;
          }) != pokeName
      )
    );
    /* setAllPoke((prevState) => [
      ...prevState,
      ...allPoke.filter((poke) => poke.name === pokeName),
    ]); */
    /* setAllPoke([...allPoke.filter((poke) => poke.name === pokeName)]); */
  };

  const handleFilter = (level) => {
    setFilteredPoke(
      allPoke
        .filter((poke) => poke.base_experience >= level)
        .sort((a, b) => {
          return a.base_experience - b.base_experience;
        })
    );
  };

  return (
    <div className="App">
      <Header inBag={isInBag} />
      <section>
        <h1>Pokémon, attrapez-les toOOus</h1>
      </section>
      <Search
        inputValue={value}
        handleChange={handleChange}
        onKeyEvent={handleKeyEvent}
        searchFilter={searchFilter}
        handleFilter={handleFilter}
        allPoke={filteredPoke}
        catchPoke={catchPoke}
        deletePoke={deletePoke}
      />
      <section className="catched-poke__section">
        <ul>
          <CatchedItem inBag={isInBag} deletePoke={deletePoke} />
        </ul>
      </section>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import pokemonSrvice from "./pokemon.srvice";

function RegisteredPage() {
  const [nickname, setNickname] = useState(
    new URLSearchParams(useLocation().search).get("nickname")
  );
  const [pokemonsList, setPokemonsList] = useState([]);
  const [pokemonsDetailsList, setPokemonsDetailsList] = useState([]);
  const [pokemonsUncatchedsList, setPokemonsUncatchedList] = useState([]);

  useEffect(() => {
    if (nickname) {
      pokemonSrvice.getPokemonList(nickname.length * 10).then((res) => {
        if (res.results) {
          setPokemonsList(res.results);
        }
      });
    }
  }, [nickname]);

  useEffect(() => {
    const pokemonDetailsRequestsList = [];
    pokemonsList.forEach((el) => {
      pokemonDetailsRequestsList.push(pokemonSrvice.getPokemonDetails(el.url));
    });

    Promise.all(pokemonDetailsRequestsList).then((responses) => {
      const pokemosDetailsListArray = [];
      responses.forEach((res) => {
        const statsArray = [];

        res.stats.forEach((stat) => {
          statsArray.push({
            name: stat.stat.name,
            value: stat.base_stat,
          });
        });

        pokemosDetailsListArray.push({
          name: res.name,
          artwork: res.sprites.other["official-artwork"].front_default,
          stats: statsArray,
        });

      });

      setPokemonsDetailsList(pokemosDetailsListArray);
      setPokemonsUncatchedList(pokemosDetailsListArray);
    });
  }, [pokemonsList]);

  function catchButton() {
    let catchedPokemonsList = [...pokemonsUncatchedsList];

    catchedPokemonsList = catchedPokemonsList.filter(
      () => Math.floor(Math.random() * Math.floor(2)) === 1
    );

    console.log({ nickname: nickname, catchedPokemonsList });
  }

  return (
    <>
      <section>
        <h1>Hello, {nickname}!</h1>
        <div className="list_pokemon">
          {pokemonsDetailsList.map((pokemon) => (
            <div className="single_pokemon">
              <img
                src={pokemon.artwork}
                alt="pokemon"
                className="pokemon_img"
              />
              <p>{pokemon.name.toUpperCase().replace(/-/g, " ")}</p>
            </div>
          ))}
        </div>
        <button onClick={catchButton} className="btn btn-outline-primary btn-lg">
          Catch'em!
        </button>
      </section>
    </>
  );
}

export default RegisteredPage;

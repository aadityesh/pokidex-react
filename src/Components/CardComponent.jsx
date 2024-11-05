import React, { useEffect, useState } from "react";
import Badges from "./Badges";
import PokemonName from "./PokemonName";
import Card from "./Card";

function CardComponent({ url, bg, colorMap, pokemon }) {
  // const [pokemon, setPokemon] = useState({
  //   id: null,
  //   img: null,
  //   name: null,
  //   types: null,
  //   color: null,
  // });

  // useEffect(() => {
  //   async function fetchPokemon() {
  //     let data = await fetch(url); // fetch id + img + name
  //     data = await data.json();
  //     setPokemon({
  //       id: data.id,
  //       img: data?.sprites?.other?.home?.front_default,
  //       name: data.name,
  //       types: data.types,
  //       color: colorMap[data.name],
  //     });

  //     // console.log(pokemon.bg);
  //   }
  //   fetchPokemon();
  // }, []);

  // const bg_color = `bg-${pokemon.color}-300`;
  return (
    <>
      <Card pokemon={pokemon} />
    </>
  );
}

export default CardComponent;

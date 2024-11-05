import React from "react";

function PokemonName({ name }) {
  const pokemonName = name
    ? name[0].toUpperCase() + name.substr(1, name.length - 1)
    : "Untitled";
  // console.log(pokemonName);
  return <h6 className="text-[24px] font-bold">{pokemonName}</h6>;
}

export default PokemonName;

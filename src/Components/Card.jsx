import React from "react";
import PokemonName from "./PokemonName";
import Badges from "./Badges";

const colorCodes = {
  green: "#60f19a",
  red: "#f37e5d",
  yellow: "#e3fc83",
  brown: "#f5c97d",
  pink: "#e456ae",
  blue: "#87e3f5",
  grey: "#c3c3b7",
  black: "#a4a495",
  white: "#782ac5",
  purple: "#ccacf3",
  default: "#b2e7df",
};

function displayID(id) {
  if (id == "1000") return "#1000";
  let length = String(id).length;
  if (length == "1") return `#00${id}`;
  if (length == "2") return `#0${id}`;
  if (length == "3") return `#${id}`;
}

function Card({ pokemon, colorMap }) {
  const idToDisplay = displayID(pokemon.id);
  return (
    <div
      style={{
        backgroundColor: colorMap[pokemon.name]
          ? colorCodes[`${colorMap[pokemon.name]}`]
          : colorCodes["default"],
      }}
      className={
        "max-h-[300px] max-w-[250px] rounded-md p-2 flex flex-col gap-2 border border-black brightness-[110%]"
      }
    >
      <img
        src={pokemon.sprites?.other?.home?.front_default}
        className="max-h-[100px] max-w-[200px] self-center -translate-y-[40%] -mb-[20%]"
        alt=""
      />
      <div className="pl-1">
        <PokemonName name={pokemon.name} />
        <p className="font-semibold">{idToDisplay}</p>
        <div className="flex gap-3 mt-1">
          {pokemon?.types?.map((pokemonType) => (
            <Badges
              title={pokemonType.type.name}
              color={pokemon.color}
              key={pokemonType.type.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;

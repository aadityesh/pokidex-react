import React from "react";

function PokidexLogo() {
  return (
    <div className="flex justify-between items-center">
      <img src="/assets/icons/Pokedex-logo.svg" alt="pokedex-logo" />
      <a href="https://github.com/aadityesh/pokidex-react">
        <img src="/assets/icons/github.svg" alt="github" />
      </a>
    </div>
  );
}

export default PokidexLogo;

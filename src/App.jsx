import { useEffect, useState } from "react";
import "./App.css";
import PokidexLogo from "./Components/PokidexLogo";
import SearchBox from "./Components/SearchBox";
import Pagination from "./Components/Pagination";
import GridComponent from "./Components/GridComponent";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DropDownMenu from "./Components/DropDownMenu";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [searchInput, setSearchInput] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [condition, setCondition] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(50);
  const [colorMap, setColorMap] = useState(new Map());

  const pokemonURL = import.meta.env.VITE_FETCH_POKEMON_URL;
  const colorURL = import.meta.env.VITE_FETCH_POKEMON_COLOR_URL;

  console.log(pokemonURL)
  console.log(colorURL)

  // Pokemon Fetch

  async function fetchAllPokemons() {
    const temp_allPokemons = [];
    for (let i = 1; i <= 1000; i++) {
      let data = await fetch(pokemonURL + `/${i}/`);
      data = await data.json();
      temp_allPokemons.push(data);
    }

    setPokemons(temp_allPokemons);
    console.log(temp_allPokemons);
  }

  async function fetchAllColors() {
    let tempMap = new Map();

    async function fetchColors() {
      const responses = [];
      for (let i = 1; i <= 10; i++) {
        let pokemonColor = await fetch(colorURL + `/${i}/`); // fetch color
        pokemonColor = await pokemonColor.json();
        responses.push(pokemonColor);
      }

      for (let i = 0; i <= 9; i++) {
        responses[i].pokemon_species.map((pokemon) => {
          if (
            responses[i].name != "black" &&
            responses[i].name != "white" &&
            responses[i].name != "gray"
          ) {
            tempMap[pokemon.name] = responses[i].name;
          } else {
            tempMap[pokemon.name] = "grey";
          }
        });
      }

      setColorMap(tempMap);
      console.log(tempMap)
    }
    fetchColors();
  }
  useEffect(() => {
    let fetch = async () => {
      try {
        await fetchAllPokemons();
        await fetchAllColors();
      } catch (error) {
        console.log("Error in fetch operation!");
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, []);

  // Color Fetch

  let totalPages = pokemons.length / postsPerPage;
  let LastIndex = currentPage * postsPerPage;
  let firstIndex = LastIndex - postsPerPage;

  // handles search box

  // handles drop-down menu

  const HandleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };

  const HandlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((currentPage) => currentPage - 1);
    }
  };

  const HandleRowsChange = (e) => {
    setPostsPerPage(e.target.value);
  };

  useEffect(() => {
    if (condition != "") {
      setCurrentPage(1);
      let newArray = [];
      if (condition == "ascending") {
        newArray = [...pokemons].sort((a, b) => a.id - b.id);
      } else if (condition == "descending") {
        newArray = [...pokemons].sort((a, b) => b.id - a.id);
      } else if (condition == "alphabetical") {
        newArray = [...pokemons].sort((a, b) => a.name.localeCompare(b.name));
      } else if (condition == "reverseAlphabetical") {
        newArray = [...pokemons].sort((a, b) => b.name.localeCompare(a.name));
      }
      setPokemons(newArray);
    }
  }, [condition]);

  let postsToShow =
    searchInput == ""
      ? pokemons.slice(firstIndex, LastIndex)
      : pokemons.filter(
          (value) =>
            value.name.includes(`${searchInput}`) ||
            value.id == `${searchInput}` ||
            value.types.some((type) => type.type.name == searchInput)
        );
  console.log(postsToShow);
  return (
    <>
      <div className="max-w-[80%] py-[30px] mx-auto">
        <header className="max-w-[100%] flex flex-col gap-[28px]">
          {/* Logo */}
          <PokidexLogo />
          {/* Search Box */}
          <SearchBox
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
          <DropDownMenu condition={condition} setCondition={setCondition} />
        </header>
        <p>{isLoading}</p>
        {isLoading ? (
          <>
            <Skeleton count={30} />
          </>
        ) : (
          <>
            {searchInput == "" && (
              <Pagination
                HandleNextPage={HandleNextPage}
                HandlePrevPage={HandlePrevPage}
                currentPage={currentPage}
                totalPages={totalPages}
              />
            )}
            <GridComponent postsToShow={postsToShow} colorMap={colorMap} />
          </>
        )}
      </div>
    </>
  );
}

export default App;

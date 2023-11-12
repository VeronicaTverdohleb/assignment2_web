import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokecard from "./Pokecard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../App.css";
import logo from "../images/logo.svg";

function PokemonList(props) {
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelToken;

    const fetchPokemons = async () => {
      setError(null);
      setLoading(true);
      try {
        cancelToken = axios.CancelToken.source();
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${
            currentPage * 20
          }`,
          { cancelToken: cancelToken.token }
        );
        // setPokemons(response.data.results);
        const pokemonData = await Promise.all(
          response.data.results.map(async (pokemon) => {
            const detailsResponse = await axios.get(pokemon.url);
            return detailsResponse.data;
          })
        );
        setPokemons(pokemonData);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();

    // Cleanup function to cancel the request if the component unmounts
    return () => {
      cancelToken && cancelToken.cancel();
    };
  }, [currentPage]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching data</p>}
      <div className="pokedex">
        <img src={logo} alt="Pokeball" width="60px" height="60px" />
      </div>
      <button className="button-about" onClick={() => navigate("/about")}>
        About
      </button>

      <div className="pokemon-grid">
        {pokemons.map((pokemon) => (
          <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
            <Pokecard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              types={pokemon.types.map((typeInfo) => typeInfo.type.name)}
            />
          </Link>
        ))}
      </div>
      <button
        className="button-previous"
        onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
        disabled={currentPage === 0}
      ></button>
      <button
        className="button-next"
        onClick={() => setCurrentPage((prev) => prev + 1)}
      ></button>
    </div>
  );
}

export default PokemonList;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";

import "../App.css";

function PokemonDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pokemonDetail, setPokemonDetail] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const detail = await response.json();
      setPokemonDetail(detail);
    })();
    // The effect depends on the pokemon id from the match params
  }, [id]);
  const { name, height, weight, types, abilities } = pokemonDetail;

  return (
    <div className="App">
      <div className="pokedex">
        <img src={logo} alt="Pokeball" width="60px" height="60px" />
      </div>
      <div>
        {id && (
          <img
            className="detail-img tc dib pa1 ma2"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={`${name} sprite`}
            width="200px"
            height="200px"
          />
        )}
      </div>
      <div className="details dib">
        {id && (
          <>
            ID: {id}
            <br />
            <br />
            Name: {name}
            <br />
            <br />
            Height: {height}
            <br />
            <br />
            Weight: {weight}
            <br />
            <br />
            Type: {types && types[0].type.name}
            <br />
            <br />
            Abilities: {abilities && abilities[0].ability.name}
          </>
        )}
      </div>
      <br></br>
      <button className="button-back" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}

export default PokemonDetail;

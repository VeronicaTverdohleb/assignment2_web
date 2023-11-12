import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Pokecard({ id, name, types }) {
  const typeClass = types ? `type-${types[0]}` : "";
  return (
    <div className={`pokemons ${typeClass} ma1 tc dib`}>
      <Link to={`/pokemon/${id}`}>
        <img
          className="pokeimage"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt={`Sprite of ${id}`}
          width="160px"
          height="160px"
        />
        <br />
        <div className="pokenames tc dib pa1">{name}</div>
      </Link>
    </div>
  );
}

export default Pokecard;

import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";

import "../App.css";

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="pokedex">
        <img src={logo} alt="Pokeball" width="60px" height="60px" />
      </div>
      <div className="about-text">
        <p>About the Pokedex</p>
        <p>
          In this assignment, I created a Pokédex using React! This is a catalog
          of Pokémon that a trainer can browse to get detailed information about
          any Pokémon.
        </p>
        <p>The following requirements are met:</p>
        <ul>
          <li>
            Pokémon information is retrieved from{" "}
            <a href="https://pokeapi.co/">PokéAPI</a>.
          </li>
          <li>
            The Pokédex displays a list of Pokémon and supports simple
            pagination, such as “next” and “previous” buttons to navigate
            between pages.
          </li>
          <li>
            When a user clicks on a specific Pokémon, detailed information about
            that Pokémon is displayed, including type(s), stats, abilities,
            height, and weight.
          </li>
          <li>
            The application contains multiple pages (e.g., "pokedex" and
            "about") and utilizes React Router for navigation.
          </li>
          <li>
            The application is developed using the Create React App toolchain.
          </li>
        </ul>
        <p>
          This website uses <a href="https://pokeapi.co/">PokeApi</a> for
          retrieving data about the Pokémon.
        </p>
      </div>
      <button className="button-back" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}

export default About;

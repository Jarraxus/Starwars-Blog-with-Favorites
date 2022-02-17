// import { getESLintOptions } from "eslint-webpack-plugin/declarations/options";
import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/charactercard";
import { PlanetCard } from "../component/planetcard";
import { StarshipCard } from "../component/starshipcard";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    getCharacters();
    getPlanets();
    getStarships();
  }, []);

  function getCharacters() {
    fetch("https://swapi.dev/api/people/", { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCharacters(data.results);
        return data.results;
      })
      .then((info) => {
        console.log(info);
      })
      .catch((error) => {
        console.log("Looks like there was a problem: \n", error);
      });
  }

  function getPlanets() {
    fetch("https://swapi.dev/api/planets/", { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPlanets(data.results);
        return data.results;
      })
      .then((info) => {
        console.log(info);
      })
      .catch((error) => {
        console.log("Looks like there was a problem: \n", error);
      });
  }

  function getStarships() {
    fetch("https://swapi.dev/api/starships/", { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setStarships(data.results);
        return data.results;
      })
      .then((info) => {
        console.log(info);
      })
      .catch((error) => {
        console.log("Looks like there was a problem: \n", error);
      });
  }

  return (
    <>
      <div className="charactersbanner">
        <h1>Characters</h1>
        <div className="scrollmenu">
          <div className="row">
            <div className="col-sm-6">
              {characters.map((item, index) => {
                return (
                  <CharacterCard
                    key={index}
                    character={item}
                  />
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="planetsbanner">
          <h1>Planets</h1>
          <div className="scrollmenu">
            <div className="row">
              <div className="col-sm-6">
                {planets.map((item, index) => {
                  return (
                    <PlanetCard
                      key={index}
                      planet={item}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="starshipsbanner">
          <h1>Starships</h1>
          <div className="scrollmenu">
            <div className="row">
              <div className="col-sm-6">
                {starships.map((item, index) => {
                  return (
                    <StarshipCard
                      key={index}
                      starship={item}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

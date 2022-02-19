// import { getESLintOptions } from "eslint-webpack-plugin/declarations/options";
import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { Cards } from "../component/cards";
import { Details } from "../component/details";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    getData("https://swapi.dev/api/people/", setCharacters);
    getData("https://swapi.dev/api/planets/", setPlanets);
    getData("https://swapi.dev/api/starships/", setStarships);
  }, []);

  function getData(url, setter) {
    fetch(url, { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data.results);
        setter(data.results);
      })
      .catch((error) => {
        console.log("Looks like there was a problem: \n", error);
      });
  }

  return (
    <>
      <div className="banner">
        <h1>Characters</h1>
        <div className="scrollmenu">
          <div className="row">
            <div className="col-sm-6">
              {characters.map((character, index) => {
                return (
                  <Cards
                    prop1="Name"
                    value1={character.name}
                    prop2="Gender"
                    value2={character.gender}
                    prop3="Hair Color"
                    value3={character.hair_color}
                    prop4="Eye Color"
                    value4={character.eye_color}
                    key={index}
                    character={character.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="banner">
        <h1>Planets</h1>
        <div className="scrollmenu">
          <div className="row">
            <div className="col-sm-6">
              {planets.map((planet, index) => {
                return (
                  <Cards
                    prop1="Name"
                    value1={planet.name}
                    prop2="Population"
                    value2={planet.population}
                    prop3="Terrain"
                    value3={planet.terrain}
                    prop4="Climate"
                    value4={planet.climate}
                    key={index}
                    character={planet.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="banner">
        <h1>Starships</h1>
        <div className="scrollmenu">
          <div className="row">
            <div className="col-sm-6">
              {starships.map((starship, index) => {
                return (
                  <Cards
                    prop1="Name"
                    value1={starship.name}
                    prop2="Model"
                    value2={starship.model}
                    prop3="Crew"
                    value3={starship.crew}
                    prop4="Passengers"
                    value4={starship.passengers}
                    key={index}
                    character={starship.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

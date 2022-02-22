// import { getESLintOptions } from "eslint-webpack-plugin/declarations/options";
import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import { Cards } from "../component/cards";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="characters mt-5">
        <h2 className="">Characters</h2>
        <ul className="cards characters-cards d-flex flex-nowrap p-0">
          {store.characters.map((character, i) => {
            return (
              <li id={i} key={i} className="home">
                <Cards
                  cardData={{
                    name: character.name,
                    prop1: `Gender: `,
                    prop2: `Hair Color: `,
                    prop3: `Eye Color: `,
                    value1: character.Gender,
                    value2: character.hair_color,
                    value3: character.eye_color,
                    entity: character,
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="characters mt-5">
        <h2 className="">Planets</h2>
        <ul className="cards characters-cards d-flex flex-nowrap p-0">
          {store.planets.map((planet, i) => {
            return (
              <li id={i} key={i} className="home">
                <Cards
                  cardData={{
                    name: planet.name,
                    prop1: `Population: `,
                    prop2: `Terrain: `,
                    prop3: `Climate: `,
                    value1: planet.population,
                    value2: planet.terrain,
                    value3: planet.climate,
                    entity: planet,
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="characters mt-5">
        <h2 className="">Starships</h2>
        <ul className="cards characters-cards d-flex flex-nowrap p-0">
          {store.starships.map((starship, i) => {
            return (
              <li id={i} key={i} className="home">
                <Cards
                  cardData={{
                    name: starship.name,
                    prop1: `Model: `,
                    prop2: `Crew: `,
                    prop3: `Passengers: `,
                    value1: starship.model,
                    value2: starship.crew,
                    value3: starship.passengers,
                    entity: starship,
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

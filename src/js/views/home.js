// import { getESLintOptions } from "eslint-webpack-plugin/declarations/options";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/charactercard";
import { PlanetCard } from "../component/planetcard";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);

  // running getList() on page load
  useEffect(() => {
    getCharacters();
    getPlanets();
  }, []); // <- ONLY on page load

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

  // function newFav(updatedList) {
  //   fetch((url), {
  //     method: "PUT",
  //     body: JSON.stringify(updatedList),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((resp) => {
  //       console.log(resp.ok); // will be true if the response is successfull
  //       console.log(resp.status); // the status code = 200 or code = 400 etc.
  //       console.log(resp.text()); // will try return the exact result as string
  //       return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
  //     })
  //     .then((data) => {
  //       //here is were your code should start after the fetch finishes
  //       console.log("This is the data", newFav); //this will print on the console the exact object received from the server
  //     })
  //     .catch((error) => {
  //       //error handling
  //       console.log(error);
  //     });
  // }

  return (
    <>
      <div className="scrollmenu">
        <div className="row">
          <div className="col-sm-6">
            {characters.map((item, index) => {
              return (
                <CharacterCard
                  key={index}
                  name={item.name}
                  hair_color={item.hair_color}
                  eye_color={item.eye_color}
                  gender={item.gender}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="scrollmenu">
        <div className="row">
          <div className="col-sm-6">
            {planets.map((item, index) => {
              return (
                <PlanetCard
                  key={index}
                  name={item.name}
                  population={item.population}
                  terrain={item.terrain}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

// Home.propTypes = {
//   gender: PropTypes.string,
// };

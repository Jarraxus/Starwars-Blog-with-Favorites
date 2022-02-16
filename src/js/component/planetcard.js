import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const PlanetCard = (props) => {
    const [boolean, setBoolean] = useState(false);

    return (
      <div className="card" style={{ width: 400 }}>
        <img
          className="card-img-top"
          src="https://via.placeholder.com/400x200.png"
          alt="Card image cap"
        ></img>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <span className="card-text">
            <ul>
              <li>Population: {props.population}</li>
              <li>Terrain: {props.terrain}</li>
              
            </ul>
          </span>
          <div className="buttons">
            <button href="#" className="btn btn-primary">
            Learn More!
          </button>
          <button
            href="#"
            className="btn btn-outline-warning float-end"
            onClick={() => {
              setBoolean(!boolean);
              //add more favorites functionality
            }}
          >
            {boolean ? (
              <i className="fas fa-heart"></i>
            ) : (
              <i className="far fa-heart"></i>
            )}
          </button>
          </div>
        </div>
      </div>
    );
  };
    
  PlanetCard.propTypes = {
    population: PropTypes.string,
    terrain: PropTypes.string,
    name: PropTypes.string,
  };
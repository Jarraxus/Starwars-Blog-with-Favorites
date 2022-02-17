import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CharacterCard = (props) => {
  const [boolean, setBoolean] = useState(false);

  return (
    <div className="card text-white bg-dark" style={{ width: "400px" }}>
      <img
        className="card-img-top"
        src="https://via.placeholder.com/400x200.png"
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.character.name}</h5>
        <span className="card-text">
          <ul>
            <li>Gender: {props.character.gender}</li>
            <li>Hair Color: {props.character.hair_color}</li>
            <li>Eye Color: {props.character.eye_color}</li>
          </ul>
        </span>
        <div className="buttons">
          <Link to={{ pathname: "/characterinfo/"+props.character.name, state: props.character}}>
            <button href="#" className="btn btn-secondary">
              Learn More!
            </button>
          </Link>
          <button
            href="#"
            className="btn btn-secondary float-end"
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

CharacterCard.propTypes = {
  character: PropTypes.object,
  };

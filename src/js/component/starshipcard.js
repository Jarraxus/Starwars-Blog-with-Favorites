import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const StarshipCard = (props) => {
  const [boolean, setBoolean] = useState(false);

  return (
    <div className="card text-white bg-dark" style={{ width: "400px" }}>
      <img
        className="card-img-top"
        src="https://via.placeholder.com/400x200.png"
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.starship.name}</h5>
        <span className="card-text">
          <ul>
            <li>Model: {props.starship.model}</li>
            <li>Crew: {props.starship.crew}</li>
            <li>Passengers: {props.starship.passengers}</li>
          </ul>
        </span>
        <div className="buttons">
        <Link to={{ pathname: "/starshipinfo/"+props.starship.name, state: props.starship}}>
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

StarshipCard.propTypes = {
  name: PropTypes.string,
  model: PropTypes.string,
  crew: PropTypes.string,
  passengers: PropTypes.string,
};

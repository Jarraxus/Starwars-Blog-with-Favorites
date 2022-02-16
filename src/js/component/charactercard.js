import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const CharacterCard = (props) => {
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
            <li>Gender: {props.gender}</li>
            <li>Hair Color: {props.hair_color}</li>
            <li>Eye Color: {props.eye_color}</li>
          </ul>
        </span>
        <div className="buttons">
          <a href="#" className="btn btn-primary">
            Learn More!
          </a>
          <a href="#" className="btn btn-outline-warning float-end">
            <i className="far fa-heart"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  gender: PropTypes.string,
  hair_color: PropTypes.string,
  eye_color: PropTypes.string,
  name: PropTypes.string,
};

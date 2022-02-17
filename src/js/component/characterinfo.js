import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";

export const CharacterInfo = (props) => {
  //This shiz is hella import
  const info = props.location.state;
  
  return (
    <div className="infocardbody">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://via.placeholder.com/800x600.png"
              className="img-fluid rounded-start"
              alt="This is not the image you're looking for"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-center">{info.name}</h5>
              <div>
                <ul className="list-group">
                  <li className="list-group-item">Gender: {info.gender}</li>
                  <li className="list-group-item">Hair Color: {info.hair_color}</li>
                  <li className="list-group-item">Eye Color: {info.eye_color}</li>
                  <li className="list-group-item">Height: {info.height}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// CharacterInfo.propTypes = {
//   gender: PropTypes.string,
//   hair_color: PropTypes.string,
//   eye_color: PropTypes.string,
//   name: PropTypes.string,
//   height: PropTypes.string,
// };

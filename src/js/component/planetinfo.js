import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const PlanetInfo = (props) => {
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
              <h5 className="card-title text-center">{props.name}Test</h5>
              <div>
                <ul className="list-group">
                  <li className="list-group-item">Population: {}</li>
                  <li className="list-group-item">Terrain: {}</li>
                  <li className="list-group-item">Climate: {}</li>
                  <li className="list-group-item">Gravity: {}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PlanetInfo.propTypes = {
  name: PropTypes.string,
  population: PropTypes.string,
  terrain: PropTypes.string,
  climate: PropTypes.string,
  gravity: PropTypes.string,
};

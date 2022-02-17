import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const CharacterInfo = (props) => {
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
                  <li className="list-group-item">Gender: {}</li>
                  <li className="list-group-item">Hair Color: {}</li>
                  <li className="list-group-item">Eye Color: {}</li>
                  <li className="list-group-item">Height: {}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CharacterInfo.propTypes = {
  gender: PropTypes.string,
  hair_color: PropTypes.string,
  eye_color: PropTypes.string,
  name: PropTypes.string,
  height: PropTypes.string,
};

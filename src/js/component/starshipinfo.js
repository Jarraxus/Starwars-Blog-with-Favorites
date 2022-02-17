import React, { useState, useEffect } from "react";

export const StarshipInfo = (props) => {
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
              <h5 className="card-title text-center">{props.name}Test</h5>
              <div>
                <ul className="list-group">
                  <li className="list-group-item">Model: {info.model}</li>
                  <li className="list-group-item">Manufacturer: {info.manufacturer}</li>
                  <li className="list-group-item">Crew: {info.crew}</li>
                  <li className="list-group-item">Passengers: {info.passengers}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
import React from "react";

export const Details = (props) => {
  const object = props.location.state;

  let currentDetails = [];
  for (let key in object.entity) {
    currentDetails.push([`${key}`, `${object.entity[key]}`]);
  }

  return (
    <div className="card text-white bg-dark mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src="https://via.placeholder.com/800x600.png"
            className="card-img"
            alt="Card image cap"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title"></h5>
            <ul className="d-flex flex-column">
                {currentDetails.map((item, index) => {
                  return <li key={index}><strong>{`${item[0]}:`} </strong>{`${item[1]}`}</li>
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

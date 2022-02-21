import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Cards = ({ cardData }) => {
  const [boolean, setBoolean] = useState(false);
 
  return (
    <div>
      {cardData ? (
        <div className="card text-white bg-dark" style={{ width: "25rem" }}>
          <img
            className="card-img-top"
            src="https://via.placeholder.com/400x200.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{cardData.name}</h5>
            <ul className="p-0 mb-3">
              <li>
                {cardData.prop1} {cardData.value1}
              </li>
              <li>
                {cardData.prop2} {cardData.value2}
              </li>
              <li>
                {cardData.prop3} {cardData.value3}
              </li>
            </ul>
            <Link
              to={{ pathname: `details/${cardData.name}`, state: cardData }}
            >
              <button href="#" className="btn btn-primary">
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
      ) : (
        <h5>loading...</h5>
      )}
    </div>
  );
};

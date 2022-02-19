import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = (props) => {
    const [boolean, setBoolean] = useState(false);
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
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
            <h5 className="card-title">{props.value1}</h5>
            <p className="card-text">
              {props.prop2}: {props.value2}
              <br></br>
              {props.prop3}: {props.value3}
              <br></br>
              {props.prop4}: {props.value4}
              <br></br>
            </p>
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
    </div>
  );
};

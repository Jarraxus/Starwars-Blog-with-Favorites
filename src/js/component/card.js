import React, { useState, useEffect } from "react";

export const Card = () => {
    return(
		<div className="card" style={{width: 250}}>
		<img
		  className="card-img-top"
		  src="https://via.placeholder.com/400x200.png"
		  alt="Card image cap"
		></img>
		<div className="card-body">
		  <h5 className="card-title">Name</h5>
		  <span className="card-text">
			<ul>
			  <li>Gender: </li>
			  <li>Hair Color: </li>
			  <li>Eye Color: </li>
			</ul>
		  </span>
		  <a href="#" className="btn btn-primary">
			Learn More!
		  </a>
		</div>
	  </div>);
	};

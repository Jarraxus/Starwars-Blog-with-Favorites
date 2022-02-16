import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      <Link className="logobanner" to="/">
        <span className="navbar-brand mb-0 h1">
          <i className="fab fa-galactic-republic fa-3x"></i>
        </span>
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <button type="button" className="btn btn-primary">
            Favorites <span className="badge badge-light">4</span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

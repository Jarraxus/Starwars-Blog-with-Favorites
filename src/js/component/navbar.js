import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">&nbsp;&nbsp;&nbsp;Star Wars Reading Blog</span>
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

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      <Link className="logobanner" to="/">
        <span className="navbar-brand mb-0 h1">
          <i className="fab fa-galactic-republic fa-3x"></i>
        </span>
      </Link>
      <div className="ml-auto">
          <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {store.favorites.map((fav, i) => <li key={i}>{fav}</li>)}
          </ul>
        </div>
      </div>
    </nav>
  );
};

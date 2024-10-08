import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext); // aca llamo al contexto global, esto lo puedo hacer en cualquier componente

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container p-3">
        <NavLink to="/" className="btn btn-outline-primary">
          Home
        </NavLink>
        {user ? (
          <NavLink to="/dashboard" className="btn btn-outline-warning">
            Dashboard
          </NavLink>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/auth";
import { limpiarRegistros } from "../actions/nomina";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(limpiarRegistros());
    dispatch(logout());
  };

  return (
    <>
      <nav className="cyan darken-4">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo left">
            {" "}
            &nbsp; Requiem
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a
                href="/"
                className="btn deep-orange accent-4 waves-effect waves-light"
                onClick={handleLogout}
              >
                <i class="material-icons right">exit_to_app</i>
                logout
              </a>
            </li>
          </ul>
          <ul id="nav-mobile" className="right hide-on-large-only">
            <li>
              <a
                href="/"
                className="btn deep-orange accent-4 waves-effect waves-light"
                onClick={handleLogout}
              >
                <i class="material-icons">exit_to_app</i>
                
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

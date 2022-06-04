import React, { useState } from "react";
import { useDispatch } from "react-redux";

import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";

import { googleLogin, emailAndPasswordLogin } from "../actions/auth";

const LoginScreen = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const handleChange = (event) => {
    const value = event.target.value;

    setData({
      ...data,
      [event.target.name]: value,
    });
  };

  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  const handleEmailLogin = (event) => {
    event.preventDefault();

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }
    if (password.trim().length < 6) {
      return;
    }

    dispatch(emailAndPasswordLogin(email, password));
  };

  return (
    <div className="container animate__animated animate__fadeIn">
      <h3>Login</h3>
      <hr />

      <div className="row container ">
        <form className="col s12" onSubmit={handleEmailLogin}>
          <div className="row">
            {/* Correo */}
            <div className="input-field col s12 ">
              <i className="material-icons prefix ">email</i>
              <input
                onChange={handleChange}
                value={email}
                name="email"
                id="icon_prefix1"
                className="materialize-textarea "
                type="email"
              />
              <label htmlFor="icon_prefix1">Email</label>
            </div>
            {/* Contraseña */}
            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                onChange={handleChange}
                value={password}
                name="password"
                id="icon_prefix2"
                className="materialize-textarea"
                type="password"
              />
              <label htmlFor="icon_prefix2">Contraseña</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light cyan darken-4"
            type="submit"
          >
            <i className="material-icons right">send</i>
            Enviar
          </button>
          <hr />
          <GoogleButton onClick={handleGoogleLogin} />
          <Link to="/auth/register">Register with email...</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;

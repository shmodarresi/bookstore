import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { authActions } from "../../actions";

import "./login.scss";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const { username, password } = inputs;
  const loggingIn = useSelector((state: any) => state.authReducer.loggedIn);
  const dispatch = useDispatch();

  // reset login status
  useEffect(() => {
    dispatch(authActions.logout());
  }, [dispatch]);

  const onInputChanges = (e: any) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    if (username && password) {
      dispatch(authActions.login(username, password));
    }
  };

  if (loggingIn) {
    return <Redirect to="/user" />
  }

  return (
    <Fragment>
      <div className="sidenav bg-dark">
        <div className="login-main-text">
          <h2>
            Book Store
            <br /> Login Page
          </h2>
          <p>Login from here to access your dashboard.</p>
        </div>
      </div>
      <div className="main">
        <div className="col-md-6 col-sm-12">
          <div className="login-form py-3">
            <form className="form-container" onSubmit={onFormSubmit}>
              <div className="form-group">
                <label>User Name</label>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={inputs.username}
                  onChange={onInputChanges}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={inputs.password}
                  onChange={onInputChanges}
                />
              </div>
              <div className="d-flex align-items-center">
                <button type="submit" className="btn btn-black mr-1">
                  Login
                </button>
                { loggingIn === false  && 
                  <div className="error-msg">
                    Username or Password is incorrect
                </div>}
                {/* { typeof loggingIn === Object && <div className="error-msg">Connection to the server failed</div>} */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;

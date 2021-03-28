import React, { Component } from "react";
import "../styles/Login.css";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../redux/Action/authaction";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  login(e) {
    e.preventDefault();
    this.props.login(this.state);
  }
  render() {
    return (
      <div className="login-main">
        {this.props.isAuthenticated ? <Redirect to="/" /> : ""}
        <form onSubmit={(e) => this.login(e)} className="form">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => this.setState({ email: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              autoComplete="on"
              onChange={(e) => this.setState({ password: e.target.value })}
              required
            />
          </div>
          <div className="button-register">
            New user?{" "}
            <Link to="/register">
              <span style={{ color: "blue" }}>Register now</span>
            </Link>
          </div>
          <div className="button-register">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (reducState) => {
  // console.log(reducState)
  let state = reducState.users;
  //    console.log(state)
  return {
    users: state.users,
    isAuthenticated: state.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userCreds) => dispatch(login(userCreds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

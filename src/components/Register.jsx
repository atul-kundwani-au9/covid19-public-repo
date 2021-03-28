import React, { Component } from "react";
import { Link } from "react-router-dom";
import { register } from "../redux/Action/authaction";
import "../styles/Login.css";
import { connect } from "react-redux";

class Register extends Component {
  state = {
    fullname: "",
    email: "",
    password: "",
    history: [],
  };
  render() {
    return (
      <div className="login-main">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.register(this.state);
          }}
        >
          <div className="form-group">
            <label htmlFor="name">Fullname</label>
            <input
              className="form-control"
              type="text"
              id="name"
              aria-describedby="emailHelp"
              onChange={(e) => this.setState({ fullname: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              className="form-control"
              type="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => this.setState({ email: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              className="form-control"
              type="password"
              id="exampleInputPassword1"
              autoComplete="on"
              minlength="8"
              onChange={(e) => this.setState({ password: e.target.value })}
              required
            />
          </div>
          <div className="button-register">
            Existing user?{" "}
            <Link to="/login">
              <span style={{ color: "blue" }}>Login now</span>
            </Link>
          </div>
          <div className="button-register">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={() => {
                // console.log(this.state.password.length);
                if (
                  this.state.fullname !== "" &&
                  this.state.email !== "" &&
                  this.state.password !== "" &&
                  this.state.password.length >= 8
                ) {
                  alert("Registered sussessfully ..Please Login");
                }
              }}
            >
              {" "}
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: (userDetails) => dispatch(register(userDetails)),
  };
};

export default connect(null, mapDispatchToProps)(Register);

import axios from "axios";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link, Navigate } from "react-router-dom";
import NavBar from "./NavBar";
import Preloader from "./Preloader";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      email: "",
      password: "",
      usertype: "",
      access_token: "",
      loader: false,
    };
  }
  InputHandlar = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  SubmitHanler = async (e) => {
    e.preventDefault();
    this.setState({
      loader: true,
    });
    await axios
      .post("/api/login", this.state)
      .then((res) => {
        this.setState({
          fullName: res.data.name,
          email: res.data.email,
          phoneNumber: res.data.phoneNumber,
          password: res.data.password,
          usertype: res.data.usertype,
          access_token: res.data.access_token,
          loader: false,
        });
      })
      .catch((error) => {
        // Error
        if (error.response.status == 401) {
          alert("Unauthorized");
        }
        this.setState({
          loader: false,
        });
      });
  };
  render() {
    if (this.state.usertype == "0") {
      sessionStorage.setItem("access_token_User", this.state.access_token);
      sessionStorage.setItem("email", this.state.email);
      sessionStorage.setItem("fullName", this.state.fullName);
      sessionStorage.setItem("phoneNumber", this.state.phoneNumber);
      return (
        <Navigate
          to={{
            pathname: "/User",
          }}
        />
      );
    }
    if (this.state.usertype == "1") {
      sessionStorage.setItem("access_token_Admin", this.state.access_token);
      sessionStorage.setItem("email", this.state.email);
      sessionStorage.setItem("fullName", this.state.fullName);
      sessionStorage.setItem("phoneNumber", this.state.phoneNumber);
      return (
        <Navigate
          to={{
            pathname: "/admin",
          }}
        />
      );
    }
    if (this.state.usertype == "2") {
      sessionStorage.setItem("access_token_Retailer", this.state.access_token);
      sessionStorage.setItem("email", this.state.email);
      sessionStorage.setItem("fullName", this.state.fullName);
      sessionStorage.setItem("phoneNumber", this.state.phoneNumber);
      return (
        <Navigate
          to={{
            pathname: "/IndexRetailer",
          }}
        />
      );
    }
    var email = "";

    if (this.state.email == "The email field is required.") {
      email = (
        <>
          <small className="danger">The email field is required</small>
        </>
      );
    }
    var password = "";
    if (this.state.password == "The password field is required.") {
      password = (
        <>
          <small className="danger">The password field is required</small>
        </>
      );
    }

    return (
      <>
        <Helmet>
          <title>Jumpstart | Login</title>
        </Helmet>
        <NavBar />

        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    body {\n  background: #007bff;\n  background: linear-gradient(to right, #0062E6, #33AEFF);\n}\n\n.btn-login {\n  font-size: 0.9rem;\n  letter-spacing: 0.05rem;\n  padding: 0.75rem 1rem;\n}\n\n.btn-google {\n  color: white !important;\n  background-color: #ea4335;\n}\n\n.btn-facebook {\n  color: white !important;\n  background-color: #3b5998;\n}\n\n",
          }}
        />
        {this.state.loader ? <Preloader /> : null}
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card border-0 shadow rounded-3 my-5">
                <div className="card-body p-4 p-sm-5">
                  <h5 className="card-title text-center mb-5 fw-light fs-5">
                    Sign In
                  </h5>
                  <form onSubmit={this.SubmitHanler}>
                    <div className="form-floating mb-3">
                      <small>{email}</small>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={this.InputHandlar}
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <small>{password}</small>
                      <input
                        type="password"
                        name="password"
                        onChange={this.InputHandlar}
                        className="form-control"
                        id="floatingpassword"
                        placeholder="password"
                      />
                      <label htmlFor="floatingpassword">password</label>
                    </div>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="rememberpasswordCheck"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="rememberpasswordCheck"
                      >
                        Remember password
                      </label>
                    </div>

                    <div className="d-grid">
                      <button
                        className="btn btn-primary btn-login text-uppercase fw-bold"
                        type="submit"
                      >
                        Sign in
                      </button>
                    </div>
                    {/* Already Registered */}
                    <div className="text-center w-100">
                      <p className="text-muted font-weight-bold">
                        New Account:
                        <a href="/Register" className="text-primary ml-2">
                          Create an Account
                        </a>
                      </p>
                      <p className="text-muted font-weight-bold">
                        Forget Password:
                        <a href="/forget" className="text-primary ml-2">
                          forget password!
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Login;

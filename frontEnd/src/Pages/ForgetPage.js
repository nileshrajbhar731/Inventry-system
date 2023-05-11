import React, { Component } from "react";
import { Helmet } from "react-helmet";
import NavBar from "./NavBar";
import axios from "axios";

export default class ForgetPage extends Component {
    constructor() {
        super();
        this.state = {
          email: "",
          password: "",
          Cpassword:"",
          emailPanal:false,
          passwordPanal:false,
        };
      }
      InputHandlar = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
    
      SubmitEmail = (e) => {
        e.preventDefault();
       alert("email")
       this.setState({
        emailPanal: true,
      });
      };
      SubmitCode=(e)=>{
        e.preventDefault();
        alert("code")
        this.setState({
            passwordPanal: true,
       });
      }
      SubmitNewPassword = (e) => {
        e.preventDefault();
       alert("update")
      };
  render() {
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
    var Cpassword = "";
    if (this.state.password != this.state.Cpassword) {
        Cpassword = (
        <>
          <small className="danger">The Password Not Match!</small>
        </>
      );
    }

    return (
      <>
        <Helmet>
          <title>Jumpstart | Forget Password</title>
        </Helmet>
        <NavBar />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    body {\n  background: #007bff;\n  background: linear-gradient(to right, #0062E6, #33AEFF);\n}\n\n.btn-login {\n  font-size: 0.9rem;\n  letter-spacing: 0.05rem;\n  padding: 0.75rem 1rem;\n}\n\n.btn-google {\n  color: white !important;\n  background-color: #ea4335;\n}\n\n.btn-facebook {\n  color: white !important;\n  background-color: #3b5998;\n}\n\n",
          }}
        />
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card border-0 shadow rounded-3 my-5">
                <div className="card-body p-4 p-sm-5">
                  <h5 className="card-title text-center mb-5 fw-light fs-5">
                    Forget Password!
                  </h5>
                  {
                    this.state.emailPanal === false?
                  <form onSubmit={this.SubmitEmail}>
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

                    <div className="d-grid">
                      <button
                        className="btn btn-primary btn-login text-uppercase fw-bold"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                  :
                  this.state.passwordPanal === false ?
                  <form onSubmit={this.SubmitCode}>
                  <div className="form-floating mb-3">
                    <small>{password}</small>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={this.InputHandlar}
                      placeholder="Enter The password"
                    />
                    <label htmlFor="floatingInput">New password</label>
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                     Code
                    </button>
                  </div>
                </form>
                  :
                  <form onSubmit={this.SubmitNewPassword}>
                  <div className="form-floating mb-3">
                    <small>{password}</small>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={this.InputHandlar}
                      placeholder="Enter The password"
                    />
                    <label htmlFor="floatingInput">New password</label>
                  </div>
                  <div className="form-floating mb-3">
                    <small>{Cpassword}</small>
                    <input
                      type="password"
                      className="form-control"
                      name="Cpassword"
                      onChange={this.InputHandlar}
                      placeholder="Enter The Confirm password"
                    />
                    <label htmlFor="floatingInput">Confirm password</label>
                  </div>

                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Update Password
                    </button>
                  </div>
                </form>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

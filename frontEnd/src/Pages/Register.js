import axios from "axios";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Navigate } from "react-router-dom";
import NavBar from "./NavBar";

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      cpassword: "",
      usertype: "",
      active: 0,
      value:false
    };
  }

  InputHandlar = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  SubmitHandlar = async (e) => {
    e.preventDefault();
    if (
      this.state.fullName == "" ||
      this.state.email == "" ||
      this.state.phoneNumber == "" ||
      this.state.password == ""
    ) {
      alert("please fill all required fields");
    } else {
      if (this.state.password == this.state.cpassword) {

        const res = await axios.get(`/api/register/Find/${this.state.email}`);
        var data= Object.values(res.data.message);
        console.log(data.length);

if (data.length==1) {
  alert("email Id Allreday Exits!"+": "+this.state.email)
} else {
          await axios
          .post("/api/register", this.state)
          .then((res) => {
            console.log(res);
            alert(res.data.message)
            this.setState({
              value:true
            })

          })
          .catch((err) => {
            console.log(err);
          });
}
      } else {
        alert("password not match")
      }

    }
  };

  render() {
    if (this.state.value==true) {
      return <Navigate
        to={{
          pathname: "/login",
        }} />
    }
    return (
      <>
        <Helmet>
          <title>Jumpstart | Register</title>
        </Helmet>
        <NavBar />
        <main className="my-form">
          <div className="cotainer">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">Register</div>
                  <div className="card-body">
                    <form name="my-form" onSubmit={this.SubmitHandlar}>
                      <div className="form-group row">
                        <label
                          htmlFor="full_name"
                          className="col-md-4 col-form-label text-md-right"
                        >
                          Full Name
                        </label>
                        <div className="col-md-6">
                          <input
                            type="text"
                            id="fullName"
                            onChange={this.InputHandlar}
                            className="form-control"
                            name="fullName"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="email"
                          className="col-md-4 col-form-label text-md-right"
                        >
                          E-Mail Address
                        </label>
                        <div className="col-md-6">
                          <input
                            type="text"
                            id="email"
                            onChange={this.InputHandlar}
                            className="form-control"
                            name="email"
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label
                          htmlFor="phone_number"
                          className="col-md-4 col-form-label text-md-right"
                        >
                          Phone Number
                        </label>
                        <div className="col-md-6">
                          <input
                            type="text"
                            id="phone_number"
                            onChange={this.InputHandlar}
                            name="phoneNumber"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="phone_number"
                          className="col-md-4 col-form-label text-md-right"
                        >
                          User Type
                        </label>
                        <div className="col-md-6">

                          <select
                            className="form-control"
                            onChange={this.InputHandlar}
                            name="usertype">
                            <option selected disabled>user type</option>
                            <option value="0">User</option>
                            <option value="2">Retailer</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group row">
                        <label
                          htmlFor="password"
                          className="col-md-4 col-form-label text-md-right"
                        >
                          Password
                        </label>
                        <div className="col-md-6">
                          <input
                            type="text"
                            id="password"
                            onChange={this.InputHandlar}
                            name="password"
                            className="form-control"
                            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,8}$"
                            title="8 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label
                          htmlFor="cpassword"
                          className="col-md-4 col-form-label text-md-right"
                        >
                          Cpassword
                        </label>
                        <div className="col-md-6">
                          <input
                            type="text"
                            id="cpassword"
                            onChange={this.InputHandlar}
                            name="cpassword"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-6 offset-md-4">
                        <button type="submit" className="btn btn-primary">
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

      </>
    );
  }
}

export default Register;

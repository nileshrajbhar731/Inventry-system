import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default class UserCart extends Component {
  render() {
    var Data = sessionStorage.getItem("access_token_User");
    var DataDisplay = "";
    if (Data == null) {
      DataDisplay = (
        <>
          <div className="container-fluid row justify-content-center">
            <div>
              <img
                src="https://desainkaosmurah.com/files/image/cache/img_user/user_1/20220818092914_fathiyatul_fitri-481_error_404_ilustration-bg-800x600.png"
                className=""
              />
              <div className="container-fluid row justify-content-center">
                <Link to="/">
                  <button type="button" class="btn btn-outline-danger">
                    Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      DataDisplay = (
        <>
          <Navbar />

       
        </>
      );
    }
    return (
      <>
        <Helmet>
          <title>User</title>
        </Helmet>
        {DataDisplay}
      </>
    );
  }
}

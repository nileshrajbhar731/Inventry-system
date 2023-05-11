import React, { Component } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

export class ErrorPage extends Component {
  render() {
    return (
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
  }
}

export default ErrorPage;

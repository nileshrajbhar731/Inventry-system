import React, { Component } from "react";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
import UserFruits from "./UserFruits";
import UserGrocery from "./UserGrocery";
import UserVegitables from "./UserVegitables";

export class IndexRetailer extends Component {


  render() {
    var Data = sessionStorage.getItem("access_token_Retailer");
    var DataDisplay = "";
    if (Data == null) {
      DataDisplay = <>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Please_log_in_image.png" width="100%" height="100%" />
      </>;
    } else {
      DataDisplay = (
        <>
          <Navbar />
          <UserFruits />
          <UserGrocery />
          <UserVegitables />
        </>
      )
    }
    return (
      <>
        <Helmet>
          <title>Retailer</title>
        </Helmet>
        {DataDisplay}
      </>
    );
  }
}

export default IndexRetailer;

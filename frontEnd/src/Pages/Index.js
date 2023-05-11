import React, { Component } from "react";
import { Helmet } from "react-helmet";
import NavBar from "./NavBar";

export class Index extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Jumpstart</title>
        </Helmet>
        <NavBar />
        <div className="container-fluid">
          <div>
            <img src="https://www.corporatevision-news.com/wp-content/uploads/2021/12/Inventory.jpg" id="indexPageImg"/>
          </div>
        </div>
      </>
    );
  }
}

export default Index;

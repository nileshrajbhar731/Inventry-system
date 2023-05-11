import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import NavBar from '../NavBar'
import UserInformation from './UserInformation'

export class IndexInformation extends Component {
  render() {
    var Data = sessionStorage.getItem("access_token_Admin");
    var DataDisplay = "";
    if (Data == null) {
      DataDisplay = <>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Please_log_in_image.png" width="100%" height="100%" />
      </>;
    } else {
      DataDisplay = (
        <>
          <NavBar />
          <UserInformation />
        </>
      )
    }
    return (
      <>
        <Helmet>
          <title>Admin | Information | UserInformation</title>
        </Helmet>
        {DataDisplay}

      </>
    )
  }
}

export default IndexInformation
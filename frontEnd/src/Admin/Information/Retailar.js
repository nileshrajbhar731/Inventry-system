import axios from "axios";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";

export class Retailer extends Component {
  constructor() {
    super();
    this.state = {
      // /register-show
      ShowData: [],
    };
  }

  async componentDidMount() {
    const res = await axios.get("/api/register-show");
    console.log(res.data.message);
    this.setState({
      ShowData: res.data.message,
    });
  }

  render() {
    var id = 1;
    var message = "";
    var userType = "";
    var tableData = this.state.ShowData.map((e) => {
      var active = e.active;
      if (active == 0) {
        message = "active"
      } else {
        message = "Reactive"
      }
      switch (e.usertype) {
        case 0:
          userType = "User";
          break;
        case 1:
          userType = "Admin";
          break;
        case 2:
          userType = "Retailer"

          break;

        default:
          break;
      }
      return userType==="Retailer" ? 
      
      (
        <>
          <tr key={e.id}>
            <th>{id++}</th>
            <th>{e.fullName}</th>
            <th>{e.phoneNumber}</th>
            <th>{e.email}</th>
            <th>{userType}</th>
            <th>{message}</th>
            <th>{e.created_at}</th>
          </tr>
        </>
      )
      : null 
    });
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
          <section className="pcoded-main-container">
            <div className="pcoded-wrapper">
              <div className="pcoded-content">
                <div className="pcoded-inner-content">
                  {/* [ breadcrumb ] start */}
                  <div className="page-header">
                    <div className="page-block">
                      <div className="row align-items-center">
                        <div className="col-md-12">
                          <div className="page-header-title">
                            <h5 className="m-b-10">Retailer Information</h5>
                          </div>
                          <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                              <Link to="/admin">
                                <i className="feather icon-home" />
                              </Link>
                            </li>
                            <li className="breadcrumb-item">
                              <Link to="">Information</Link>
                            </li>
                            <li className="breadcrumb-item">
                              <Link to="">Retailer Information</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* [ breadcrumb ] end */}
                  <div className="main-body">
                    <div className="page-wrapper">
                      {/* [ Main Content ] start */}
                      <div className="row">
                        {/* [ Hover-table ] start */}
                        <div className="col-xl-12">
                          <div className="card">
                            <div className="card-header">
                              <h5>Retailer Information</h5>
                            </div>
                            <div className="card-block table-border-style">
                              <div className="table-responsive">
                                <table className="table table-hover">
                                  <thead>
                                    <tr>
                                      <th>#</th>
                                      <th>First Name</th>
                                      <th>Last Name</th>
                                      <th>Username</th>
                                      <th>User Type</th>
                                      <th>Active</th>
                                      <th>created_at</th>
                                    </tr>
                                  </thead>
                                  <tbody>{tableData}</tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* [ Hover-table ] end */}
                        {/* <div className="col-xl-12">
                        <div className="card">
                          <div className="card-header">
                            <h5>user leve account Information</h5>
                          </div>
                          <div className="card-block table-border-style">
                            <div className="table-responsive">
                              <table className="table table-hover">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="card">
                          <div className="card-header">
                            <h5>User trmp block Information</h5>
                          </div>
                          <div className="card-block table-border-style">
                            <div className="table-responsive">
                              <table className="table table-hover">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      </div>
                      {/* [ Main Content ] end */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )
    }
    return (
      <>
        <Helmet>
          <title>Admin | Information | Retailer</title>
        </Helmet>
        {DataDisplay}

      </>
    );
  }
}

export default Retailer;

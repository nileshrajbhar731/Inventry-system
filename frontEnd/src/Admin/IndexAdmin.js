import React, { Component } from "react";
import NavBar from "./NavBar";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";
export class IndexAdmin extends Component {
  constructor() {
    super();
    this.state = {
      // /register-show
      ShowData: [],
      showdatacod: [],
      Onlineshowdata: [],
    };
  }

  async componentDidMount() {
    const res = await axios.get("/api/register-show");
    console.log(res.data.message);
    this.setState({
      ShowData: res.data.message,
    });
    const rescod = await axios.get("/api/Order-show");
    this.setState({
      showdatacod: rescod.data.message,
    });
    console.log(rescod.data.message);
    const Onlineres = await axios.get("/api/OnlineOrder-show");
    this.setState({
      Onlineshowdata: Onlineres.data.message,
    });
  }

  render() {
    var id = 1;
    var message = "";
    var userType = "";
    var tableData = this.state.ShowData.map((e) => {
      var active = e.active;
      if (active == 0) {
        message = "active";
      } else {
        message = "Reactive";
      }

      switch (e.usertype) {
        case 0:
          userType = "User";
          break;
        case 1:
          userType = "Admin";
          break;
        case 2:
          userType = "Retailer";
          break;

        default:
          break;
      }
      return (
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
      );
    });
    var id = 1;
    var OnlineId = 1;
    var Order = this.state.showdatacod.map((e) => {
      return (
        <>
          <tr>
            <th scope="row">{id++}</th>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.phoneNumber}</td>
            <td>{e.productType}</td>
            <td>{e.productName}</td>
            <td>{e.productQuantity}</td>
            <td>{e.productPrice}</td>
            <td>{e.productDeliveryAddress}</td>
            <td>{e.paymentMethod}</td>
            <td>{e.productDeliveryStatus}</td>
            <td>{e.productDeliveryDate}</td>
          </tr>
        </>
      );
    });
    // tota paymemnt
    let totalPriceCod = 0;
    this.state.showdatacod.forEach((item) => {
      totalPriceCod += parseInt(item.productPrice);
    });

    var OnlineOrder = this.state.Onlineshowdata.map((e) => {
      return (
        <>
          <tr>
            <th scope="row">{OnlineId++}</th>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.phoneNumber}</td>
            <td>{e.productType}</td>
            <td>{e.productName}</td>
            <td>{e.productQuantity}</td>
            <td>{e.productPrice}</td>
            <td>{e.productDeliveryAddress}</td>
            <td>{e.paymentMethod}</td>
            <td>{e.productDeliveryStatus}</td>
            <td>{e.productDeliveryDate}</td>
            <td>
              <Link to="/PaymentInformation" className="btn btn-success">
                Payment Details
              </Link>
            </td>
          </tr>
        </>
      );
    });

    // tota paymemnt
    let totalPriceOnline = 0;
    this.state.Onlineshowdata.forEach((item) => {
      totalPriceOnline += parseInt(item.productPrice);
    });

    var Data = sessionStorage.getItem("access_token_Admin");
    var DataDisplay = "";
    if (Data == null) {
      DataDisplay = (
        <>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Please_log_in_image.png"
            width="100%"
            height="100%"
          />
        </>
      );
    } else {
      DataDisplay = (
        <>
          <NavBar />

          <section className="pcoded-main-container">
            <div className="pcoded-wrapper">
              <div className="pcoded-content">
                <div className="pcoded-inner-content">
                  {/* [ breadcrumb ] end */}
                  <div className="main-body">
                    <div className="page-wrapper">
                      {/* [ Main Content ] start */}
                      <div className="row">
                        {/* [ Hover-table ] start */}
                        <div className="col-xl-12">
                          <div className="card">
                            <div className="card-header">
                              <h5>Information</h5>
                            </div>
                            <div className="card-block table-border-style">
                              <div class="row">
                                <div class="col-md-4 stretch-card grid-margin">
                                  <div class="card bg-warning text-dark">
                                    <div class="card-body">
                                      <h4 class="font-weight-normal mb-3">
                                        Total User
                                      </h4>
                                      <h2 class="font-weight-normal mb-4">
                                        {this.state.ShowData?.length}
                                      </h2>
                                      <p class="card-text">
                                        <span style={{ fontSize: 20 }}>
                                          Total Payment:
                                        </span>
                                        <span style={{ fontSize: 30 }}>
                                        ₹ {totalPriceOnline + totalPriceCod}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4 stretch-card grid-margin">
                                  <div class="card bg-info text-white">
                                    <div class="card-body">
                                      <h4 class="font-weight-normal mb-3">
                                        Total COD Payment
                                      </h4>
                                      <h2 class="font-weight-normal mb-4">
                                        <span style={{ fontSize: 30 }}>₹</span>{" "}
                                        {totalPriceCod}
                                      </h2>
                                      <p class="card-text">
                                        <span style={{ fontSize: 20 }}>
                                          {" "}
                                          Total Order:{" "}
                                        </span>
                                        <span style={{ fontSize: 30 }}>
                                          {this.state.showdatacod?.length}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4 stretch-card grid-margin">
                                  <div class="card bg-success text-white">
                                    <div class="card-body">
                                      <h4 class="font-weight-normal mb-3">
                                        Total Online Payment
                                      </h4>
                                      <h2 class="font-weight-normal mb-4">
                                        <span style={{ fontSize: 30 }}>₹</span>{" "}
                                        {totalPriceOnline}
                                      </h2>
                                      <p class="card-text">
                                        <span style={{ fontSize: 20 }}>
                                          {" "}
                                          Total Order:{" "}
                                        </span>
                                        <span style={{ fontSize: 30 }}>
                                          {this.state.Onlineshowdata?.length}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="card">
                            <div className="card-header">
                              <h5>User Information</h5>
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
                        <div className="col-xl-12">
                          <div className="card">
                            <div className="card-header">
                              <h5>COD Order received Information</h5>
                            </div>
                            <div className="card-block table-border-style">
                              <div className="table-responsive">
                                <table className="table table-hover">
                                  <thead>
                                    <tr>
                                      <th>#</th>
                                      <th>Name</th>
                                      <th>email</th>
                                      <th>phoneNumber</th>
                                      <th>productType</th>
                                      <th>productName</th>
                                      <th>productQuantity</th>
                                      <th>productPrice</th>
                                      <th>productDeliveryAddress</th>
                                      <th>paymentMethod</th>
                                      <th>productDeliveryStatus</th>
                                      <th>productDeliveryDate</th>
                                    </tr>
                                  </thead>
                                  <tbody>{Order}</tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="card">
                            <div className="card-header">
                              <h5>Online Order received Information</h5>
                            </div>
                            <div className="card-block table-border-style">
                              <div className="table-responsive">
                                <table className="table table-hover">
                                  <thead>
                                    <tr>
                                      <th>#</th>
                                      <th>Name</th>
                                      <th>email</th>
                                      <th>phoneNumber</th>
                                      <th>productType</th>
                                      <th>productName</th>
                                      <th>productQuantity</th>
                                      <th>productPrice</th>
                                      <th>productDeliveryAddress</th>
                                      <th>paymentMethod</th>
                                      <th>productDeliveryStatus</th>
                                      <th>productDeliveryDate</th>
                                      <th>Payment</th>
                                    </tr>
                                  </thead>
                                  <tbody>{OnlineOrder}</tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* [ Main Content ] end */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }
    return (
      <>
        <Helmet>
          <title>Admin</title>
        </Helmet>
        {DataDisplay}
      </>
    );
  }
}

export default IndexAdmin;

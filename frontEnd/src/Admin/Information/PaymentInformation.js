import axios from "axios";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";

class PaymentInformation extends Component {
  constructor() {
    super();
    this.state = {
      showdata: [],
      Onlineshowdata: [],
    };
  }

  async componentDidMount() {
    const res = await axios.get("/api/Order-show");
    this.setState({
      showdata: res.data.message,
    });
    console.log(res.data.message);
    const Onlineres = await axios.get("/api/OnlineOrder-show");
    this.setState({
      Onlineshowdata: Onlineres.data.message,
    });
  }

  render() {
    var id = 1;
    var OnlineId = 1;
    var Order = this.state.showdata.map((e) => {
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
          </tr>
        </>
      );
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
            <td>{e.username}</td>
            <td>{e.cardNumber}</td>
            <td>{e.month}</td>
            <td>{e.year}</td>
            <td>{e.cvv}</td>
          </tr>
        </>
      );
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
                            <h5 className="m-b-10">Payment Information</h5>
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
                              <Link to="">Payment Information</Link>
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
                              <h5>COD Order Payment Information</h5>
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
                              <h5>Online Order Payment Information</h5>
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
                                      <th>Card Owener</th>
                                      <th>cardNumber</th>
                                      <th>month</th>
                                      <th>year</th>
                                      <th>cvv</th>
                                    </tr>
                                  </thead>
                                  <tbody>{OnlineOrder}</tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* [ Hover-table ] end */}
                        {/* <div className="col-xl-12">
                        <div className="card">
                          <div className="card-header">
                            <h5>Order delivary drop Information</h5>
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
                            <h5>Order clncle Information</h5>
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
          <title>Admin | Information | PaymentInformation</title>
        </Helmet>
        {DataDisplay}

      </>
    );
  }
}

export default PaymentInformation;

import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { Helmet } from "react-helmet";

class IndexHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showdata: [],
      Onlineshowdata: [],
    };
  }

  async componentDidMount() {
    var emailFind = sessionStorage.getItem("email");
    const res = await axios.get(`/api/Find/${emailFind}`);
    var data = Object.values(res.data.message);
    this.setState({
      showdata: data,
    });

    const Onlineres = await axios.get(`/api/OnlineFind/${emailFind}`);
    var Onlinedata = Object.values(Onlineres.data.message);
    this.setState({
      Onlineshowdata: Onlinedata,
    });
  }

  render() {
    var id = 1;
    var Order = this.state.showdata.map((e) => {
      return (
        <>
          <tr key={e.id}>
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
    //
    var m = this.state.showdata;
    console.log(m);
    // var jio = m.split(" ");
    // var jino = jio[0];
    // console.log(jio[0]);

    var OnlineId = 1;
    var OnlineOrder = this.state.Onlineshowdata.map((e) => {
      return (
        <>
          <tr key={e.id}>
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
            <td>{e.username}</td>
            <td>{e.cardNumber}</td>
          </tr>
        </>
      );
    });
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
                            <h5 className="m-b-10">Order Information</h5>
                          </div>
                          <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                              <Link to="/User">
                                <i className="feather icon-home" />
                              </Link>
                            </li>
                            <li className="breadcrumb-item">
                              <Link to="">Information</Link>
                            </li>
                            <li className="breadcrumb-item">
                              <Link to="">Order Information</Link>
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
                        <div className="col-xl-12" id="cod">
                          <div className="card">
                            <div className="card-header">
                              <h5>COD Order Information</h5>
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
                              <h5>Online Order Information</h5>
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
                                      <th>Uername</th>
                                      <th>Card No</th>
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
          <title>User | Information | Order Information</title>
        </Helmet>
        {DataDisplay}
      </>
    );
  }
}

export default IndexHistory;

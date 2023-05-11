import axios from "axios";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../Navbar";

export class PaymentGetway extends Component {
  constructor() {
    super();
    this.state = {
      // data
      productType: "",
      productName: "",
      productQuantity: "",
      productPrice: "",
      productDeliveryAddress: "",
      // card
      username: "",
      cardNumber: "",
      month: "",
      year: "",
      cvv: "",
      valide: false,
    };
  }
  HendelInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  ADDCard = async () => {
    this.setState({
      productType: this.state.productType,
      productName: this.state.productName,
      productQuantity: this.state.productQuantity,
      productPrice: this.state.productPrice,
      productDeliveryAddress: this.state.productDeliveryAddress,

      // User Card
      username: this.state.username,
      cardNumber: this.state.cardNumber,
      month: this.state.month,
      year: this.state.year,
      cvv: this.state.cvv,
      valide: true,
    });
    const data = {
      name: sessionStorage.getItem("fullName"),
      email: sessionStorage.getItem("email"),
      phoneNumber: sessionStorage.getItem("phoneNumber"),
      productType: this.state.productType,
      productName: this.state.productName,
      productQuantity: this.state.productQuantity,
      productPrice: this.state.productPrice,
      productDeliveryAddress: this.state.productDeliveryAddress,
      paymentMethod: "online",
      productDeliveryStatus: "1",
      productDeliveryDate: "1",
      // User Card
      username: this.state.username,
      cardNumber: this.state.cardNumber,
      month: this.state.month,
      year: this.state.year,
      cvv: this.state.cvv,
    };
    // localStorage.setItem("Order_omline", JSON.stringify([data]));
    // OnlineOrder
    const res = await axios.post("/api/OnlineOrder", data);
    console.log(res);
  };
  render() {
    var PaymentDetails =
      localStorage.getItem("online") === null
        ? localStorage.setItem("online", [])
        : localStorage.getItem("online");
    let convart;
    try {
      convart = JSON.parse([PaymentDetails]);
    } catch (error) {
      convart = [];
    }
    var img = "";
    var displaypay = convart?.map((e) => {
      this.state.productType = e.productType;
      this.state.productQuantity = e.productQuantity;
      this.state.productPrice = e.productPrice;
      this.state.productDeliveryAddress = e.productDeliveryAddress;
      console.log(e);

      // Grocery
      var nameType = "";
      var jio = e.productName;
      switch (jio) {
        case "1":
          nameType = "Toor Dal";

          break;
        case "2":
          nameType = "Urad Dal";
          break;
        case "3":
          nameType = "Moong Dal";
          break;
        case "4":
          nameType = "Chana Dal";
          break;
        // Ghee
        case "5":
          nameType = "Amul Pure Ghee 1 L Pouch";
          break;
        case "6":
          nameType = "Gowardhan Pure Cow Ghee 1 L Pouch";
          break;
        case "7":
          nameType = "Sagar Pure Ghee 1 L Tin";
          break;
        case "8":
          nameType = "Godrej Jersey Ghee 100 ml Pouch";
          break;
        case "9":
          nameType = "Ananda Ghee 1 L Carton";
          break;
        // Oils
        case "10":
          nameType = "Blended Oli";
          break;
        case "11":
          nameType = "Sunflower Oli";
          break;
        case "12":
          nameType = "Olive Oli";
          break;
        case "13":
          nameType = "Groundnut Oli";
          break;
        case "14":
          nameType = "Mustard Oli";
          break;
        //Atta
        case "15":
          nameType = "AASHIRVAAD Select Sharbati Atta";
          break;
        case "16":
          nameType = "Chakki Atta";
          break;
        case "17":
          nameType = "Classic Wheat Flour Atta";
          break;
        case "18":
          nameType = "WHEATKART Chakki Fresh Atta";
          break;
        case "19":
          nameType = "Pillsbury Gold Sharbati Atta";
          break;
        //Maida
        case "20":
          nameType = "Organic Tattva Wheat Maida";
          break;
        case "21":
          nameType = "Rajdhani Maida";
          break;
        // Besan
        case "22":
          nameType = "Fortune Besan";
          break;
        case "23":
          nameType = "24 mantra ORGANIC Besan/Gram";
          break;
        case "24":
          nameType = "Organic Tattva Besan";
          break;
        case "25":
          nameType = "Tata Sampann 100% Chana Dal Fine Besan";
          break;
        //  Masalas
        case "26":
          nameType = "Maggi Masala Magic All in One Masala";
          break;
        case "27":
          nameType = "EVEREST TURMERIC POWDER";
          break;

        case "28":
          nameType = "EVEREST Meat Masala";
          break;

        case "29":
          nameType = "Tata Sampann Meat Masala";
          break;

        case "30":
          nameType = "Catch Sabzi Masala Powder";
          break;

        case "31":
          nameType = "BADSHAH Nawabi Meat Masala";
          break;
        //  spices
        case "32":
          nameType = "JK Methi";
          break;
        case "33":
          nameType = "JK Cardamom";
          break;

        case "34":
          nameType = "Catch Hing";
          break;

        case "35":
          nameType = "Catch Kasuri Methi";
          break;

        case "36":
          nameType = "Organic Tattva Cumin";
          break;

        case "37":
          nameType = "Classic Cumin Seeds";
          break;

        // Basmati Rice

        case "38":
          nameType = "Organic Tattva Basmati Rice";
          break;

        case "39":
          nameType = "INDIA GATE Feast Rozzana Basmati Rice";
          break;

        case "40":
          nameType = "Fortune Rozana Basmati Rice";
          break;

        case "41":
          nameType = "Devaaya Rozana Basmati Rice";
          break;
        //Sona Masoori Rice

        case "42":
          nameType = "Sona Masoori Rice";
          break;

        case "43":
          nameType = "24 mantra ORGANIC Organic Broken";
          break;

        case "44":
          nameType = "ecoFRESH Organic Hand Pounded Brown";
          break;

        case "45":
          nameType = "ecoFRESH Organic Sona Masoori Rice";
          break;

        //  Dry Fruits

        case "46":
          nameType = "Classic Figs";
          break;

        case "47":
          nameType = "Farmley Selecta Afghan Dried Anjeer Figs";
          break;

        case "48":
          nameType = "Regency Dried Cranberries";
          break;

        case "49":
          nameType = "Regency Dried Blueberry";
          break;

        // Nuts

        case "50":
          nameType = "Ziofit Indian Whole Cashews";
          break;

        case "51":
          nameType = "Ziofit Indian Whole + Free Californian";
          break;

        case "52":
          break;

        case "53":
          nameType = "Farmley Popular W400 Raw Kaju Cashews";
          break;

        // Seeds

        case "54":
          nameType = "zoff Makhana Lotus Seeds";
          break;

        case "55":
          nameType = "INDIA GATE Roasted Flax Seed/Alsi";
          break;

        case "56":
          nameType = "Farmley Prasadam Makhana";
          break;

        case "57":
          nameType = "INDIA GATE Chia Seeds";
          break;

        // Sugar

        case "58":
          nameType = "Solar Icing Sugar";
          break;

        case "59":
          nameType = "Sugarlite 50% Less Calories Sugar";
          break;

        case "60":
          nameType = "Organic Tattva Sugar";
          break;

        case "61":
          nameType = "Organic Tattva Brown Sugar";
          break;

        // Jaggery

        case "62":
          nameType = "Organic Tattva Powder Jaggery";
          break;

        case "63":
          nameType = "safe harvest Powder Jaggery";
          break;

        case "64":
          nameType = "parth Kolhapur Block Jaggery";
          break;

        case "65":
          nameType = "parth Block Jaggery";
          break;

        // Salt

        case "66":
          nameType = "AASHIRVAAD Salt,with 4-Step advantage";
          break;

        case "67":
          nameType = "Himalayan Natives Powder 1000g";
          break;

        case "68":
          nameType = "Tata Lite Iodized Salt";
          break;

        case "69":
          nameType = " Tata Iodized Salt";
          break;

        default:
          console.log(52);
          break;
      }
      {
        e.productType == "Grocery"
          ? (this.state.productName = nameType)
          : (this.state.productName = e.productName);
      }
      return (
        <>
          {e.productType == "Grocery" ? (
            <>
              <div className="col-md-6 col-6 ps-30 pe-0 my-4">
                <p className="text-muted">Product Name</p>
                <p className="h5">{nameType}</p>
              </div>
            </>
          ) : (
            <>
              <div className="col-md-6 col-6 ps-30 pe-0 my-4">
                <p className="text-muted">Product Name</p>
                <p className="h5">{e.productName}</p>
              </div>
            </>
          )}

          <div className="col-md-6 col-6 ps-30 pe-0 my-4">
            <p className="text-muted">Product Type</p>
            <p className="h5">{e.productType}</p>
          </div>
          <div className="col-md-6 col-6 ps-30 pe-0 my-4">
            <p className="text-muted">Email</p>
            <p className="h5">{e.email}</p>
          </div>
          <div className="col-md-6 col-6  ps-30 my-4">
            <p className="text-muted">Price</p>
            <p className="h5 m-0">{e.productPrice}</p>
          </div>
          <div className="col-md-6 col-6 ps-30 my-4">
            <p className="text-muted">Quantity</p>
            <p className="h5 m-0">{e.productQuantity}</p>
          </div>
          <div className="col-md-6 col-6 ps-30 my-4">
            <p className="text-muted">Adress</p>
            <p className="h5 m-0">{e.productDeliveryAddress}</p>
          </div>
        </>
      );
    });

    if (this.state.valide == true) {
      return <Navigate to="/IndexHistory" />;
    }
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
          <div className="container-fluid">
            {/* For demo purpose */}
            <div className="row mb-4">
              <div className="col-lg-8 mx-auto text-center">
                <h1 className="display-6">Payment Forms</h1>
              </div>
            </div>
            {/* End */}
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-12 border ">
                    {/* <img
                    className="card-img-top w-50 ml-lg-5 pl-lg-5 w-50 ml-lg-5 pl-lg-5"
                    src="/Vegitables/Potato.png"
                    alt="Potato"
                  /> */}
                    {img}
                  </div>
                  <div className="row ml-2 bg-light border">{displaypay}</div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card ">
                  <div className="card-header">
                    <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                      {/* Credit card form tabs */}
                      <ul
                        role="tablist"
                        className="nav bg-light nav-pills rounded nav-fill mb-3"
                      >
                        <li className="nav-item">
                          <a
                            data-toggle="pill"
                            href="#credit-card"
                            className="nav-link active "
                          >
                            <i className="fas fa-credit-card mr-2" /> Credit
                            Card
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            data-toggle="pill"
                            href="#paypal"
                            className="nav-link "
                          >
                            <i className="fab fa-paypal mr-2" /> Paypal
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            data-toggle="pill"
                            href="#net-banking"
                            className="nav-link "
                          >
                            <i className="fas fa-mobile-alt mr-2" /> Net Banking
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* End */}
                    {/* Credit card form content */}
                    <div className="tab-content">
                      {/* credit card info*/}
                      <div
                        id="credit-card"
                        className="tab-pane fade show active pt-3"
                      >
                        <form onSubmit={this.ADDCard}>
                          <div className="form-group">
                            <label htmlFor="username">
                              <h6>Card Owner</h6>
                            </label>
                            <input
                              type="text"
                              name="username"
                              onChange={this.HendelInput}
                              placeholder="Card Owner Name"
                              required
                              className="form-control "
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="cardNumber">
                              <h6>Card number</h6>
                            </label>
                            <div className="input-group">
                              <input
                                type="text"
                                name="cardNumber"
                                onChange={this.HendelInput}
                                placeholder="Valid card number"
                                className="form-control "
                                required
                              />
                              <div className="input-group-append">
                                <span className="input-group-text text-muted">
                                  <i className="fab fa-cc-visa mx-1" />
                                  <i className="fab fa-cc-mastercard mx-1" />
                                  <i className="fab fa-cc-amex mx-1" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-8">
                              <div className="form-group">
                                <label>
                                  <span className="hidden-xs">
                                    <h6>Expiration Date</h6>
                                  </span>
                                </label>
                                <div className="input-group">
                                  <input
                                    type="number"
                                    placeholder="MM"
                                    name="month"
                                    onChange={this.HendelInput}
                                    className="form-control"
                                    required
                                  />
                                  <input
                                    type="number"
                                    placeholder="YY"
                                    name="year"
                                    onChange={this.HendelInput}
                                    className="form-control"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="form-group mb-4">
                                <label
                                  data-toggle="tooltip"
                                  title="Three digit CV code on the back of your card"
                                >
                                  <h6>
                                    CVV
                                    <i className="fa fa-question-circle d-inline" />
                                  </h6>
                                </label>
                                <input
                                  type="text"
                                  required
                                  name="cvv"
                                  onChange={this.HendelInput}
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="card-footer">
                            <button
                              type="submit"
                              className="subscribe btn btn-primary btn-block shadow-sm"
                            >
                              Confirm Payment
                            </button>
                            {/* <button
                            type="button"
                            className="subscribe btn btn-danger btn-block shadow-sm"
                          >
                            Cancel Payment
                          </button> */}
                          </div>
                        </form>
                      </div>
                      {/* End */}
                      {/* Paypal info */}
                      <div id="paypal" className="tab-pane fade pt-3">
                        <h6 className="pb-2">
                          Select your paypal account type
                        </h6>
                        <div className="form-group ">
                          <label className="radio-inline">
                            <input
                              type="radio"
                              name="optradio"
                              defaultChecked
                            />
                            Domestic
                          </label>
                          <label className="radio-inline">
                            <input
                              type="radio"
                              name="optradio"
                              className="ml-5"
                            />
                            International
                          </label>
                        </div>
                        <p>
                          <button type="button" className="btn btn-primary ">
                            <i className="fab fa-paypal mr-2" /> Log into my
                            Paypal
                          </button>
                        </p>
                        <p className="text-muted">
                          Note: After clicking on the button, you will be
                          directed to a secure gateway for payment. After
                          completing the payment process, you will be redirected
                          back to the website to view details of your order.
                        </p>
                      </div>
                      {/* End */}
                      {/* bank transfer info */}
                      <div id="net-banking" className="tab-pane fade pt-3">
                        <div className="form-group ">
                          <label htmlFor="Select Your Bank">
                            <h6>Select your Bank</h6>
                          </label>
                          <select className="form-control" id="ccmonth">
                            <option value selected disabled>
                              --Please select your Bank--
                            </option>
                            <option>Bank 1</option>
                            <option>Bank 2</option>
                            <option>Bank 3</option>
                            <option>Bank 4</option>
                            <option>Bank 5</option>
                            <option>Bank 6</option>
                            <option>Bank 7</option>
                            <option>Bank 8</option>
                            <option>Bank 9</option>
                            <option>Bank 10</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <p>
                            <button type="button" className="btn btn-primary ">
                              <i className="fas fa-mobile-alt mr-2" /> Proceed
                              Payment
                            </button>
                          </p>
                        </div>
                        <p className="text-muted">
                          Note: After clicking on the button, you will be
                          directed to a secure gateway for payment. After
                          completing the payment process, you will be redirected
                          back to the website to view details of your order.
                        </p>
                      </div>
                      {/* End */}
                      {/* End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <Helmet>
          <title>User | Information | Payment Getway</title>
        </Helmet>
        {DataDisplay}
      </>
    );
  }
}

export default PaymentGetway;

import axios from "axios";
import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import PaymentDetails from "./Payment/RetailerPaymentDetails";
import Navbar from "./Navbar";
import { Helmet } from 'react-helmet';

export class UserVegitables extends Component {
  constructor() {
    super();
    this.state = {
      showData: [],
      Count: "1",
      buydata: "",
      buy: false,
    };
  }

  async componentDidMount() {
    const res = await axios.get("/api/Veg-show");
    console.log(res.lenght);
    this.setState({
      showData: res.data.message,
    });
  }

  Tcount = (count) => {
    var nu = count;
    console.log(nu);
    return nu;
  };

  update = () => {
    var cartData = localStorage.getItem("cart");
    var jsonConvart = JSON.parse(cartData);
    console.log(jsonConvart);
    var cartShow = jsonConvart.length;
    console.log(cartShow);
    return cartShow;
  };

  buyItem = (item) => {
    const data = {
      email: sessionStorage.getItem("email"),
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      productType: "Vegitables",
    };
    this.setState({
      buy: true,
    });
    localStorage.setItem("buy", JSON.stringify([data]));
  };

  Increment = (count) => {
    var m = this.state.Count;
    var j = count + 1;
    return (m = j);
  };
  render() {
    // login data

    var access_token = sessionStorage.getItem("access_token");
    var email = "";
    if (access_token == null) {
      email = null;
    } else {
      email = sessionStorage.getItem("email");
    }

    var img = "";
    var x = this.state.showData.map((item) => {
      var jio = item.name.split(" ");
      var jino = jio[0];
      console.log(jio[0]);

      switch (jino) {
        case "Potato":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Potato.png"
                alt="Potato"
              />
            </>
          );
          break;

        case "Tomato":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Tomato.png"
                alt="Tomato"
              />
            </>
          );
          break;

        case "Brinjal":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/brinjal-min.png"
                alt="Brinjal"
              />
            </>
          );
          break;

        case "Cabbage":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/cabbage-min.png"
                alt="Cabbage"
              />
            </>
          );
          break;

        case "Radish":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/radish-min.png"
                alt="Radish"
              />
            </>
          );
          break;
        case "Onion":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/onion-min.png"
                alt="Onion"
              />
            </>
          );
          break;
        case "Bitter":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Bitter-Gourd-min.png"
                alt="Bitter Gourd"
              />
            </>
          );
          break;

        case "Lady’s":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/lady-finger-min.png"
                alt="Lady’s finger"
              />
            </>
          );
          break;

        case "Langra":
          img = (
            <>
              <img className="d-block w-100" src="/Vegitables/" alt="Langra" />
            </>
          );
          break;
        case "Cauliflower":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/cauliflower-min.png"
                alt="Cauliflower"
              />
            </>
          );
          break;

        case "Pumpkin":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/pumpkin-min.webp"
                alt="Pumpkin"
              />
            </>
          );
          break;

        case "Carrot":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/carrot-min.webp"
                alt="Carrot"
              />
            </>
          );
          break;

        case "Ginger":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/ginger-min.webp"
                alt="Ginger"
              />
            </>
          );
          break;

        case "Chilli":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/chilli-min.webp"
                alt="Chilli"
              />
            </>
          );
          break;

        case "Capsicum":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/capsicum-min.webp"
                alt="Capsicum"
              />
            </>
          );
          break;

        case "Spinach":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/spinach-min.webp"
                alt="Spinach"
              />
            </>
          );
          break;
        case "Jackfruit":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Jackfruit-min-1.webp"
                alt="Jackfruit"
              />
            </>
          );
          break;
        case "Mushroom":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/mushroom-min.webp"
                alt="Mushroom"
              />
            </>
          );
          break;
        case "Sweet":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/sweet-potato-min.webp"
                alt="Sweet Potato"
              />
            </>
          );
          break;

        case "Beetroot":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/beetroot-min.webp"
                alt="Beetroot"
              />
            </>
          );
          break;

        case "Cucumber":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/cucumber-min.webp"
                alt="Cucumber"
              />
            </>
          );
          break;
        case "Broccoli":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/broccoli-min.webp"
                alt="Broccoli"
              />
            </>
          );
          break;
        case "Asparagus":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/asparagus-min.webp"
                alt="Asparagus"
              />
            </>
          );
          break;

        case "Corn":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/corn-min.webp"
                alt="Corn"
              />
            </>
          );
          break;

        case "Celery":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Celery-min-1.webp"
                alt="Celery"
              />
            </>
          );
          break;

        case "Green":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/green-bean-min.webp"
                alt="Green bean"
              />
            </>
          );
          break;

        case "Chickpea":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/chickpea-min.webp"
                alt="Chickpea"
              />
            </>
          );
          break;

        case "Lentil":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/lentil-min.webp"
                alt="Lentil"
              />
            </>
          );
          break;

        case "Peas":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/peas-min.webp"
                alt="Peas"
              />
            </>
          );
          break;

        case "Garlic":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/garlic-min.webp"
                alt="Garlic"
              />
            </>
          );
          break;

        case "Coriander":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/coriander-min.webp"
                alt="Coriander"
              />
            </>
          );
          break;

        case "Apple":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Apple-Gourd-min.webp"
                alt="Apple Gourd"
              />
            </>
          );
          break;

        case "Drumstick":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Drumstick-min.webp"
                alt="Drumstick"
              />
            </>
          );
          break;

        case "Bottle":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/bottle-gourd-min.webp"
                alt="Bottle Gourd"
              />
            </>
          );
          break;

        case "Leek":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/leek-min.webp"
                alt="Leek"
              />
            </>
          );
          break;

        case "Cluster":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Cluster.webp"
                alt="Cluster Beans"
              />
            </>
          );
          break;

        case "Pointed":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Pointed-Gourd-min.webp"
                alt="Pointed Gourd"
              />
            </>
          );
          break;

        case "Yam":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/yam-min.webp"
                alt="Yam"
              />
            </>
          );
          break;

        case "Artichoke":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Artichoke-min.webp"
                alt="Artichoke"
              />
            </>
          );
          break;

        case "Ash":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Ash-Gourd-min.webp"
                alt="Ash Gourd"
              />
            </>
          );
          break;

        case "Bok":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Bok-choy-min.webp"
                alt="Bok Choy"
              />
            </>
          );
          break;

        case "Brussels":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Brussels-sprout-min.webp"
                alt="Brussels Sprout"
              />
            </>
          );
          break;

        case "Chayote":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/chayote-min.webp"
                alt="Chayote"
              />
            </>
          );
          break;

        case "Endive":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/endive-min.webp"
                alt="Endive"
              />
            </>
          );
          break;

        case "Kohlrabi":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Kohlrabi.webp"
                alt="Kohlrabi"
              />
            </>
          );
          break;

        case "Luffa":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/luffa-min.webp"
                alt="Luffa"
              />
            </>
          );
          break;

        case "Parsnip":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Parsnip-min.webp"
                alt="Parsnip"
              />
            </>
          );
          break;

        case "Ridged":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Ridged-Gourd-min.webp"
                alt="Ridged Gourd"
              />
            </>
          );
          break;

        case "Swiss":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Swiss-chard-min.webp"
                alt="Swiss Chard"
              />
            </>
          );
          break;

        case "Turnip":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Turnip-min.webp"
                alt="Turnip"
              />
            </>
          );
          break;

        case "Zucchini":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/zucchini-min.webp"
                alt="Zucchini"
              />
            </>
          );
          break;

        default:
          console.log(52);
          break;
      }

      return (
        <>
          <div className="col-md-4" key={item.id}>
            <div className="card">
              <div className="card-header">
                <h5>{item.name}</h5>
                {img}
              </div>
              <div className="card-block text-center">
                <h6>{item.name}</h6>
                <h6>Quantity: {item.quantity}</h6>
                <p>
                  <b>Price: {item.price} &#8360;</b>
                </p>
                <button
                  onClick={() => this.buyItem(item)}
                  className="btn btn-primary"
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </>
      );
    });

    // buy
    if (this.state.buy == true) {
      return (
        <>
          <Navigate to={"/RetailarPaymentDetails"} />
        </>
      );
    }
    // Cart show
    if (localStorage.getItem("cart") == null) {
      localStorage.setItem("cart", "[]");
    }

    return (
      <>
        <Helmet>
          <title>Retailer | ProductType | Vegitables</title>
        </Helmet>

        <div className="pcoded-main-container">
          <div className="pcoded-wrapper">
            <div className="pcoded-content">
              <div className="pcoded-inner-content">
                {/* [ breadcrumb ] start */}
                <div className="page-header">
                  <div className="page-block">
                    <div className="row align-items-center">
                      <div className="col-md-12">
                        <div className="page-header-title">
                          <h5 className="m-b-10">Vegitables</h5>
                        </div>
                        <ul className="breadcrumb">
                          <li className="breadcrumb-item">
                            <Link to="">
                              <i className="feather icon-home" />
                            </Link>
                          </li>
                          <li className="breadcrumb-item">
                            <Link to="">ProductType</Link>
                          </li>
                          <li className="breadcrumb-item">
                            <Link to="">Vegitables</Link>
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
                      {x}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UserVegitables;

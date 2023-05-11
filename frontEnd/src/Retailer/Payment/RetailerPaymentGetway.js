import axios from "axios";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Navigate } from "react-router-dom";
import Navbar from "../Navbar";

export class RetailarPaymentGetway extends Component {
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
    var PaymentDetails = localStorage.getItem("online");
    var convart = JSON.parse([PaymentDetails]);
    var img = "";
    var displaypay = convart.map((e) => {
      this.state.productType = e.productType;
      this.state.productQuantity = e.productQuantity;
      this.state.productPrice = e.productPrice;
      this.state.productDeliveryAddress = e.productDeliveryAddress;
      var productName = e.productName.split(" ");
      var jino = productName[0];
      console.log(productName[0]);

      switch (jino) {
        case "Potato":
          img = (
            <>
              <img
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
                src="/Vegitables/lady-finger-min.png"
                alt="Lady’s finger"
              />
            </>
          );
          break;

        case "Langra":
          img = (
            <>
              <img
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
                src="/Vegitables/"
                alt="Langra"
              />
            </>
          );
          break;
        case "Cauliflower":
          img = (
            <>
              <img
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
                className="card-img-top w-50 ml-lg-5 pl-lg-5"
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
            // Fruits
            var jio = e.productName.split(" ");
            var jino = jio[0];
            console.log(jio[0]);
      
            switch (jino) {
              case "Alphonso":
                img = (
                  <>
                    <img
                      className="d-block w-100"
                      src="https://www.holidify.com/blog/wp-content/uploads/2015/07/7248255018_e825d712bb_o.jpg"
                      alt="First slide"
                    />
                  </>
                );
                break;
      
              case "Kesar":
                img = (
                  <>
                    <img
                      className="d-block w-100"
                      src="https://www.holidify.com/blog/wp-content/uploads/2015/07/9108536414_b2fe3ca959_z.jpg"
                      alt="First slide"
                    />
                  </>
                );
                break;
      
              case "Dasheri":
                img = (
                  <>
                    <img
                      className="d-block w-100"
                      src="https://www.holidify.com/images/cmsuploads/compressed/Green_Mango_Rezowan_20190626121306.JPG"
                      alt="First slide"
                    />
                  </>
                );
                break;
      
              case "Himsagar":
                img = (
                  <>
                    <img
                      className="d-block w-100"
                      src="https://www.holidify.com/blog/wp-content/uploads/2015/07/Mango_Himsagar_Asit_ftg.jpg"
                      alt="First slide"
                    />
                  </>
                );
                break;
      
              case "Chausa":
                img = (
                  <>
                    <img
                      className="d-block w-100"
                      src="https://www.holidify.com/blog/wp-content/uploads/2015/07/Chaunsa1.jpg"
                      alt="Chausa"
                    />
                  </>
                );
                break;
              case "Badami":
                img = (
                  <>
                    <img
                      className="d-block w-100"
                      src="https://www.holidify.com/blog/wp-content/uploads/2015/07/5943082196_1543591746_o.jpg"
                      alt="Badami"
                    />
                  </>
                );
                break;
              case "Safeda":
                img = (
                  <>
                    <img
                      className="d-block w-100"
                      src="https://www.holidify.com/blog/wp-content/uploads/2015/07/6138447560_d311381e4d_z.jpg"
                      alt="Safeda"
                    />
                  </>
                );
                break;
      
              case "Bombay":
                img = (
                  <>
                    <img
                      className="d-block w-100"
                      src="https://www.holidify.com/blog/wp-content/uploads/2015/07/Mango_Bombay_Asit_ftg.jpg"
                      alt="Bombay"
                    />
                  </>
                );
                break;
      
              case "Langra":
                img = (
                  <>
                    <img
                      className="d-block w-100"
                      src="https://www.holidify.com/blog/wp-content/uploads/2015/07/Mango_LangraBenarsi_Asit_ftg.jpg"
                      alt="Langra"
                    />
                  </>
                );
                break;
              case "Totapuri":
                img = (
                  <>
                    <img
                      className="d-block w-100"
                      src="https://www.holidify.com/blog/wp-content/uploads/2015/07/545712841_fc8c419eb4_z.jpg"
                      alt="Totapuri"
                    />
                  </>
                );
                break;
      
              case "Neelam":
                img = (
                  <>
                    <img
                      className="d-block w-100"
                      src="https://www.holidify.com/images/cmsuploads/compressed/8438682951_1c816de84c_b_20190621181146.jpg"
                      alt="First slide"
                    />
                  </>
                );
                break;
      
              case "Raspuri":
                img = (
                  <>
                    <img
                      className="d-block w-100"
                      src="https://www.holidify.com/images/cmsuploads/compressed/RaspuriMangoes_20190626143647.jpg"
                      alt="Raspuri"
                    />
                  </>
                );
                break;
              case "":
                img = (
                  <>
                    <img className="d-block w-100" src="" alt="" />
                  </>
                );
                break;
              case "Malgoa/Mulgoba":
                img = (
                  <>
                    <img
                      className="d-block w-100"
                      src="https://www.holidify.com/images/cmsuploads/compressed/Mango_Mulgoba_Asit_fs8_20190621183459.jpg"
                      alt="Malgoa"
                    />
                  </>
                );
                break;
      
              case "Lakshmanbhog":
                img = (
                  <>
                    <img
                      className="d-block w-100"
                      src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1057927583_20190626141915.jpg"
                      alt="First slide"
                    />
                  </>
                );
                break;
      
              case "Amrapali":
                img = (
                  <>
                    <img
                      className="d-block w-100"
                      src="https://www.holidify.com/images/cmsuploads/compressed/Amrapali_Mango_28129_20190624115234.jpg"
                      alt="Amrapali"
                    />
                  </>
                );
                break;
      
              case "Imam":
                img = (
                  <>
                    <img
                      className="d-block w-100"
                      src="https://www.holidify.com/images/cmsuploads/compressed/800px-Mango_ImamPasand_Asit_ftg_20190624122141.jpg"
                      alt="Imam"
                    />
                  </>
                );
                break;
              case "Fazli":
                img = (
                  <>
                    <img
                      className="d-block w-100"
                      src="https://www.holidify.com/images/cmsuploads/compressed/Screenshot2019-06-26at1.31.39PM_20190626133159.png"
                      alt="Fazli"
                    />
                  </>
                );
                break;
              case "Mankurad":
                img = (
                  <>
                    <img
                      className="d-block w-100"
                      src="https://www.holidify.com/images/cmsuploads/compressed/8853092098_6c9cf1f4f6_b_20190624133153.jpg"
                      alt="Mankurad"
                    />
                  </>
                );
                break;
              case "Paheri/Pairi":
                img = (
                  <>
                    <img
                      className="d-block w-100"
                      src="https://www.holidify.com/images/cmsuploads/compressed/Mango_Paheri_Asit_ftg_20190624144752.jpg"
                      alt="Paheri/Pairi"
                    />
                  </>
                );
                break;
      
              case "Mallika":
                img = (
                  <>
                    <img
                      className="d-block w-100"
                      src="https://www.holidify.com/images/cmsuploads/compressed/Mango_Mallika_Asit.fs8_20190624154219.jpg"
                      alt="Mallika"
                    />
                  </>
                );
                break;
      
              case "Gulab":
                img = (
                  <>
                    <img
                      className="d-block w-100"
                      src="https://www.holidify.com/images/cmsuploads/compressed/mango-323945_1920_20200108110929.jpg"
                      alt="Gulab"
                    />
                  </>
                );
                break;
              case "Vanraj":
                img = (
                  <>
                    <img
                      className="d-block w-100"
                      src="https://www.holidify.com/images/cmsuploads/compressed/3024_10151379174117689_888691326_n_20200108110536.jpg"
                      alt="Vanraj"
                    />
                  </>
                );
                break;
              case "Kilichundan":
                img = (
                  <>
                    <img
                      className="d-block w-100"
                      src="https://www.holidify.com/images/cmsuploads/compressed/30415009_2516767945214426_6479747404911345664_n_20200108105722.jpg"
                      alt="Kilichundan"
                    />
                  </>
                );
                break;
      
              case "Rumani":
                img = (
                  <>
                    <img
                      className="d-block w-100"
                      src="https://www.holidify.com/images/cmsuploads/compressed/13521842_1209093585775653_6267861103060861432_n_20200108111159.jpg"
                      alt="Rumani"
                    />
                  </>
                );
                break;
                case "Apple":
                  img = (
                    <>
                      <img
                        className="d-block w-100"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/750px-Red_Apple.jpg"
                        alt="Apple"
                      />
                    </>
                  );
                  break;
                  case "Banana":
                    img = (
                      <>
                        <img
                          className="d-block w-100"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Bananas_white_background.jpg/750px-Bananas_white_background.jpg"
                          alt="Banana"
                        />
                      </>
                    );
                    break;
                    case "Orange":
                      img = (
                        <>
                          <img
                            className="d-block w-100"
                            src="https://5.imimg.com/data5/HM/KG/MY-42588315/fresh-orange-500x500.jpg"
                            alt="Orange"
                          />
                        </>
                      );
                break;
                case "Grapes":
                  img = (
                    <>
                      <img
                        className="d-block w-100"
                        src="https://cdn2.stylecraze.com/wp-content/uploads/2014/07/Is-It-True-That-Eating-Too-Many-Grapes-Causes-Side-Effects.jpg"
                        alt="Grapes"
                      />
                    </>
                  );
            break;
            case "Pineapple":
              img = (
                <>
                  <img
                    className="d-block w-100"
                    src="https://st.depositphotos.com/1050689/2099/i/950/depositphotos_20990611-stock-photo-pineapple-isolated.jpg"
                    alt="Pineapple"
                  />
                </>
              );
        break;
        case "Pomegranate":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://www.simplyrecipes.com/thmb/_zP3bxkOFCm0DulHWkMlWRloaTo=/1800x1200/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2005__11__pomegranate-horiz-a-1800-aabd491ecf0c4c1981406b571220cbfb.jpg"
                alt="Pomegranate"
              />
            </>
          );
      break;
      case "Papaya":
        img = (
          <>
            <img
              className="d-block w-100"
              src="https://images.healthshots.com/healthshots/en/uploads/2021/01/27181218/health-benefits-of-papaya.jpg"
              alt="Papaya"
            />
          </>
        );
      break;
      case "Watermelon":
        img = (
          <>
            <img
              className="d-block w-100"
              src="https://www.gardeningknowhow.com/wp-content/uploads/2021/05/whole-and-slices-watermelon.jpg"
              alt="Watermelon"
            />
          </>
        );
      break;
      case "Dragonfruit":
        img = (
          <>
            <img
              className="d-block w-100"
              src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Hylocereus_undatus_red_pitahaya.jpg"
              alt="Dragonfruit"
            />
          </>
        );
      break;
      case "Strawberry":
        img = (
          <>
            <img
              className="d-block w-100"
              src="https://cdn-prod.medicalnewstoday.com/content/images/articles/320/320894/strawberry-on-white-background-to-represent-strawberry-tongue.jpg"
              alt="Strawberry"
            />
          </>
        );
      break;
      case "Blueberry":
        img = (
          <>
            <img
              className="d-block w-100"
              src="https://www.healthifyme.com/blog/wp-content/uploads/2022/01/cropped-Blueberry-1.jpg"
              alt="Blueberry"
            />
          </>
        );
      break;
      case "Blackberry":
        img = (
          <>
            <img
              className="d-block w-100"
              src="https://m.media-amazon.com/images/I/71dpFyajA3L._SX466_.jpg"
              alt="Blackberry"
            />
          </>
        );
      break;
      case "Kiwifruit":
        img = (
          <>
            <img
              className="d-block w-100"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Kiwi_aka.jpg/640px-Kiwi_aka.jpg"
              alt="Kiwifruit"
            />
          </>
        );
      break;
      case "Pear":
        img = (
          <>
            <img
              className="d-block w-100"
              src="https://media.baamboozle.com/uploads/images/571859/1646072438_30584.jpeg"
              alt="Pear"
            />
          </>
        );
      break;
      case "Custard-Apple":
        img = (
          <>
            <img
              className="d-block w-100"
              src="https://cdn.britannica.com/95/126995-050-101B8B8D/Sweetsop.jpg"
              alt="Custard-Apple"
            />
          </>
        );
      break;
      case "Cherry":
        img = (
          <>
            <img
              className="d-block w-100"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Cherry_Stella444.jpg/750px-Cherry_Stella444.jpg"
              alt="Cherry"
            />
          </>
        );
      break;
      
              default:
                console.log(52);
                break;
            }

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

    var Data = sessionStorage.getItem("access_token_Retailer");
    var DataDisplay = "";
    if (Data == null) {
      DataDisplay = <>
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Please_log_in_image.png" width="100%" height="100%"/>
      </>;
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
                          <i className="fas fa-credit-card mr-2" /> Credit Card
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
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
      )
    }

    return (
      <>
        <Helmet>
          <title>Retailar | Information | Payment Getway</title>
        </Helmet>

        {DataDisplay}
      </>
    );
  }
}

export default RetailarPaymentGetway;

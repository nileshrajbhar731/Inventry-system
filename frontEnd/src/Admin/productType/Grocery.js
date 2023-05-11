import axios from "axios";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";

export class Grocery extends Component {
  constructor() {
    super();
    this.state = {
      showdata: [],
      name: "",
      price: "",
      quantity: "",
      totalQuantity: "",
    };
  }
  // show data
  async componentDidMount() {
    const res = await axios.get("/api/Glo-show");
    console.log(res.data.message);
    this.setState({
      showdata: res.data.message,
    });
  }
  // edit
  Edit = async (id) => {
    const res = await axios.get(`/api/Glo-edit/${id}`);
    console.log(res.data);
    this.setState({
      show: [res.data],
    });
  };
  // update
  Update = async (id) => {
    const res = await axios.put(`/api/Glo-update/${id}`);
  };
  //  delete

  Delete = async (e, id) => {
    const thisClick = e.currentTarget;
    thisClick.innerText = "Deleted";
    const res = await axios.delete(`/api/Glo-delete/${id}`);
    console.log(res.data);
    thisClick.closest("tr").remove();
  };

  HendelInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  AddData = async (e) => {
    // e.preventDefault();
    const res = await axios.post("/api/Glo-add", this.state);
    console.log(res.data);
    this.setState({
      name: "",
      price: "",
      quantity: "",
      totalQuantity: "",
    });
  };

  // change 21-07-2022

  Total = () => {
    var q = this.state.quantity;
    const qu = q.split("kg");
    console.log(qu);
    const rqu = qu[qu.length - 2];
    console.log(rqu);
    var p = this.state.price;
    var tq = this.state.totalQuantity;
    const kg = tq.split("kg");
    console.log(kg);
    const rkg = kg[kg.length - 2];
    console.log(rkg);

    var tp = p * rkg;
    var t = tp / rqu;
    console.log(tp);
    console.log(t);
    return Math.round(t);
  };

  render() {
    var id = 1;
    var nameType = "";
    var x = this.state.showdata.map((item) => {
      //  change 21-07-2022

      var q = item.quantity;
      const qu = q.split("kg");
      console.log(qu);
      const rqu = qu[qu.length - 2];
      console.log(rqu);
      var p = item.price;
      var tq = item.totalQuantity;
      const kg = tq.split("kg");
      console.log(kg);
      const rkg = kg[kg.length - 2];
      console.log(rkg);

      var tp = p * rkg;
      var t = tp / rqu;
      console.log(tp);
      console.log(t);

      var jio = item.nameType;
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
      return (
        <>
          <tr>
            <th scope="row" key={item.id}>
              {id++}
            </th>
            <td>{item.name}</td>
            <td>{nameType}</td>
            <td>{item.quantity}</td>
            <td>{item.price} &#8360;</td>
            <td>{item.totalQuantity}</td>
            <td>{Math.round(t)} &#8360;</td>
            <td>
              <button
                type="button"
                class="btn btn-primary"
                onClick={(e) => this.Edit(e, item.id)}
              >
                Edit
              </button>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-danger"
                onClick={(e) => this.Delete(e, item.id)}
              >
                Delete
              </button>
            </td>
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
                          <h5 className="m-b-10">Grocery</h5>
                        </div>
                        <ul className="breadcrumb">
                          <li className="breadcrumb-item">
                            <Link to="/admin">
                              <i className="feather icon-home" />
                            </Link>
                          </li>
                          <li className="breadcrumb-item">
                            <Link to="/Grocery">ProductType</Link>
                          </li>
                          <li className="breadcrumb-item">
                            <Link to="/Grocery">Grocery</Link>
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
                      <div className="col-sm-12">
                        <div className="card">
                          <div className="card-header">
                            <h5>Show Details</h5>
                          </div>
                          <div className="card-block">
                            <table className="table table-dark table-responsive">
                              <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Name</th>
                                  <th scope="col">NameType</th>
                                  <th scope="col">Quantity</th>
                                  <th scope="col">Price</th>
                                  <th scope="col">TotalQuantity</th>
                                  <th scope="col">TotalPrice</th>
                                </tr>
                              </thead>
                              <tbody>{x}</tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="card">
                          <div className="card-header">
                            <h5>Add Data</h5>
                          </div>
                          <div className="card-block">
                            <form onSubmit={this.AddData}>
                              {/* change 21-07-2022 */}
                              <div className="row">
                                <div className="form-group col-md-6">
                                  <label htmlFor="name">Name</label>
                                  {/* <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    onChange={this.HendelInput}
                                    placeholder="Enter name"
                                  /> */}
                                  <select
                                    className="form-control"
                                    onChange={this.HendelInput}
                                    id="name"
                                  >
                                    <option selected disabled>
                                      Type of Grocery{" "}
                                    </option>
                                    <option>Dals</option>
                                    <option>Ghee</option>
                                    <option> Oils </option>
                                    <option>Atta </option>
                                    <option>Maida</option>
                                    <option>Besan</option>
                                    <option>Masalas</option>
                                    <option>Spices</option>
                                    <option>Basmati Rice</option>
                                    <option>Sona Masoori Rice</option>
                                    <option>Dry Fruits</option>
                                    <option> Nuts </option>
                                    <option> Seeds </option>
                                    <option>Sugar </option>
                                    <option>Jaggery </option>
                                    <option> Salt</option>
                                  </select>
                                </div>
                                <div className="form-group col-md-6">
                                  <label htmlFor="nameType">NameType</label>
                                  {/* <input
                                    type="text"
                                    className="form-control"
                                    id="nameType"
                                    onChange={this.HendelInput}
                                    placeholder="Enter nameType"
                                  /> */}

                                  <select
                                    className="form-control"
                                    onChange={this.HendelInput}
                                    id="nameType"
                                  >
                                    <option selected disabled>
                                      Varieties of Grocery
                                    </option>
                                    <option
                                      disabled
                                      className="bg-dark text-c-red"
                                    >
                                      <b>Staples</b>
                                    </option>
                                    <optgroup label="Dals">
                                      <option value="1">Toor Dal</option>
                                      <option value="2">Urad Dal</option>
                                      <option value="3">Moong Dal</option>
                                      <option value="4">Chana Dal</option>
                                    </optgroup>
                                    <optgroup label="Ghee & Oils">
                                      <option
                                        disabled
                                        className="bg-dark text-c-red"
                                      >
                                        Ghee
                                      </option>
                                      <option value="5">
                                        Amul Pure Ghee 1 L Pouch
                                      </option>
                                      <option value="6">
                                        Gowardhan Pure Cow Ghee 1 L Pouch
                                      </option>
                                      <option value="7">
                                        Sagar Pure Ghee 1 L Tin
                                      </option>
                                      <option value="8">
                                        Godrej Jersey Ghee 100 ml Pouch
                                      </option>
                                      <option value="9">
                                        Ananda Ghee 1 L Carton
                                      </option>
                                      <option
                                        disabled
                                        className="bg-dark text-c-red"
                                      >
                                        Oils
                                      </option>
                                      <option value="10">Blended Oli</option>
                                      <option value="11">Sunflower Oli</option>
                                      <option value="12">Olive Oli</option>
                                      <option value="13">Groundnut Oli</option>
                                      <option value="14">Mustard Oli</option>
                                    </optgroup>
                                    <optgroup label="Atta">
                                      <option
                                        disabled
                                        className="bg-dark text-c-red"
                                      >
                                        Atta
                                      </option>
                                      <option value="15">
                                        AASHIRVAAD Select Sharbati Atta
                                      </option>
                                      <option value="16">Chakki Atta</option>
                                      <option value="17">
                                        Classic Wheat Flour Atta
                                      </option>
                                      <option value="18">
                                        WHEATKART Chakki Fresh Atta
                                      </option>
                                      <option value="19">
                                        Pillsbury Gold Sharbati Atta
                                      </option>
                                      <option
                                        disabled
                                        className="bg-dark text-c-red"
                                      >
                                        Maida
                                      </option>
                                      <option value="20">
                                        Organic Tattva Wheat Maida
                                      </option>
                                      <option value="21">Rajdhani Maida</option>
                                      <option
                                        disabled
                                        className="bg-dark text-c-red"
                                      >
                                        Besan
                                      </option>
                                      <option value="22">Fortune Besan</option>
                                      <option value="23">
                                        24 mantra ORGANIC Besan/Gram
                                      </option>
                                      <option value="24">
                                        Organic Tattva Besan
                                      </option>
                                      <option value="25">
                                        Tata Sampann 100% Chana Dal Fine Besan
                                      </option>
                                    </optgroup>
                                    <optgroup label="Masalas & Spices">
                                      <option
                                        disabled
                                        className="bg-dark text-c-red"
                                      >
                                        Masalas
                                      </option>
                                      <option value="26">
                                        Maggi Masala Magic All in One Masala
                                      </option>
                                      <option value="27">
                                        EVEREST TURMERIC POWDER
                                      </option>
                                      <option value="28">
                                        EVEREST Meat Masala
                                      </option>
                                      <option value="29">
                                        Tata Sampann Meat Masala
                                      </option>
                                      <option value="30">
                                        Catch Sabzi Masala Powder
                                      </option>
                                      <option value="31">
                                        BADSHAH Nawabi Meat Masala
                                      </option>
                                      <option
                                        disabled
                                        className="bg-dark text-c-red"
                                      >
                                        Spices
                                      </option>
                                      <option value="32">JK Methi</option>
                                      <option value="33">JK Cardamom</option>
                                      <option value="34">Catch Hing</option>
                                      <option value="35">
                                        Catch Kasuri Methi
                                      </option>
                                      <option value="36">
                                        Organic Tattva Cumin
                                      </option>
                                      <option value="37">
                                        Classic Cumin Seeds
                                      </option>
                                    </optgroup>

                                    <optgroup label="Rice Products">
                                      <option
                                        disabled
                                        className="bg-dark text-c-red"
                                      >
                                        Basmati Rice
                                      </option>
                                      <option value="38">
                                        Organic Tattva Basmati Rice
                                      </option>
                                      <option value="39">
                                        INDIA GATE Feast Rozzana Basmati Rice
                                      </option>
                                      <option value="40">
                                        Fortune Rozana Basmati Rice
                                      </option>
                                      <option value="41">
                                        Devaaya Rozana Basmati Rice
                                      </option>
                                      <option
                                        disabled
                                        className="bg-dark text-c-red"
                                      >
                                        Sona Masoori Rice
                                      </option>
                                      <option value="42">
                                        Sona Masoori Rice
                                      </option>
                                      <option value="43">
                                        24 mantra ORGANIC Organic Broken
                                      </option>
                                      <option value="44">
                                        ecoFRESH Organic Hand Pounded Brown
                                      </option>
                                      <option value="45">
                                        ecoFRESH Organic Sona Masoori Rice
                                      </option>
                                    </optgroup>
                                    <optgroup label="Dry Fruits, Nuts & Seeds">
                                      <option
                                        disabled
                                        className="bg-dark text-c-red"
                                      >
                                        Dry Fruits
                                      </option>
                                      <option value="46">Classic Figs</option>
                                      <option value="47">
                                        Farmley Selecta Afghan Dried Anjeer Figs
                                      </option>
                                      <option value="48">
                                        Regency Dried Cranberries
                                      </option>
                                      <option value="49">
                                        Regency Dried Blueberry
                                      </option>
                                      <option
                                        disabled
                                        className="bg-dark text-c-red"
                                      >
                                        Nuts
                                      </option>
                                      <option value="50">
                                        Ziofit Indian Whole Cashews
                                      </option>
                                      <option value="51">
                                        Ziofit Indian Whole + Free Californian
                                      </option>
                                      <option value="52">
                                        Farmley Popular W400 Raw Kaju Cashews
                                      </option>
                                      <option value="53">
                                        Molsi's Nuts Tiny Delight Cashews
                                      </option>
                                      <option
                                        disabled
                                        className="bg-dark text-c-red"
                                      >
                                        Seeds
                                      </option>
                                      <option value="54">
                                        zoff Makhana Lotus Seeds
                                      </option>
                                      <option value="55">
                                        INDIA GATE Roasted Flax Seed/Alsi
                                      </option>
                                      <option value="56">
                                        Farmley Prasadam Makhana
                                      </option>
                                      <option value="57">
                                        INDIA GATE Chia Seeds
                                      </option>
                                    </optgroup>
                                    <optgroup label="Sugar, Jaggery & Salt">
                                      <option
                                        disabled
                                        className="bg-dark text-c-red"
                                      >
                                        Sugar
                                      </option>
                                      <option value="58">
                                        Solar Icing Sugar
                                      </option>
                                      <option value="59">
                                        Sugarlite 50% Less Calories Sugar
                                      </option>
                                      <option value="60">
                                        Organic Tattva Sugar
                                      </option>
                                      <option value="61">
                                        Organic Tattva Brown Sugar
                                      </option>
                                      <option
                                        disabled
                                        className="bg-dark text-c-red"
                                      >
                                        Jaggery
                                      </option>
                                      <option value="62">
                                        Organic Tattva Powder Jaggery
                                      </option>
                                      <option value="63">
                                        safe harvest Powder Jaggery
                                      </option>
                                      <option value="64">
                                        parth Kolhapur Block Jaggery
                                      </option>
                                      <option value="65">
                                        parth Block Jaggery
                                      </option>
                                      <option
                                        disabled
                                        className="bg-dark text-c-red"
                                      >
                                        Salt
                                      </option>
                                      <option value="66">
                                        AASHIRVAAD Salt,with 4-Step advantage
                                      </option>
                                      <option value="67">
                                        Himalayan Natives Powder 1000g
                                      </option>
                                      <option value="68">
                                        Tata Lite Iodized Salt
                                      </option>
                                      <option value="69">
                                        Tata Iodized Salt
                                      </option>
                                    </optgroup>
                                  </select>
                                </div>
                                <div className="form-group col-md-6">
                                  <label htmlFor="quantity">Quantity</label>
                                  {/* <input
                                    type="text"
                                    className="form-control"
                                    id="quantity"
                                    value="1"
                                    onChange={this.HendelInput}
                                    placeholder="Enter quantity"
                                  /> */}
                                  <select
                                    className="form-control"
                                    onChange={this.HendelInput}
                                    id="quantity"
                                  >
                                    <option selected disabled>
                                      Fruits Quantity
                                    </option>
                                    {/* <optgroup label="Number of Quantity">
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                      <option>6</option>
                                      <option>7</option>
                                      <option>8</option>
                                      <option>9</option>
                                      <option>10</option>
                                    </optgroup> */}
                                    <optgroup label="Kg of Quantity">
                                      <option>1kg</option>
                                      <option>2kg</option>
                                      <option>3kg</option>
                                      <option>4kg</option>
                                      <option>5kg</option>
                                      <option>6kg</option>
                                      <option>7kg</option>
                                      <option>8kg</option>
                                      <option>9kg</option>
                                      <option>10kg</option>
                                    </optgroup>
                                  </select>
                                </div>
                                <div className="form-group col-md-6">
                                  <label htmlFor="price">Price</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="price"
                                    onChange={this.HendelInput}
                                    placeholder="Enter price"
                                  />
                                </div>
                                <div className="form-group col-md-6">
                                  <label htmlFor="totalQuantity">
                                    TotalQuantity
                                  </label>
                                  {/* <input
                                    type="text"
                                    className="form-control"
                                    id="totalQuantity"
                                    onChange={this.HendelInput}
                                    placeholder="Enter totalQuantity"
                                  /> */}

                                  <select
                                    className="form-control"
                                    onChange={this.HendelInput}
                                    id="totalQuantity"
                                    onClick={() => this.Total()}
                                  >
                                    <option selected disabled>
                                      Fruits TotalQuantity
                                    </option>
                                    <option>10kg</option>
                                    <option>20kg</option>
                                    <option>30kg</option>
                                    <option>40kg</option>
                                    <option>50kg</option>
                                    <option>60kg</option>
                                    <option>70kg</option>
                                    <option>80kg</option>
                                    <option>90kg</option>
                                    <option>100kg</option>
                                    <option>150kg</option>
                                    <option>200kg</option>
                                    <option>250kg</option>
                                    <option>300kg</option>
                                    <option>350kg</option>
                                    <option>400kg</option>
                                    <option>450kg</option>
                                    <option>500kg</option>
                                    <option>550kg</option>
                                    <option>600kg</option>
                                    <option>650kg</option>
                                    <option>700kg</option>
                                    <option>750kg</option>
                                    <option>800kg</option>
                                    <option>850kg</option>
                                    <option>900kg</option>
                                    <option>950kg</option>
                                    <option>1000kg</option>
                                  </select>
                                </div>
                                <div className="col-md-6 ">
                                  <button
                                    type="submit"
                                    className="btn btn-primary mt-4"
                                  >
                                    Submit
                                  </button>
                                </div>
                                {/* <FileUpload></FileUpload> */}
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-sm-12">
                        <div className="card">
                          <div className="card-header">
                            <h5>Square Button</h5>
                          </div>
                          <div className="card-block">
                            <p>
                              use <code>.btn-square</code> in class{" "}
                              <code>.btn</code> class to get square button
                            </p>
                            <button
                              type="button"
                              className="btn btn-square btn-primary"
                            >
                              Primary
                            </button>
                            <button
                              type="button"
                              className="btn btn-square btn-secondary"
                            >
                              Secondary
                            </button>
                            <button
                              type="button"
                              className="btn btn-square btn-success"
                            >
                              Success
                            </button>
                            <button
                              type="button"
                              className="btn btn-square btn-danger"
                            >
                              Danger
                            </button>
                            <button
                              type="button"
                              className="btn btn-square btn-warning"
                            >
                              Warning
                            </button>
                            <button
                              type="button"
                              className="btn btn-square btn-info"
                            >
                              Info
                            </button>
                            <button
                              type="button"
                              className="btn btn-square btn-light"
                            >
                              Light
                            </button>
                            <button
                              type="button"
                              className="btn btn-square btn-dark"
                            >
                              Dark
                            </button>
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <div className="row">
                      {/* <div className="col-md-12">
                        <div className="card">
                          <div className="card-header">
                            <h5>Basic Dropdown Button</h5>
                          </div>
                          <div className="card-block">
                            <div className="btn-group mb-2 mr-2">
                              <button
                                className="btn btn-primary dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Primary
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#!">
                                  Action
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Another action
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Something else here
                                </a>
                              </div>
                            </div>
                            <div className="btn-group mb-2 mr-2">
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Secondary
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#!">
                                  Action
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Another action
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Something else here
                                </a>
                              </div>
                            </div>
                            <div className="btn-group mb-2 mr-2">
                              <button
                                className="btn btn-success dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Success
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#!">
                                  Action
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Another action
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Something else here
                                </a>
                              </div>
                            </div>
                            <div className="btn-group mb-2 mr-2">
                              <button
                                className="btn btn-danger dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Danger
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#!">
                                  Action
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Another action
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Something else here
                                </a>
                              </div>
                            </div>
                            <div className="btn-group mb-2 mr-2">
                              <button
                                className="btn btn-warning dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Warning
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#!">
                                  Action
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Another action
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Something else here
                                </a>
                              </div>
                            </div>
                            <div className="btn-group mb-2 mr-2">
                              <button
                                className="btn btn-info dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Info
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#!">
                                  Action
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Another action
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Something else here
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="card">
                          <div className="card-header">
                            <h5>Split Dropdown Button</h5>
                          </div>
                          <div className="card-block">
                            <div className="btn-group mb-2 mr-2">
                              <button type="button" className="btn btn-primary">
                                Primary
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="sr-only">Toggle Dropdown</span>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#!">
                                  Action
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Another action
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Something else here
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#!">
                                  Separated link
                                </a>
                              </div>
                            </div>
                            <div className="btn-group mb-2 mr-2">
                              <button
                                type="button"
                                className="btn btn-secondary"
                              >
                                Secondary
                              </button>
                              <button
                                type="button"
                                className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="sr-only">Toggle Dropdown</span>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#!">
                                  Action
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Another action
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Something else here
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#!">
                                  Separated link
                                </a>
                              </div>
                            </div>
                            <div className="btn-group mb-2 mr-2">
                              <button type="button" className="btn btn-success">
                                Success
                              </button>
                              <button
                                type="button"
                                className="btn btn-success dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="sr-only">Toggle Dropdown</span>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#!">
                                  Action
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Another action
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Something else here
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#!">
                                  Separated link
                                </a>
                              </div>
                            </div>
                            <div className="btn-group mb-2 mr-2">
                              <button type="button" className="btn btn-danger">
                                Danger
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="sr-only">Toggle Dropdown</span>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#!">
                                  Action
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Another action
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Something else here
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#!">
                                  Separated link
                                </a>
                              </div>
                            </div>
                            <div className="btn-group mb-2 mr-2">
                              <button type="button" className="btn btn-warning">
                                Warning
                              </button>
                              <button
                                type="button"
                                className="btn btn-warning dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="sr-only">Toggle Dropdown</span>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#!">
                                  Action
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Another action
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Something else here
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#!">
                                  Separated link
                                </a>
                              </div>
                            </div>
                            <div className="btn-group mb-2 mr-2">
                              <button type="button" className="btn btn-info">
                                Info
                              </button>
                              <button
                                type="button"
                                className="btn btn-info dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="sr-only">Toggle Dropdown</span>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#!">
                                  Action
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Another action
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Something else here
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#!">
                                  Separated link
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
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
          <title>Admin | ProductType | Grocery</title>
        </Helmet>
        {DataDisplay}

      </>
    );
  }
}

export default Grocery;

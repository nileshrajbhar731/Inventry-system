import axios from "axios";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";

export class Vegitables extends Component {
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
    const res = await axios.get("/api/Veg-show");
    console.log(res.data.message);
    this.setState({
      showdata: res.data.message,
    });
  }
  // edit
  Edit = async (id) => {
    const res = await axios.get(`/api/Veg-edit/${id}`);
    console.log(res.data);
    this.setState({
      show: [res.data],
    });
  };
  // update
  Update = async (id) => {
    const res = await axios.put(`/api/Veg-update/${id}`);
  };
  //  delete

  Delete = async (e, id) => {
    const thisClick = e.currentTarget;
    thisClick.innerText = "Deleted";
    const res = await axios.delete(`/api/Veg-delete/${id}`);
    console.log(res.data);
    thisClick.closest("tr").remove();
  };

  HendelInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  AddData = async () => {
    const res = await axios.post("/api/Veg-add", this.state);
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
      return (
        <>
          <tr>
            <th scope="row" key={item.id}>
              {id++}
            </th>
            <td>{item.name}</td>
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
                          <h5 className="m-b-10">Vegitables</h5>
                        </div>
                        <ul className="breadcrumb">
                          <li className="breadcrumb-item">
                            <Link to="/admin">
                              <i className="feather icon-home" />
                            </Link>
                          </li>
                          <li className="breadcrumb-item">
                            <Link to="/Vegitables">ProductType</Link>
                          </li>
                          <li className="breadcrumb-item">
                            <Link to="/Vegitables">Vegitables</Link>
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
                                      <strong className="dark">
                                        Type of Vegitables
                                      </strong>
                                    </option>
                                    <option>Potato</option>
                                    <option>Tomato</option>
                                    <option>Brinjal</option>
                                    <option>Cabbage</option>
                                    <option>Radish</option>
                                    <option>Onion</option>
                                    <option>Bitter Gourd</option>
                                    <option>Lady’s finger</option>
                                    <option>Cauliflower</option>
                                    <option>Pumpkin</option>
                                    {/* 10 */}
                                    <option>Carrot</option>
                                    <option>Ginger</option>
                                    <option>Chilli</option>
                                    <option>Capsicum</option>
                                    <option>Spinach</option>
                                    <option>Jackfruit</option>
                                    <option>Mushroom</option>
                                    <option>Beetroot</option>
                                    <option>Sweet Potato</option>
                                    <option>Cucumber</option>
                                    {/* 10  */}
                                    <option>Broccoli</option>
                                    <option>Asparagus</option>
                                    <option>Corn</option>
                                    <option>Celery</option>
                                    <option>Green bean</option>
                                    <option>Chickpea</option>
                                    <option>Lentil</option>
                                    <option>Peas</option>
                                    <option>Garlic</option>
                                    <option>Coriander</option>
                                    {/* 10 */}
                                    <option>Apple Gourd</option>
                                    <option>Drumstick</option>
                                    <option>Bottle Gourd</option>
                                    <option>Leek</option>
                                    <option>Cluster Beans</option>
                                    <option>Pointed Gourd</option>
                                    <option>Yam</option>
                                    <option>Artichoke</option>
                                    <option>Ash Gourd</option>
                                    <option>Bok Choy</option>
                                    {/* 10 */}
                                    <option>Brussels Sprout</option>
                                    <option>Chayote</option>
                                    <option>Endive</option>
                                    <option>Kohlrabi</option>
                                    <option>Luffa</option>
                                    <option>Parsnip</option>
                                    <option>Ridged Gourd</option>
                                    <option>Swiss Chard</option>
                                    <option>Turnip</option>
                                    <option>Zucchini</option>
                                    {/* 10 */}
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
                                      Vegitables Quantity
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
                                      Vegitables TotalQuantity
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

                                {/* <FileUpload></FileUpload> */}
                                <button
                                  type="submit"
                                  className="btn btn-primary ml-3"
                                >
                                  Submit
                                </button>
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
          <title>Admin | ProductType | Vegitables</title>
        </Helmet>
        {DataDisplay}

      </>
    );
  }
}

export default Vegitables;

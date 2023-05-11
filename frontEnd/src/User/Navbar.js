import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  RemoveItem = (id) => {
    var v = localStorage.getItem("cart");
    var j = JSON.parse(v);
    const index = j.map((object) => object.id).indexOf(id);
    console.log(index);

    if (index > -1) {
      var ls_data = JSON.parse(localStorage.getItem("cart"));
      const data = ls_data.splice(index, 1);
      console.log(data);
      localStorage.setItem("cart", JSON.stringify(ls_data));
    }
  };

  render() {
    setInterval(() => {
      const lsData = JSON.parse(localStorage.getItem("cart"));
      this.setState({ cart: lsData });
    }, 1000);

    var data = localStorage.getItem("cart");
    var cart = "";
    if (data) {
      cart = this.state.cart?.map((item) => {
        return (
          <div className="pro-head bg-white text-dark border" key={item.id}>
            <img
              src={item.url}
              className="img-radius"
              alt="User-Profile-Image"
            />
            <span>{item.name}</span>
            <div
              className="dud-logout text-dark "
              title="remove item"
              onClick={() => this.RemoveItem(item.id)}
            >
              <i className="feather icon-log-out" />
            </div>
          </div>
        );
      });
    }

    if (cart.length === 0) {
      cart = "plase item add";
    }
    return (
      <>
        <nav className="pcoded-navbar">
          <div className="navbar-wrapper">
            <div className="navbar-brand header-logo">
              <Link to="#" className="b-brand">
                <div className="b-bg">
                  <i className="feather icon-trending-up" />
                </div>
                <span className="b-title">Jumpstart</span>
              </Link>

              <Link to="javascript:" className="mobile-menu" id="mobile-collapse">
                <span />
              </Link>
            </div>
            <div className="navbar-content scroll-div">
              <ul className="nav pcoded-inner-navbar">
                <li className="nav-item pcoded-menu-caption">
                  <label>User</label>
                </li>
                <li
                  className={
                    window.location.pathname === "/User"
                      ? "nav-item active"
                      : null
                  }
                >
                  <Link to="/User" className="nav-link">
                    <span className="pcoded-micon">
                      <i className="feather icon-home" />
                    </span>
                    <span className="pcoded-mtext">Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item pcoded-menu-caption">
                  <label>Product</label>
                </li>
                <li className="nav-item pcoded-hasmenu">
                  <Link to="#" className="nav-link">
                    <span className="pcoded-micon">
                      <i className="feather icon-box" />
                    </span>
                    <span className="pcoded-mtext">Product Type</span>
                  </Link>
                  {/* pcoded-submenu */}
                  <ul className="">
                    <li
                      className={
                        window.location.pathname === "/UserFruits"
                          ? "active"
                          : null
                      }
                    >
                      <Link to="/UserFruits">Fruits</Link>
                    </li>
                    <li
                      className={
                        window.location.pathname === "/UserVegitables"
                          ? "active"
                          : null
                      }
                    >
                      <Link to="/UserVegitables">Vegitables</Link>
                    </li>
                    <li
                      className={
                        window.location.pathname === "/UserGrocery"
                          ? "active"
                          : null
                      }
                    >
                      <Link to="/UserGrocery">Grocery</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item pcoded-menu-caption">
                  <label>information</label>
                </li>
                <li
                  className={
                    window.location.pathname === "/IndexHistory"
                      ? "nav-item active"
                      : null
                  }
                >
                  <Link to="/IndexHistory" className="nav-link ">
                    <span className="pcoded-micon">
                      <i className="feather icon-file-text" />
                    </span>
                    <span className="pcoded-mtext">Order information</span>
                  </Link>
                </li>
                <li
                // className={
                //   window.location.pathname === "/User"
                //     ? "nav-item active"
                //     : null
                // }
                >
                  <Link to="/IndexHistory" className="nav-link ">
                    <span className="pcoded-micon">
                      <i className="feather icon-file-text" />
                    </span>
                    <span className="pcoded-mtext">Refund information</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="navbar pcoded-header navbar-expand-lg navbar-light">
          <div className="m-header">
            <Link
              to="javascript:"
              className="mobile-menu"
              id="mobile-collapse1"
            >
              <span />
            </Link>
            <Link to="/" className="b-brand">
              <div className="b-bg">
                <i className="feather icon-trending-up" />
              </div>
              <span className="b-title">Jumpstart</span>
            </Link>
          </div>
          <Link to="javascript:" className="mobile-menu" id="mobile-header">
            <i className="feather icon-more-horizontal" />
          </Link>

          <div className="collapse navbar-collapse bg-dark">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item text-white">
                <Link to="" className="nav-item text-white">{sessionStorage.getItem("fullName")}</Link>
              </li>
              <li className="nav-item text-white">
                <Link to="" className="nav-item text-white">{sessionStorage.getItem("email")}</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              {/* cart icons */}
              <li id="cart_">
                <div className="dropdown drp-user">
                  <Link
                    to=""
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="icon feather icon-shopping-cart text-white" />
                    <h5 className="cart_number text-white">{this.state.cart.length}</h5>
                  </Link>
                  <div
                    className="dropdown-menu dropdown-menu-right profile-notification"
                    id="cart_data"
                  >
                    {cart}
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown drp-user">
                  <Link
                    to=""
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="icon feather icon-settings text-white" />
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right profile-notification">
                    <div className="pro-head">
                      <img
                        src="assets/images/user/avatar-1.jpg"
                        className="img-radius"
                        alt="User-Profile-Image"
                      />
                      <span>{sessionStorage.getItem("fullName")}</span>
                      <Link to="/LogOut" className="dud-logout" title="Logout">
                        <i className="feather icon-log-out" />
                      </Link>
                    </div>
                    <ul className="pro-body">
                      <li>
                        <Link to="" className="dropdown-item" title="Profile">
                          <i className="feather icon-user" />
                          Profile
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </header>
      </>
    );
  }
}

export default Navbar;

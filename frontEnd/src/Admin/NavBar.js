import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
export class NavBar extends Component {
  onLinkClick = (e) => {
    e.preventDefault();
  };
  render() {
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

              <Link to="/admin" className="mobile-menu" id="mobile-collapse">
                <span />
              </Link>
            </div>
            <div className="navbar-content scroll-div">
              <ul className="nav pcoded-inner-navbar">
                <li className="nav-item pcoded-menu-caption">
                  <label>Admin</label>
                </li>
                <li className="nav-item active">
                  <Link to="/admin" className="nav-link">
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
                    <li>
                      <Link to="/Fruits">Fruits</Link>
                    </li>
                    <li>
                      <Link to="/Vegitables">Vegitables</Link>
                    </li>
                    <li>
                      <Link to="/Grocery">Grocery</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item pcoded-menu-caption">
                  <label>information</label>
                </li>
                <li className="nav-item">
                  <Link to='/PaymentInformation' className="nav-link">
                  <span className="pcoded-micon">
                      <i className="feather icon-file-text" />
                    </span>
                    <span className="pcoded-mtext">Payment information</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/Information' className="nav-link ">
                  <span className="pcoded-micon">
                      <i className="feather icon-server" />
                    </span>
                    <span className="pcoded-mtext">User information</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/Retailar' className="nav-link ">
                  <span className="pcoded-micon">
                      <i className="feather icon-server" />
                    </span>
                    <span className="pcoded-mtext">Retailar information</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/AdminInfo' className="nav-link ">
                  <span className="pcoded-micon">
                      <i className="feather icon-server" />
                    </span>
                    <span className="pcoded-mtext">AdminInfo information</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/OrderInformation' className="nav-link ">
                  <span className="pcoded-micon">
                  <i className="feather icon-file-text" />
                    </span>
                    <span className="pcoded-mtext">Order information</span>
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to='/RefundInformation' className="nav-link ">
                  <span className="pcoded-micon">
                  <i className="feather icon-file-text" />
                    </span>
                    <span className="pcoded-mtext">Refund information</span>
                  </Link>
                </li> */}
                
                {/* <li className="nav-item pcoded-menu-caption">
                  <label>Chart &amp; Maps</label>
                </li>
                <li className="nav-item">
                  <a href="chart-morris.html" className="nav-link ">
                    <span className="pcoded-micon">
                      <i className="feather icon-pie-chart" />
                    </span>
                    <span className="pcoded-mtext">Chart</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="map-google.html" className="nav-link ">
                    <span className="pcoded-micon">
                      <i className="feather icon-map" />
                    </span>
                    <span className="pcoded-mtext">Maps</span>
                  </a>
                </li>
                <li className="nav-item pcoded-menu-caption">
                  <label>Pages</label>
                </li>
                <li className="nav-item pcoded-hasmenu">
                  <a href="" className="nav-link ">
                    <span className="pcoded-micon">
                      <i className="feather icon-lock" />
                    </span>
                    <span className="pcoded-mtext">Authentication</span>
                  </a>
                  <ul className="pcoded-submenu">
                    <li>
                      <a href="auth-signup.html" target="_blank">
                        Sign up
                      </a>
                    </li>
                    <li>
                      <a href="auth-signin.html" target="_blank">
                        Sign in
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="sample-page.html" className="nav-link">
                    <span className="pcoded-micon">
                      <i className="feather icon-sidebar" />
                    </span>
                    <span className="pcoded-mtext">Sample page</span>
                  </a>
                </li>
                <li className="nav-item disabled">
                  <a href="" className="nav-link">
                    <span className="pcoded-micon">
                      <i className="feather icon-power" />
                    </span>
                    <span className="pcoded-mtext">Disabled menu</span>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
        <header className="navbar pcoded-header navbar-expand-lg navbar-light">
          <div className="m-header">
            <a className="mobile-menu" id="mobile-collapse1" href="javascript:">
              <span />
            </a>
            <a href="index.html" className="b-brand">
              <div className="b-bg">
                <i className="feather icon-trending-up" />
              </div>
              <span className="b-title">Jumpstart</span>
            </a>
          </div>
          <a className="mobile-menu" id="mobile-header" href="javascript:">
            <i className="feather icon-more-horizontal" />
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">

                <Link to=''>
                  {sessionStorage.getItem("fullName")}
                </Link>
              </li>
              <li className="nav-item">

                <Link to=''>
                  {sessionStorage.getItem("email")}
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li>
                <div className="dropdown drp-user">
                <Link to=''
                    className="dropdown-toggle"
                    data-toggle="dropdown">
                    <i className="icon feather icon-settings" />
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right profile-notification">
                    <div className="pro-head">
                      <img
                        src="assets/images/user/avatar-1.jpg"
                        className="img-radius"
                        alt="User-Profile-Image"
                      />
                      <span>{sessionStorage.getItem("fullName")}</span>
                      <Link to="/AdminLogOut" className="dud-logout" title="Logout">
                        <i className="feather icon-log-out" />
                      </Link>
                    </div>
                    {/* <ul className="pro-body">
                      <li>
                        <Link to="" className="dropdown-item" title="Profile">
                          <i className="feather icon-user" />Profile
                        </Link>
                      </li>
                    </ul> */}
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

export default NavBar;

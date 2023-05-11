import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  
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

              <Link to="/User" className="mobile-menu" id="mobile-collapse">
                <span />
              </Link>
            </div>
            <div className="navbar-content scroll-div">
              <ul className="nav pcoded-inner-navbar">
                <li className="nav-item pcoded-menu-caption">
                  <label>Retailer</label>
                </li>
                <li className="nav-item active">
                  <Link to="/IndexRetailer" className="nav-link">
                    <span className="pcoded-micon">
                      <i className="feather icon-home" />
                    </span>
                    <span className="pcoded-mtext">Dashboard</span>
                  </Link>
                </li>

                <li className="nav-item pcoded-menu-caption">
                  <label>information</label>
                </li>
                <li className="nav-item">
                  <Link to='/RetailerHistory' className="nav-link ">
                    <span className="pcoded-micon">
                      <i className="feather icon-file-text" />
                    </span>
                    <span className="pcoded-mtext">Order information</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='' className="nav-link ">
                    <span className="pcoded-micon">
                      <i className="feather icon-file-text" />
                    </span>
                    <span className="pcoded-mtext" title='Upcoming Project'>Refund information</span>
                  </Link>
                </li>
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
                      <Link to="/RetailerLogOut" className="dud-logout" title="Logout">
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
    )
  }
}

export default Navbar
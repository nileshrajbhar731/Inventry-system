import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar'

export class RefundInformation extends Component {
  render() {
    return (
<>
<NavBar/>
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
                  <h5 className="m-b-10">Refund Information</h5>
                </div>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link to='/admin'><i className="feather icon-home" /></Link></li>
                  <li className="breadcrumb-item"><Link to=''>Information</Link></li>
                  <li className="breadcrumb-item"><Link to=''>Refund Information</Link></li>
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
                    <h5>Order received Information</h5>
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
                            <th>accept</th>
                            <th>regect</th>
                            <th>cncle</th>
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
              {/* [ Hover-table ] end */}
              <div className="col-xl-12">
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
    )
  }
}

export default RefundInformation
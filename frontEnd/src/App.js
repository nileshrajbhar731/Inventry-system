import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import IndexAdmin from './Admin/IndexAdmin'
import IndexInformation from './Admin/Information/IndexInformation'
import OrderInformation from './Admin/Information/OrderInformation'
import RefundInformation from './Admin/Information/RefundInformation'
import Retailar from './Admin/Information/Retailar'
import Fruits from './Admin/productType/Fruits'
import UserFruits from './User/UserFruits'
import Grocery from './Admin/productType/Grocery'
import Vegitables from './Admin/productType/Vegitables'
import ErrorPage from './Pages/ErrorPage'
import Index from './Pages/Index'
import Login from './Pages/Login'
import IndexRetailer from './Retailer/IndexRetailer'
import IndexUser from './User/IndexUser'
import UserVegitables from './User/UserVegitables'
import UserGrocery from './User/UserGrocery'
import PaymentDetails from './User/Payment/PaymentDetails'
import LogOut from './User/LogOut'
import Register from './Pages/Register'
import IndexHistory from './User/OrderHistory/IndexHistory'
import PaymentGetway from './User/Payment/PaymentGetway'
import PaymentInformation from './Admin/Information/PaymentInformation'
import RetailerHistory from './Retailer/OrderHistory/RetailerHistory'
import RetailarPaymentDetails from './Retailer/Payment/RetailerPaymentDetails'
import RetailarPaymentGetway from './Retailer/Payment/RetailerPaymentGetway'
import RetailerLogOut from './Retailer/RetailerLogOut'
import AdminLogOut from './Admin/AdminLogOut'
import AdminInfo from './Admin/Information/AdminInfo'
import UserCart from './User/UserCart'
import './App.css'
import ForgetPage from './Pages/ForgetPage'


export class App extends Component {

  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/forget' element={<ForgetPage />} />

            {/* User data */}
            <Route path='/User' element={<IndexUser />} />
            <Route path='/UserCart' element={<UserCart />} />
            <Route path='/UserFruits' element={<UserFruits />} />
            <Route path='/UserVegitables' element={<UserVegitables />} />
            <Route path='/UserGrocery' element={<UserGrocery />} />
            <Route path='/IndexHistory' element={<IndexHistory />} />
            <Route path='/LogOut' element={<LogOut />} />
            <Route path='/PaymentDetails' element={<PaymentDetails />} />
            <Route path='/PaymentGetway' element={<PaymentGetway />} />

            {/* admin Data */}
            <Route path='/admin' element={<IndexAdmin />} />
            <Route path='/Fruits' element={<Fruits />} />
            <Route path='/Vegitables' element={<Vegitables />} />
            <Route path='/Grocery' element={<Grocery />} />
            <Route path='/RefundInformation' element={<RefundInformation />} />
            <Route path='/Retailar' element={<Retailar />} />
            <Route path='/AdminInfo' element={<AdminInfo />} />
            <Route path='/Information' element={<IndexInformation />} />
            <Route path='/OrderInformation' element={<OrderInformation />} />
            <Route path='/PaymentInformation' element={<PaymentInformation />} />
            <Route path='/AdminLogOut' element={<AdminLogOut />} />

            {/* Retailer */}
            <Route path='/RetailerHistory' element={<RetailerHistory />} />
            <Route path='/IndexRetailer' element={<IndexRetailer />} />
            <Route path='/RetailerLogOut' element={<RetailerLogOut />} />
            <Route path='/RetailarPaymentDetails' element={<RetailarPaymentDetails />} />
            <Route path='/RetailarPaymentGetway' element={<RetailarPaymentGetway />} />
            {/* Retailer */}

            {/* /admin/Fruits */}
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </Router>
      </>
    )
  }
}

export default App
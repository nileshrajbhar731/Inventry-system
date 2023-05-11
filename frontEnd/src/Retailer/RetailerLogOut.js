import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';

class RetailerLogOut extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        sessionStorage.removeItem("access_token_Retailer");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("fullName");
        sessionStorage.removeItem("phoneNumber");
        return (
            <>
            <Navigate
          to={{
            pathname: "/login",
          }}/>
            </>
        )
    }
}

export default RetailerLogOut
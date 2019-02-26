import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './sidemenu.css'

export default class Sidemenu extends Component {
    render() {
        return (
            <React.Fragment>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark flex-md-column flex-row align-items-start py-2 tinggi">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between">
                                {/* <li className="nav-item">
                                    <Link to="/"className="nav-link pl-0 text-nowrap" href="1"><i className="fa fa-bullseye fa-fw"></i> <span className="font-weight-bold">Home</span></Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link to="/Addproduct" className="nav-link pl-0"><i className="fa fa-heart-o fa-fw"></i> <span className="d-none d-md-inline">Add Product</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Addproduct2" className="nav-link pl-0"><i className="fa fa-heart-o fa-fw"></i> <span className="d-none d-md-inline">Add Product 2</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Products" className="nav-link pl-0"><i className="fa fa-heart-o fa-fw"></i> <span className="d-none d-md-inline">Transaction</span></Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
            </React.Fragment>
        )
    }
}
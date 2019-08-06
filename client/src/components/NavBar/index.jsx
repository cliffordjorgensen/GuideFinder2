<<<<<<< HEAD
import React from 'react'
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
// import ContactUs from './../ContactUs'

const index = () => {
    return (
        <div>
            <nav className="navbar navbar navbar-expand-lg shadow-sm">
                <Link className="navbar-brand naturalWHite rounded p-2 " to="/">
                    <i className="fa fa-home"></i> Home
                </Link>

                <div className="collapse navbar-collapse float-right" id="navbarText">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link className="nav-link float-right naturalWHite" to="/profiles/">
                                <i className="fa fa-users"></i>
                                Profiles
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle naturalWHite " data-toggle="dropdown" to="#" role="button"
                                aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-sign-in"></i>
                                    Log In
                            </Link>
                            <div className="dropdown-menu HighlightGreen">
                                <Link className="dropdown-item guide" to="/logIn">
                                    Guide
                                    </Link>
                            <div role="separator" className="dropdown-divider"></div>
                                <Link className="dropdown-item traveler" to="/loginUser">
                                    Traveler
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link naturalWHite" to="/ContactUs">
                            <i className="fa fa-id-badge"></i> 
                            Contact us
                            </Link>
                        </li>
                    </ul>
                </div>


                {/* <Link to="/profiles/">Profiles</Link>
                <Link to="/logIn/">Log In</Link>
                <Link to="/contactUs/">Contact Us</Link> */}
            </nav>
=======
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { NavDropdown } from "react-bootstrap";
const index = () => {
  return (
    <div>
      <nav className="navbar navbar navbar-expand-lg shadow-sm">
        <Link className="navbar-brand naturalWHite rounded p-2 " to="/">
          <i className="fa fa-home" /> Home
        </Link>
        <div className="collapse navbar-collapse float-right" id="navbarText">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link
                className="nav-link float-right naturalWHite"
                to="/profiles/"
              >
                <i className="fa fa-users" />
                Profiles
              </Link>
            </li>
            <li className="nav-item">
              <NavDropdown title="Log In" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/signin">Guide</Link>
                </NavDropdown.Item>
                <NavDropdown.Item to="/login/guide">User</NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className="nav-item">
              <Link className="nav-link naturalWHite" to="/contactUs">
                <i className="fa fa-id-badge" />
                Contact us
              </Link>
            </li>
          </ul>
>>>>>>> b4c68cfb3f7cf1eb9a1641d0f67cb778e8b1965d
        </div>
      </nav>
    </div>
  );
};
export default index;

import React from 'react'
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import {  NavDropdown } from 'react-bootstrap';

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
                        <li class="nav-item">
                            <NavDropdown title="Log In" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link to = '/signin'>
                                        Guide
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to = '/map'>
                                        Map
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item to ="/login/guide">User</NavDropdown.Item>
                            </NavDropdown>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link naturalWHite" to="/contactUs">
                                <i className="fa fa-id-badge"></i>
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default index

/* <nav id="navbar-example2" className="navbar navbar navbar-expand-lg shadow-sm">
                <a className="navbar-brand naturalWHite rounded p-2 " href="/home"> <i className="fa fa-home"></i> Home</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="fa fa-bars HighlightGreen"></i></span>
                </button>
                <div className="collapse navbar-collapse float-right" id="navbarText">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link float-right naturalWHite" href="/profiles"> <i className="fa fa-users"></i>
                                Profiles</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle naturalWHite " data-toggle="dropdown" href="#" role="button"
                                aria-haspopup="true" aria-expanded="false"> <i className="fa fa-sign-in"></i> Log In</a>
                            <div className="dropdown-menu HighlightGreen">
                                <a className="dropdown-item guide" href="/login">Guide</a>
                                <div role="separator" className="dropdown-divider"></div>
                                <a className="dropdown-item traveler" href="/loginUser">Traveler</a>

                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link naturalWHite" href="/contactUs"> <i className="fa fa-id-badge"></i> Contact us</a>
                        </li>

                    </ul>
                </div>
            </nav> */

            // <nav>
            //     <ul>
            //         <li>
            //             <Link to="/">Home</Link>
            //         </li>
            //         <li>
            //             <Link to="/profiles/">Profiles</Link>
            //         </li>
            //         <li>
            //             <Link to="/users/">Log In</Link>
            //         </li>
            //         <li>
            //             <Link to="/contactUs/">Contact Us</Link>
            //         </li>
            //     </ul>
            // </nav>
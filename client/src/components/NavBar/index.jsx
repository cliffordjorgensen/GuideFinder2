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
        </div>
      </nav>
    </div>
  );
};
export default index;

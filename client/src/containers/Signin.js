import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { signin } from "../actions";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "./style.css";

class Signin extends Component {
  onSubmit = formValues => {
    this.props.signin(formValues, () => {
      this.props.history.push("/profile");
    });
  };
  renderInput = ({ input, type }) => {
    return <input type={type} {...input} />;
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
                <form  onSubmit={handleSubmit(this.onSubmit)}>
                  <div className='form-group'>
                    <label>    Email Address  </label>
               <Field
                      name="email"
                      type="email"
                      label="Email"
                      component={this.renderInput}
                      autoComplete="none"
                      className="form-control"
                      aria-describedby="emailHelp"
                    />
                    <label>Password</label>
                    <Field
                      name="password"
                      type="password"
                      label="password"
                      component={this.renderInput}
                      autoComplete="none"
                    />
                  <button className="btn btn-block tx-tfm navyBlue text-white">
                    {" "}
                    <i className="fa fa-sign-in" aria-hidden="true" />
                    Signin
                  </button>
                  <div>{this.props.errorMessage}</div>
                  <br />
                  <div className="col-md-12 text-center ">
                    <button className="btn btn-block tx-tfm navyBlue text-white">
                      <Link
                        className="nav-link float-left naturalWHite"
                        to="/guideloc"
                      >
                        <i className="fa fa-paper-plane" aria-hidden="true" />
                        Sign Up
                      </Link>
                    </button>
                  </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
    );
  }
}
function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}
export default compose(
  connect(
    mapStateToProps,
    { signin }
  ),
  reduxForm({ form: "signin" })
)(Signin);


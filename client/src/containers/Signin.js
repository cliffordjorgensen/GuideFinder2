import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { signin } from "../actions";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'

class Signin extends Component {
  onSubmit = formValues => {
    console.log(formValues)
    this.props.signin(formValues, () => {
      this.props.history.push("/counter");
    });
  };

  renderInput = ({ input, type }) => {
    return <input type={type} {...input} />;
  };

  render() {
    console.log('from signin', this.props);
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset className = 'my-fieldset'>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            label="Email"
            component={this.renderInput}
            autoComplete="none"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            label="password"
            component={this.renderInput}
            autoComplete="none"
          />
        </fieldset>
        <button>Signin</button>
        <div>{this.props.errorMessage}</div>
        <div>
          <Link className="nav-link  naturalWHite" to="/signup/">
            Guide Signup
          </Link>
        </div>
      </form>
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

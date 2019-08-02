import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signin } from "../actions";
import { Link } from 'react-router-dom';



class Signin extends Component {

  onSubmit = formValues => {
    this.props.signin(formValues, () => {
      this.props.history.push('/counter');
    });
  }

  renderInput = ({ input }) => {
    return <input {...input}/>;
  }

  render() {
    console.log(this.props);
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name='email'
            type='text'
            label='Email'
            component={this.renderInput}
            autoComplete='none'/>
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name='password'
            type='password'
            label='password'
            component={this.renderInput}
            autoComplete='none'/>
        </fieldset>
        <button><Link to='/map'>Signin</Link></button>
        <div>{this.props.errorMessage}</div>
      </form>
    );
  }
}

function mapStateToProps(state){
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, { signin }),
  reduxForm({ form: 'signin' })
)(Signin);
import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./../actions";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import requireAuth from "./../hoc/requireAuth";
// import { Link } from "react-router-dom";

class Counter extends Component {
  render() {
    console.log("Counters props", this.props);

    return (
      <div>
        <h1>Counter</h1>
        <p>Counter: {this.props.counter}</p>
        <button onClick={this.props.incrementCounter}>Increment</button>
        <button onClick={this.props.decrementCounter}>Decrement</button>
        <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
          <h4 id="fat">
            <div className="jumbotron mt-3 bg-white pl-3 ml-3 mr-3 pt-3 pb-3 mb-5">
              <img
                src=""
                className="rounded float-right col-md-4 border-secondary"
                alt=""
              />
              <p>
                <strong>Name: {this.props.name}</strong>
              </p>
              <p>
                <strong>Age: </strong>
                {this.props.age}
              </p>
              <p>
                <strong>Years of experience: </strong>
                {this.props.yearsofExperience}
              </p>
              <p>
                <strong>Activities: </strong>
                {this.props.activities}
              </p>
              <p>
                <strong>City: </strong>
                {this.props.city}
              </p>
              <p>
                <strong>Description: </strong>
                {this.props.descriptionActivity}
              </p>
              <div>
                <Button variant="primary" size="lg" to = '#' block>
                 Chat
                </Button>
                <Button variant="secondary" size="lg" block to = '#'>
                 Edit Profile
                </Button>
              </div>
              <br />
            </div>
          </h4>
        </div>

        {/* <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
        <h4 id="fat">
            <div className="jumbotron mt-3 bg-white pl-3 ml-3 mr-3 pt-3 pb-3 mb-5">
                <img src={{photolink}} className="rounded float-right col-md-4 border-secondary">
                <h1><strong>{{name}}</strong></h1>
                <br>
                <p><strong>Age: </strong>{{age}}</p>
                <p><strong>Years of experience: </strong>{{yearsofExperience}}</p>
                <p><strong>Activities: </strong>{{activity}}</p>
                <p><strong>City: </strong>{{city}}</p>
                <p><strong>Description: </strong>{{descriptionActivity}}</p>

                < Link className="btn navyBlue text-white  btn-lg extendedInfo active" type="button radio" data-id={{guideID}} to="#" role="button">See full profile</a>
            </div>


        </h4>
     
      </div> */}
      </div>
    );
  }
}

function mapStateToProps({ counter }) {
  return { counter: counter.counter };
}

export default requireAuth(
  connect(
    mapStateToProps,
    { incrementCounter, decrementCounter }
  )(Counter)
);

import React, { Component } from "react";
// import { connect } from 'react-redux';
import GoogleMap from "../components/GoogleMap";

class Maps extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <GoogleMap />
        </div>
      </div>
    );
  }
}

export default Maps;

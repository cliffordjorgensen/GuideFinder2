import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchLocation } from "./../actions/locationAction"
import { geolocated } from "react-geolocated";

class Location extends Component {
    componentDidMount(){
        this.props.geolocated()
    }

    render() {
        return  this.props.coords
        const location = {
            lat: this.props.coords.latitude,
            lng: this.props.coords.longitude
        }
    }
}

const mapStateToProps = state =>({
    location : state.location
});

export default connect(mapStateToProps, { fetchLocation })(Location)
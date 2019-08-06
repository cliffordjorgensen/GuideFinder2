import React, {Component} from 'react';
import {connect} from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css'

class Index extends Component {
    sendCurrentLoc = (e) => {
        console.log(e)
    }
     eachCity () {
        if (this.props.cities) {
            console.log(this.props.cities.Results)
            return this.props.cities.Results.map(city => {
                return(

                    <li onClick = {()=>{this.sendCurrentLoc({lat: city.lat, lng: city.lon})}} key = {city.zmw} >{city.name}, {city.c}</li>
                )
            })
        }
    }

    render() {

        return (
            <div className="jumbotron">
                <h4>Maybe you mean...</h4>
                <ul>
                    {this.eachCity()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cities: state.searchReducer.city
})

export default connect(mapStateToProps, null)(Index);
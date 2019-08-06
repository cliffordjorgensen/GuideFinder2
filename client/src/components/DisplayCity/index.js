import React, {Component} from 'react';
import {connect} from "react-redux"


class Index extends Component {
    sendCurrentLoc = (e) => {
        console.log(e)
    }
     eachCity () {
        if (this.props.cities) {
            console.log(this.props.cities.Results)
            return this.props.cities.Results.map(city => {
                return(

                    <button onClick = {()=>{this.sendCurrentLoc({lat: city.lat, lng: city.lon})}} key = {city.zmw} >{city.name}</button>
                )
            })
        }
    }

    render() {

        return (
            <div>
                <p>Cities with the same name</p>
                {this.eachCity()}




            </div>
        );
    }
}

const mapStateToProps = state => ({
    cities: state.searchReducer.city
})

export default connect(mapStateToProps, null)(Index);
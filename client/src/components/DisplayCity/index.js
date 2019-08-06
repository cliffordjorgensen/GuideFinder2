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
                    <div key = {city.name}>
                        <button onClick = {()=>{this.sendCurrentLoc({lat: city.lat, lng: city.lon})}} key = {city.zmw} className="btn btn-primary">{city.name}, {city.c}</button>
                    </div>


                )
            })
        }
    }

    renderCityList = () => {
        if (this.props.cities){
            return (
                <div>
                    <h4>Maybe you mean...</h4>
                    {this.eachCity()}

                </div>
            )
        }
    }



    render() {

        return (
            <div>
                {this.renderCityList()}
            </div>

        );
    }
}

const mapStateToProps = state => ({
    cities: state.searchReducer.city
})

export default connect(mapStateToProps, null)(Index);
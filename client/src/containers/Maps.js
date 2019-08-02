import React, {Component} from 'react';
// import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import GoogleMap from '../components/GoogleMap';
import Search from '../components/Search/Search';
class Maps extends Component {
    render() {
        return (
            <div>
                <Search/>
                <NavBar/>
                <div className = 'container'>
                    <GoogleMap />
                </div>
                
            </div>
        );
    }
}

export default Maps;
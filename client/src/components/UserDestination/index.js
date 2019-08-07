import React, {Component} from 'react';
import DisplayCity from "../DisplayCity2/user"
import Search from "../Search/index"
import { connect } from "react-redux";


class Index extends Component {


    render() {
        console.log(this.props.match)
        return (
            <div>
                <Search/>
                <DisplayCity/>

            </div>
        );
    }
}

const mapStateTpProps = state =>({
    match: state.matchReducer.match,
    matchError: state.matchReducer.matchError

})



export default connect(mapStateTpProps, null)(Index);
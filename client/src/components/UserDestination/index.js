import React, {Component} from 'react';
import DisplayCity from "../DisplayCity2/user"
import Search from "../Search/index"


class Index extends Component {
    render() {
        return (
            <div>
                <Search/>
                <DisplayCity/>

            </div>
        );
    }
}

export default Index;
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const index = () => {
    return (
        <div>
   <div className="input-group">
        <input type="text" className="form-control" id="search-term" placeholder="Search term" aria-label="traveler search term" aria-describedby="button-addon4"/>
        <div className="input-group-append" id="button-addon4">
            <button className="btn btn-outline-secondary" type="button">Filters</button>
            <button className="btn btn-success" type="button">Submit</button>
        </div>
    </div>
</div>
    )
}

export default index;

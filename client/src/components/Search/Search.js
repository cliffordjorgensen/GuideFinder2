import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Search = props => {
    return (
        <div>
   <div class="input-group">
        <input type="text" class="form-control" id="search-term" placeholder="Search term" aria-label="traveler search term" aria-describedby="button-addon4"/>
        <div class="input-group-append" id="button-addon4">
            <button class="btn btn-outline-primary" type="button">Filters</button> {props.filters}
            <button class="btn btn-outline-success" type="button">Submit</button> {props.submit}
        </div>
    </div>
</div>
    )
}

export default Search;

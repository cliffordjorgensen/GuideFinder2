import React from 'react'

const Search = () => {
    return (
        <div class="input-group">
            <input type="text" className="form-control" placeholder="Search term"/>
                <button className="btn btn-outline-secondary" type="button">Filters</button>
                <button className="btn btn-outline-secondary" type="button">Submit</button>
        </div>

    )
}

export default Search;

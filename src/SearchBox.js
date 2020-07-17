import React from 'react';

function SearchBox(props) {
    return (
        <div className="d-flex justify-content-center m-3">
            <input onChange={props.onInputChange} className="border rounded border-light h4 text-center p-2 bg-dark text-white" type="text" placeholder="SEARCH ROBOTS"></input>
        </div>
    )
}

export default SearchBox;

import React from "react";
import './SearchBar.css'
const SearchBar = () => {

    return(
        <form>
            <input type='text' placeholder="Search for a teacher" className="search-bar"/>
        </form>
    )
}

export default SearchBar;
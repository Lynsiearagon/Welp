import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import './Navigation.css';


const SearchBar = () => {
    const location = useLocation();

    let showSearchBar;

    if ((location.pathname !== '/login') && (location.pathname !== '/signup')) {
        showSearchBar = (
            <>
                <input type="text" id="searchBar" placeholder="tacos, cheap dinner, Max's"/>
                <button type="submit" id="searchButton"> 
                    <img src={require("../../images/magnifyingGlass.png")} alt="search" id="magGlass"/>
                </button>
            </>
        )
    };

    return (
        <div id="searchBarDiv">
            {showSearchBar}
        </div>
    )

}

export default SearchBar
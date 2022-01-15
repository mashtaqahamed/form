import React from "react";


function SearchBar({placeholder}){
    return(
        <div className="search">
            <div className="searchInputs">
                <input type="text"placeholder={placeholder}></input>
                <div className="searchIcon">
                </div>
            </div>
            <div className="dataResult">
                {/* {Data.map(value,_key=>{
                    return <a>{value.name}</a>; */}
              

            </div>
        </div>
    )
}

export default SearchBar;
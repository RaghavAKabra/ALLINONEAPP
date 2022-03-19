import React from "react";
import { MdSearch } from "react-icons/md";
import "./NoteTaking.css";

var Search = ({handlesearchnote}) => {
    return(
        <div className="Search">
<MdSearch className="search-icons" size="1.3em" />
        <input onChange={(event) => handlesearchnote(event.target.value)}type="text" placeholder="Type to Search" />
        </div>
    )
}
export default Search
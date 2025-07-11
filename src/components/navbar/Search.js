import React from 'react'

import "./search.css"
import {useNavigate} from "react-router-dom";

const Search = () => {

    const navigate = useNavigate();

    return (
            <div className="navbar" style={{paddingRight: "3%", justifyContent:"right"}}>
                <h3>Ideas</h3>
                <h3 onClick={() => navigate("/my-app/contact")}>Contact me</h3>
                <h3 onClick={() => navigate("/my-app")}>Dashboard</h3>
            </div>
    )
}

export default Search

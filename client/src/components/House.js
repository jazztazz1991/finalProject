import React from "react";
import "../styles/App.css"
import { Link } from "react-router-dom";

const House = () => (
    <div className="house">
        <p>house</p>
        <Link to="/house">View House</Link>
    </div>
)


export default House;
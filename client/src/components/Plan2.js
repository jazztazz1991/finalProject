import React from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";

const Plan2 = () => (
    <div className="plan">
        <h3>Traditional Management</h3>
        <p>
            Our traditional plan offers owners the high level of service and revenue that we are known for combined with a more traditional approach to your fee structure
        </p>
        <Link to="/plan2">Learn More</Link>
    </div>
)


export default Plan2;
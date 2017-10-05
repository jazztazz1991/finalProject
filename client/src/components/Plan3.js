import React from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";

const Plan3 = () => (
    <div className="plan">
        <h3>Guaranteed Return</h3>
        <p>
            The safest option for an investor, our guaranteed return program is our all inclusive program featuring all that makes At Home the best in the business.
        </p>
        <Link to="/plan3">Learn More</Link>
    </div>
)


export default Plan3;
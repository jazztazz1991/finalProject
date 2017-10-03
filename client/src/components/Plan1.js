import React from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";

const Plan1 = () => (
    <div className="plan">
        <h3>No Fee Management</h3>
        <p>
            Our no fee management option is our all-inclusive program that includes the expense of marketing your home, concierge services, and much more. 
        </p>
        <Link to="/plan1">Learn More</Link>
    </div>
)


export default Plan1;
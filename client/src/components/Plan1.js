import React from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";
import Center from 'react-center';

const Plan1 = () => (
    <Center>
    <div className="plan">
        <img src={require("../images/check.jpg")} alt="check mark" />
        <h3>No Fee Management</h3>
        <p>
            Our no fee management option is our all-inclusive program that includes the expense of marketing your home, concierge services, and much more. 
        </p>
        <Link to="/plan1">Learn More</Link>
    </div>
    </Center>
)


export default Plan1;
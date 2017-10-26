import React from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";
import Center from 'react-center';

const Plan3 = () => (
    <Center>
    <div className="plan">
        <img src={require("../images/check.jpg")} alt="check mark" />
        <h3>Guaranteed Return</h3>
        <p>
            The safest option for an investor, our guaranteed return program is our all inclusive program featuring all that makes At Home the best in the business.
        </p>
        <Link to="/plan3">Learn More</Link>
    </div>
    </Center>
)


export default Plan3;
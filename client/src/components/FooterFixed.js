import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import "../styles/Footer.css";

const Footer = () => (
    <div className="footerFixed">
        <Row>
            <Col size="md-3" />
            <Col size="md-6">
                <h5 className="footTitle">This is Property Management</h5>
            </Col>
            <Col size="md-3" />
        </Row>
        <Row>
            <Col size="md-3" />
            <Col size="md-6">
                <p className="footTitle"><Link to="/login">Admin Page</Link> </p>
            </Col>
            <Col size="md-3" />
        </Row>
    </div>
)


export default Footer;
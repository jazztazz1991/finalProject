import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import "../styles/Footer.css";

const Footer = () => (
    <div className="footer">
        <Row>
            <Col size="md-3" />
            <Col size="md-6">
                <h5 className="footTitle">This is Property Management</h5>
            </Col>
            <Col size="md-3" />
        </Row>
    </div>
)


export default Footer;
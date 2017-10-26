import React from "react";
import { Col, Row, Container } from "../components/Grid";
import "../styles/Header.css"

const Header = () => (
    <Row>
        <Col size="md-4" />
        <Col size="md-4">
            <h1 className="header">Chase Property Management</h1>
        </Col>
        <Col size="md-4" />
    </Row>
)


export default Header;
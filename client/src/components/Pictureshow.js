import React from "react";
import { Col, Row, Container } from "../components/Grid";
import "../styles/Photo.css";
import Center from 'react-center';

const Picture = () => (
    <div>
        <Container fluid>
            <Row>
                <Col size="md-4">
                    <Center>
                    <img className="images" src={require("../images/house2.jpg")} alt="photo of our first house" />
                    </Center>
                </Col>
                <Col size="md-4">
                    <Center>
                    <img className="images" src={require("../images/house4.jpg")} alt="photo of our first house" />
                    </Center>
                </Col>
                <Col size="md-4">
                    <Center>
                    <img className="images" src={require("../images/house6.jpg")} alt="photo of our first house" />
                    </Center>
                </Col>
            </Row>
        </Container>
    </div>
)

export default Picture;
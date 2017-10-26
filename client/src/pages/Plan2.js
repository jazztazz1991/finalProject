import React, { Component } from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import SPlan from "../components/Plan1";
import { Col, Row, Container } from "../components/Grid";
import Center from 'react-center';
import Footer from "../components/FooterFixed";
import "../styles/App.css";

const About = () => (
            <div>
                <Container fluid>
                    <Row>
                        <Header />
                    </Row>
                    <Row>
                        <Nav />
                    </Row>
                    <Row>
                        <Col size="md-4" />
                        <Col size="md-4">
                            <Center>
                            <img className="images" src={require("../images/house3.jpg")} alt="photo of our first house" />
                            </Center>
                        </Col>
                        <Col size="md-4" />
                    </Row>
                    <Row>
                        <h1>Traditional Management</h1>
                    </Row>
                    <Row>
                        <Col size="md-1" />
                        <Col size="md-10">
                        <p className="planText">
                            Annual Contract Required. If you pay the entire year in advance, you receive one month free!
                        </p>
                        <p className="planText">
                            With Traditional Management we have many packages available to fill whatever your need. One of our staff would be happy to go over each package and find which suites your needs the best.
                        </p>
                        </Col>
                        <Col size="md-1" />
                    </Row>
                    <Row>
                        <Footer />
                    </Row>
            </Container>
            </div>    
)


export default About;
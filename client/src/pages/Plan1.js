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
                            <img className="images" src={require("../images/house1.jpg")} alt="photo of our first house" />
                            </Center>
                        </Col>
                        <Col size="md-4" />
                    </Row>
                    <Row>
                        <h1>No Fee Managment</h1>
                    </Row>
                    <Row>
                        <Col size="md-1" />
                        <Col size="md-10">
                        <p className="planText">
                            Never pay a management fee again. We believe in the principle that the relationship between a vacation home owner and their management company is a partnership that both should benefit from. All too often this partnership principle is undone with maintenance fees, service fees, and unnecessary charges that benefit the management company and abate the rental revenue normally reserved for the home owner.
                        </p>
                        <p className="planText">
                            No Fee Management simply applies the principle of partnership, while also securing that booking revenue is the source of revenue for both home owner and management company. No Fee Management includes all Basic Management and includes maintenance.
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
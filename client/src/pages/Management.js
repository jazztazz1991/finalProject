import React, { Component } from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import Plan1 from "../components/Plan1";
import Plan2 from "../components/Plan2";
import Plan3 from "../components/Plan3";
import Abmg from "../components/Abmg";
import Footer from "../components/Footer";
import { Col, Row, Container } from "../components/Grid";
import Center from 'react-center';
import "../styles/App.css";

const Management = () => (
            <div>
            <Container fluid>
                    <Row>
                        <Header />
                    </Row>
                    <Row>
                        <Nav />
                    </Row>
                    <Row>
                        <Abmg />
                    </Row>
                    <Row>
                        <Col size="md-4">
                            <h3>Professional Photography</h3>
                            <p className="mngText">We stage and professionally photograph your home so that it looks its best when presented to the world.</p>
                        </Col>
                        <Col size="md-4">
                            <h3>Creative Marketing</h3>
                            <p className="mngText">We harness relationships and the internet to present your gorgeous home to the world.</p>
                        </Col>
                        <Col size="md-4">
                            <h3>Legendary Service</h3>
                            <p className="mngText">Service is the secret to any success, and we insist on the highest levels of service possible.</p>
                        </Col>
                    </Row> 
                    <Row>
                        <Col size="md-4">
                            <h3>Build the Team</h3>
                            <p className="mngText">We stage and professionally photograph your home so that it looks its best when presented to the world.</p>
                        </Col>
                        <Col size="md-4">
                            <h3>Management Investment</h3>
                            <p className="mngText">Our team is made from scratch, works only for you, and is laser focused on our mission.</p>
                        </Col>
                        <Col size="md-4">
                            <h3>Communication</h3>
                            <p className="mngText">Clear communication ensures you are always aware of your success and the future of your home.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-4">
                            <Plan1 />
                        </Col>
                        <Col size="md-4">
                            <Plan2 />
                        </Col>
                        <Col size="md-4">
                            <Plan3 />
                        </Col>
                    </Row>
                    <Row>
                        <Footer/>
                    </Row>
    
                </Container>
                
            </div>    
)


export default Management;
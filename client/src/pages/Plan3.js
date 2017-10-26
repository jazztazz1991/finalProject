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
                            <img className="images" src={require("../images/house5.jpg")} alt="photo of our first house" />
                            </Center>
                        </Col>
                        <Col size="md-4" />
                    </Row>
                    <Row>
                        <h1>Guaranteed Return</h1>
                    </Row>
                    <Row>
                        <Col size="md-1" />
                        <Col size="md-10">
                        <p className="planText">
                            It is possible to guarantee a return on your vacation home investment. It is also possible to ruin any hope of a return if it is done the wrong way. If you already own a vacation home you know that the margin of success or not having the success you envisioned is a narrow path.
                        </p>
                        <p className="planText">
                            Our Guaranteed Return program is an option for very specific homes that meet high standards in care, décor and location. Not every home is going to qualify for this management program, in fact most don’t. But if your home is located in a prime location, has been professionally decorated, and maintained to the highest standards then we definitely want you to consider this option.
                        </p>
                        <p className="planText">
                            The guaranteed return program is designed for investors who purchased their home for the sole purpose as an investment and don’t wish to use the home through out the year. With complete unmitigated access to your home we will ensure a predetermined minimum revenue guarantee.
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
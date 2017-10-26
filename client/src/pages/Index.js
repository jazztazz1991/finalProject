import React from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import PictureShow from "../components/Pictureshow";
import Plan1 from "../components/Plan1";
import Plan2 from "../components/Plan2";
import Plan3 from "../components/Plan3";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";
import "../styles/App.css";
import { Col, Row, Container } from "../components/Grid";

const Home = () => (
            <div>
                <Container fluid>
                    <Row>
                        <Header />
                    </Row>
                    <Row>
                        <Nav />
                    </Row>
                    <Row>
                        <PictureShow />
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
                        <Aboutus/>
                    </Row>
                    <Row>
                        <Footer/>
                    </Row>
    
                </Container>
            </div>    
)


export default Home;
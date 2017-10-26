import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import Header from "../components/Header";
import Nav from "../components/Nav";
import SHouse from "../components/SelectedHouse";
import Footer from "../components/FooterFixed";
import Center from 'react-center';
import "../styles/App.css";

class House extends Component {
    state = {
        house: {},
        source: ""
    };
    componentDidMount() {
        API.getHouse(this.props.match.params.id)
            .then(res => {
            console.log(res);
            this.setState({ house: res.data.results, source: res.data.imagesrc});
        })
            .catch(err => console.log(err));
        
    }
    

    render(){
        return(
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Header />
                        <Nav />
                    </Col>
                </Row>
             <Row>
                    <Col size="md-3">
                    </Col>
                    <Col size="md-6">
                        <Row>
                            <Col size="md-12">
                                <h1>{this.state.house.name}</h1>
                                <br />
                            
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-12">
                                 <br />
                                <p className="houseAbout">{this.state.house.about}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-3" />
                            <Col size="md-6">
                            <Center>
                                
                                <img src={this.state.house.imagesrc} alt='image of house'/>
                            </Center>
                            </Col>
                            <Col size="md-3" />
                        </Row>
                        <Row>
                            <Col size="md-12">
                                 <br />
                                        <br /> <br />
                                <p className="houseAbout">{this.state.house.aboutlong}</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col size="md-3">
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Footer />
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default House;
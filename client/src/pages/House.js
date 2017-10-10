import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import Header from "../components/Header";
import Nav from "../components/Nav";
import SHouse from "../components/SelectedHouse";
import "../styles/App.css";

class About extends Component {
    state = {
        house: {},
        source: ""
    };
    componentDidMount() {
        API.getHouse(this.props.match.params.id)
            .then(res => this.setState({ house: res.data, source: res.data.imagesrc}))
            .catch(err => console.log(err));
        
    }
    
    imageFunct =() => {
        return <img src={this.state.source} alt='image of house' />;
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
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-3" />
                            <Col size="md-6">
                                {this.imageFunct()}
                            </Col>
                            <Col size="md-3" />
                        </Row>
                        <Row>
                            <Col size="md-12">
                                <h4>{this.state.house.about}</h4>
                            </Col>
                        </Row>
                    </Col>
                    <Col size="md-3">
                    </Col>
                </Row>
            
            </Container>
        )
    }
}


export default About;
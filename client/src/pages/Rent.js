import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from "../utils/API";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Search from "../components/Search";
import House from "../components/House";
import { List, ListItem } from "../components/List";
import { Col, Row, Container } from "../components/Grid";
import Footer from "../components/Footer";
import Center from 'react-center';
import "../styles/App.css";

class Rent extends Component{
    state = {
        houses: [],
        name: "",
        address: "",
        about: ""
    };

    componentDidMount(){
        this.loadHouses();
    }

    loadHouses = () => {
        API.getHouses()
            .then(res => {
                    this.setState({houses: res.data.results, title: "", author: "", about: ""});
                    console.log(res);
        }
                 )
            .catch(err => console.log(err));
    };


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Header />
                        <Nav />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-4" />
                    <Col size="md-4" > 
                        <h1> Homes For Rent </h1>
                    </Col>
                    <Col size="md-4" />
                </Row>
                <Row>
                    <Col size="md-2" />
                    <Col size="md-8">
                        <Center>
                        {this.state.houses.length ? (
                          <div>
                            {this.state.houses.map(House => (
                              <div key={House._id} className="rentHouse">
                                <Link to={"/house/" + House._id}>
                                  <h3>
                                    {House.name} at {House.address}
                                  </h3>
                                  <p className="rentFont">
                                    <img src={House.imagesrc} alt='image of house' className="floatright"/>
                                    {House.about}
                                  </p>
                                </Link>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <h3>No Results to Display</h3>
                        )}
                        </Center>
                    </Col>
                    <Col size="md-2" />
                </Row>
                <Footer />
            </Container>
        );
      }
    }


export default Rent;
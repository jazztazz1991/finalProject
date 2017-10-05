import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from "../utils/API";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Search from "../components/Search";
import House from "../components/House";
import { List, ListItem } from "../components/List";
import { Col, Row, Container } from "../components/Grid";
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
//        API.getHouses()
//            .then(res =>
//                    this.setState({houses: res.data, title: "", author: "", synopsis: ""})
//                 )
//            .catch(err => console.log(err));
    };



    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Header />
                        <Nav />
                        <Search />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-3" />
                    <Col size="md-6">
                        {this.state.houses.length ? (
                          <List>
                            {this.state.houses.map(book => (
                              <ListItem key={House._id}>
                                <Link to={"/houses/" + House._id}>
                                  <strong>
                                    {book.title} by {book.author}
                                  </strong>
                                </Link>
                              </ListItem>
                            ))}
                          </List>
                        ) : (
                          <h3>No Results to Display</h3>
                        )}
                    </Col>
                    <Col size="md-3" />
                </Row>
            </Container>
        );
      }
    }


export default Rent;
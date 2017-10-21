import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Search from "../../components/Search";
import House from "../../components/House";
import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../../components/Grid";
import "../../styles/App.css";

class Admin extends Component{
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
                if(res.data.statusCode == 401){
                    this.props.history.push("/login");
                }
                else {
                    console.log("user:", res);
                    this.setState({currentUser: res.data.sess.passport.user, house: res.data})
                }
            })
            .catch(err => console.log(err));
    };


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <h1> WELCOME ADMINISTRATOR</h1>
                    </Col>
                </Row>
                <Row> 
                    <Col size="md-2" />
                    <Col size="md-8">
                        {this.state.houses.length ? (
                          <List>
                            {this.state.houses.map(House => (
                              <ListItem key={House._id}>
                                <Link to={"/house/" + House._id}>
                                  <strong>
                                    {House.name} at {House.address}
                                  </strong>
                                  <p>
                                    <img src={House.imagesrc} alt='image of house' className="floatright"/>
                                    {House.about}
                                  </p>
                                </Link>
                              </ListItem>
                            ))}
                          </List>
                        ) : (
                          <h3>No Results to Display</h3>
                        )}
                    </Col>
                    <Col size="md-2" />
                </Row>
            </Container>
        );
      }
    }


export default Admin;
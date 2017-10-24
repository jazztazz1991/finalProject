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
        houses: []
    };

    componentDidMount(){
        this.loadHouses();
    }

    loadHouses = () => {
        API.getHouses()
            .then(res => {
                if(res.data.statusCode === 401){
                    this.props.history.push("/login");
                }
                else {
                    console.log("user:", res.data.sess);
                    this.setState({ houses: res.data.results});
                    console.log(this.state);
                }
            })
            .catch(err => console.log(err));
    };


    render() {
        return (
            <div className="adminpage">
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
                            <div>
                            {this.state.houses.map(House => (
                              <div key={House._id} className="floatleft">
                                  <h3>
                                    {House.name}
                                  </h3>
                                     <br />
                                  <strong>
                                     {House.address}
                                  </strong>
                                  <p>
                                    <img src={House.imagesrc} alt='image of house' className="adminPhoto"/>
                                        <br />
                                        <br />
                                    {House.about}
                                  </p>
                              </div>
                            ))}
                            </div>
                        ) : (
                          <h3>No Results to Display</h3>
                        )}
                    </Col>
                    <Col size="md-2" />
                </Row>
            </Container>
            </div>
        );
      }
    }


export default Admin;
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Search from "../../components/Search";
import House from "../../components/House";
import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn, TextArea } from "../../components/Form";
import "../../styles/App.css";
import "../../styles/Admin.css";

class Admin extends Component{
    state = {
        houses: [],
        name: "",
        address: "",
        imagesrc: "",
        about: ""
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

    handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name != "" && this.state.address != "" && this.state.about != "") {
      API.createHouse({
        name: this.state.name,
        address: this.state.address,
        imagesrc: this.state.imagesrc,
        about: this.state.about
      })
        .then(res => {
          console.log(res.config.data);
          if(res.config.data){
            this.loadHouses();
          }
        })
        .catch(err => console.log(err));
    }else{
        console.log("nothing in state");
    }
  };

    render() {
        return (
            <div className="adminpage">
            <Container fluid>
                <Row>
                    <Col size="md-4" />
                    <Col size="md-4">
                        <h1 className="adminTitle"> WELCOME ADMINISTRATOR</h1>
                    </Col>
                    <Col size="md-4" />
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
                <Row>
                    <Col size="md-4" />
                    <Col size="md-4">
                        <h1 className="adminTitle"> Add New House</h1>
                    </Col>
                    <Col size="md-4" />
                </Row>
                <Row>
                    <Col size="md-3" />
                        <Col size="md-6">
                        <form>
                          <Input
                            onChange={this.handleInputChange}
                            name="name"
                            placeholder="House Name (required)"
                          />
                          <Input
                            onChange={this.handleInputChange}
                            name="address"
                            placeholder="Address (required)"
                          />
                          <Input
                            onChange={this.handleInputChange}
                            name="imagesrc"
                            placeholder="Image Link (required)"
                          />
                          <TextArea
                            onChange={this.handleInputChange}
                            name="about"
                            placeholder="Short description (required)"
                          />
                            <TextArea
                            onChange={this.handleInputChange}
                            name="aboutlong"
                            placeholder="Long description (required)"
                          />
                          <FormBtn
                            disabled={!(this.state.name && this.state.address && this.state.imagesrc && this.state.about)}
                            onClick={this.handleFormSubmit}
                          >
                            Add House
                          </FormBtn>
                        </form>
                    </Col>
                    <Col size="md-3" />
                  </Row>
                  <Row className="margin">
                        <Col size="md-3">
                                <p>  </p>
                            </Col>
                      </Row>
            </Container>
            </div>
        );
      }
    }


export default Admin;
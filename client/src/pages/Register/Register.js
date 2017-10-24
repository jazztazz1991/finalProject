import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";

import API from "../../utils/API";
import Nav from "../../components/Nav";

class Register extends Component {
  state = {
    username: "",
    password: "",
    currentUser: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username != "" && this.state.password != "") {
      API.register({
        username: this.state.username,
        password: this.state.password
      })
        .then(res => {
          console.log(res.config.data);
          if(res.config.data){
            this.props.history.push('/admin');
          }
          else {
            console.log("no user");
          }
        })
        .catch(err => console.log(err));
    }else{
        console.log("nothing in state");
    }
  };

  render() {
    return (
      <div>
        <Nav userInfo={this.state.currentUser} />
        <Container fluid>
          <Row>
            <Col size="md-12">
                <h1>
                  Register
                </h1>
            </Col>
          </Row>
          <Row>
            <form>
              <Input
                onChange={this.handleInputChange}
                name="username"
                placeholder="username (required)"
              />
              <Input
                onChange={this.handleInputChange}
                name="password"
                type="password"
                placeholder="password (required)"
              />
              <FormBtn
                disabled={!(this.state.username && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Login
              </FormBtn>
            </form>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
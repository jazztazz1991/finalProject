import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import Nav from "../../components/Nav";

class Login extends Component {
  state = {
    username: "",
    password: "",
    currentUser: ""
  };

  componentWillMount() {
    API.logout()
      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.login({
        username: this.state.username,
        password: this.state.password
      })
        .then(res => {
          if (res.config.data) {
            this.props.history.push('/admin');
          }
          else {
            console.log("no user");
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="adminpage">
        <Container fluid>
          <Row>
            <Col size="md-5" />
            <Col size="md-2">
                <h1>
                  Login
                </h1>
            </Col>
            <Col size="md-5" />
          </Row>
          <Row>
            <Col size="md-4" />
            <Col size="md-4">
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
            </Col>
            <Col size="md-4" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Rent from "./pages/Rent";
import Management from "./pages/Management";
import House from "./pages/House";
import Plan1 from "./pages/Plan1";
import Plan2 from "./pages/Plan2";
import Plan3 from "./pages/Plan3";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import "./styles/App.css";

const App = () => 
    <Router>
        <div>
          <Route exact path="/" component={Index} />
          <Route exact path="/about" component={About} />
          <Route exact path="/management" component={Management} />
          <Route exact path="/rent" component={Rent} />
          <Route exact path="/house/:id" component={House} />
          <Route exact path="/plan1" component={Plan1} />
          <Route exact path="/plan2" component={Plan2} />
          <Route exact path="/plan3" component={Plan3} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/logout" component={Login} />
          <Route exact path="/admin" component={Admin} />
        </div>
    </Router>;



export default App;

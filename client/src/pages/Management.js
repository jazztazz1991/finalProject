import React, { Component } from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import Plan1 from "../components/Plan1";
import Plan2 from "../components/Plan2";
import Plan3 from "../components/Plan3";
import Abmg from "../components/Abmg";
import "../styles/App.css";

const Management = () => (
            <div>
                <Header />
                <Nav />
                <Abmg />
                <Plan1 />
                <Plan2 />
                <Plan3 />
                
            </div>    
)


export default Management;
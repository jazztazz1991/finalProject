import React from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import PictureShow from "../components/Pictureshow";
import Plan1 from "../components/Plan1";
import Plan2 from "../components/Plan2";
import Plan3 from "../components/Plan3";
import "../styles/App.css";

const Home = () => (
            <div>
                <Header />
                <Nav />
                <PictureShow />
                <Plan1 />
                <Plan2 />
                <Plan3 />
            </div>    
)


export default Home;
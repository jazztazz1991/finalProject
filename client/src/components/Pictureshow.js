import React from "react";
import "../styles/Photo.css";
import Center from 'react-center';

const Picture = () => (
    <Center>
    <div>
        <img className="images" src={require("../images/house5.jpg")} alt="photo of our first house" />
    </div>
</Center>
)

export default Picture;
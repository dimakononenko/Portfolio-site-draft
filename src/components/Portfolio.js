import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => (
    <div>
        <h1>My Work</h1>
        <p>Checkout the following things I've done:</p>
        <Link to="./portfolio/1">First project</Link>
        <Link to="./portfolio/2">Second project</Link>
    </div>
)

export default Portfolio;
import React from "react";
import { Link } from "react-router-dom";

const PortfolioItem = (props) => (
  <div>
    <h1>A thing I've done</h1>
    <p>This page is for the item the id of {props.match.params.id}</p>
  </div>
);

export default PortfolioItem;
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

class DogList extends Component {
  render() {
    const renderedLinks = this.props.dogs.map((d) => {
      return <Link to={`/dogs/${d.name}`}>{d.name}</Link>;
    });
    return (
      <div className="DogList">
        <h1>Dog List!</h1>
        <div className="DogList-links">{renderedLinks}</div>
      </div>
    );
  }
}

export default DogList;

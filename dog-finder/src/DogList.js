import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

class DogList extends Component {
  render() {
    const renderedLinks = this.props.dogs.map((d) => {
      return (
        <Link className="Dog col-lg-4 text-center" to={`/dogs/${d.name}`}>
          <img className="mt-2" src={d.src} alt={d.name} />
          <h3 className="underline mt-3">{d.name}</h3>
        </Link>
      );
    });
    return (
      <div className="DogList">
        <h1 className="display-1 text-center DogList-header">Dog List!</h1>
        <div className="row">{renderedLinks}</div>
      </div>
    );
  }
}

export default DogList;

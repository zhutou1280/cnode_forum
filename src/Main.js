import React, { Component } from "react";
import "./Main.scss";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main">
        <div id="sidebar"></div>
        <div id="content"></div>
      </div>
    );
  }
}
export default Main;

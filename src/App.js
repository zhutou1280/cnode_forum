import React, { Component } from "react";
import "./App.scss";
import HeaderView from "./HeaderView";
import Main from "./Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <HeaderView></HeaderView>
        <Main></Main>
      </React.Fragment>
    );
  }
}

export default App;

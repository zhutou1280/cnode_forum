import React, { Component } from "react";
import ReactSVG from "react-svg";
import cnodejs_light from "./../resources/cnodejs_light.svg";
import "./HeaderView.scss";
import NavList from "./NavList";

class HeaderView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="navbar">
        <div className="navbar-inner">
          <div className="container">
            <div className="brand">
              <ReactSVG src={cnodejs_light} />
            </div>
            <div className="navbar-search">
              <input
                type="text"
                id="q"
                name="q"
                className="search-query"
              ></input>
            </div>
            <NavList></NavList>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderView;

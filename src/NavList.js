import React, { Component } from "react";
import "./NavList.scss";

class NavList extends Component {
  constructor(props) {
    super(props);
    this.state = { navs: ["首页", "新手入门", "API", "关于", "注册", "登陆"] };
  }

  render() {
    return (
      <ul className="nav-pull-right">
        {this.state.navs.map(v => (
          <li key={v}>
            <a>{v}</a>
          </li>
        ))}
      </ul>
    );
  }
}

export default NavList;

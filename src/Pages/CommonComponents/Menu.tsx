import React from "react";

export interface MenuProps {
  test: string;
}

class Menu extends React.Component<MenuProps, {}> {
  render() {
    return <h1>Menu, {this.props.test}</h1>;
  }
}

export default Menu;

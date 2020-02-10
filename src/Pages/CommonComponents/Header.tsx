import React from "react";

export interface HeaderProps {
  test: string;
}

class Header extends React.Component<HeaderProps, {}> {
  render() {
    return <h1>Header, {this.props.test}</h1>;
  }
}

export default Header;

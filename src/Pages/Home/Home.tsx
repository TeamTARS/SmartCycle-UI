import React from "react";

export interface HomePageProps {
  test: string;
}

class HomePage extends React.Component<HomePageProps, {}> {
  render() {
    return <h1>Home Page, {this.props.test}</h1>;
  }
}

export default HomePage;

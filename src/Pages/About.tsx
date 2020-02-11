import React from "react";

export interface AboutPageProps {
  test: string;
}

class AboutPage extends React.Component<AboutPageProps, {}> {
  render() {
    return <h1>About Page, {this.props.test}</h1>;
  }
}

export default AboutPage;

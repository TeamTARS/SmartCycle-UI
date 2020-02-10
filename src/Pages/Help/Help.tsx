import React from "react";

export interface HelpPageProps {
  test: string;
}

class HelpPage extends React.Component<HelpPageProps, {}> {
  render() {
    return <h1>Help Page, {this.props.test}</h1>;
  }
}

export default HelpPage;

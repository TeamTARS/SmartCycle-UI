import React from "react";

export interface ResultsPageProps {
  test: string;
}

class ResultsPage extends React.Component<ResultsPageProps, {}> {
  render() {
    return <h1>Results Page, {this.props.test}</h1>;
  }
}

export default ResultsPage;

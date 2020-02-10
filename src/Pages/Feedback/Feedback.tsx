import React from "react";

export interface FeedbackPageProps {
  test: string;
}

class FeedbackPage extends React.Component<FeedbackPageProps, {}> {
  render() {
    return <h1>Feedback Page, {this.props.test}</h1>;
  }
}

export default FeedbackPage;

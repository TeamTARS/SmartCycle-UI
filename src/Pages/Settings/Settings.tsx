import React from "react";

export interface SettingsPageProps {
  test: string;
}

class SettingsPage extends React.Component<SettingsPageProps, {}> {
  render() {
    return <h1>Settings Page, {this.props.test}</h1>;
  }
}

export default SettingsPage;

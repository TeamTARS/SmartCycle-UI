import React from "react";

export interface ItemPageProps {
  test: string;
}

class ItemPage extends React.Component<ItemPageProps, {}> {
  render() {
    return <h1>Item Page, {this.props.test}</h1>;
  }
}

export default ItemPage;

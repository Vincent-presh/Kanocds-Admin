import React from "react";

class Material extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: "Coming Soon",
    };
  }

  render() {
    return (
      <main className="page-content">
        <p>{this.state.someKey}</p>
      </main>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: "Coming Soon !!!",
    });
  }
}

export default Material;

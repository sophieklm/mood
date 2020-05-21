import React from "react";

class Insights extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:3001/moods")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="ui container">
        <div>{this.state.apiResponse}</div>
      </div>
    );
  }
}

export default Insights;

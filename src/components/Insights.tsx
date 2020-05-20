import React from "react";

interface InsightsState {
  apiResponse: string;
}

class Insights extends React.Component<{}, InsightsState> {
  constructor(props: any) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:3001/moods")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
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

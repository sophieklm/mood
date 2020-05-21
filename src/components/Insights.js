import React from "react";
import Table from "./Table";

class Insights extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
  }

  callAPI() {
    fetch("http://localhost:3001/moods")
      .then(async (res) => res.json())
      .then((res) => {
        let response = [];
        /*eslint-disable no-unused-vars*/
        for (let [key, value] of Object.entries(res)) {
          response.push(value);
        }
        this.setState({ apiResponse: response });
      });
  }

  componentDidMount() {
    this.callAPI();
  }

  calculateAverage() {
    const responses = this.state.apiResponse;
    const out = responses.map(function (value) {
      return parseInt(value.mood);
    });
    return out.reduce((a, b) => a + b, 0) / out.length;
  }

  renderAverage() {
    const responses = this.state.apiResponse;
    if (responses.length === 0) {
      return null;
    } else {
      return <div className="ui">{this.calculateAverage()}</div>;
    }
  }

  renderTable() {
    const responses = this.state.apiResponse;
    if (responses.length === 0) {
      return null;
    } else {
      return <Table data={this.state.apiResponse} />;
    }
  }

  renderCheckins() {
    const responses = this.state.apiResponse;
    if (responses.length === 0) {
      return null;
    } else {
      return <div className="ui">{responses.length}</div>;
    }
  }

  render() {
    return (
      <div className="ui center grid">
        <div className="three wide center column">
          <h3>Average Mood</h3>
          {this.renderAverage()}
        </div>
        <div className="nine wide center column">{this.renderTable()}</div>
        <div className="three wide center column">
          <h3>Check in Count</h3>
          {this.renderCheckins()}
        </div>
      </div>
    );
  }
}

export default Insights;

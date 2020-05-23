import React from "react";
import Table from "./Table";
import { Button } from "semantic-ui-react";

class Insights extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
  }

  callAPI() {
    fetch(`${process.env.REACT_APP_API_URL}/moods`)
      .then(async (res) => res.json())
      .then((res) => {
        this.setState({ apiResponse: res });
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
    const average = out.reduce((a, b) => a + b, 0) / out.length;
    return Math.round(average * 10) / 10;
  }

  renderAverage() {
    const responses = this.state.apiResponse;
    if (responses.length === 0) {
      return null;
    } else {
      return <div>{this.calculateAverage()}</div>;
    }
  }

  renderTable() {
    const responses = this.state.apiResponse;
    if (responses.length === 0) {
      return null;
    } else {
      return <Table data={responses} />;
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
      <div className="ui segment">
        <h2 className="ui teal centered header">Insights</h2>
        <div className="internally celled ui two column center grid">
          <div className="three wide column">
            <div className="ui teal segment">
              <h3 className="ui teal centered header">Average Mood</h3>
              <h4 className="ui centered header">{this.renderAverage()}</h4>
            </div>
            <div className="ui teal segment">
              <h3 className="ui teal centered header">Check in Count</h3>
              <h4 className="ui centered header">{this.renderCheckins()}</h4>
            </div>
            <div className="ui padded centered grid">
              <Button className="ui button teal" href="/">
                New Mood
              </Button>
            </div>
          </div>
          <div className="twelve wide center column">{this.renderTable()}</div>
        </div>
      </div>
    );
  }
}

export default Insights;

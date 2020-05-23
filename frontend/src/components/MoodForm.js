import React from "react";
import { Select } from "semantic-ui-react";
import { MOODS, FEELINGS } from "../consts";
import { Button } from "semantic-ui-react";

class MoodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      errors: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit = async (event) => {
    if (this.validateForm()) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mood: this.state.data.mood,
          feeling: this.state.data.feeling,
          comment: this.state.data.comment,
        }),
      };
      fetch(`${process.env.REACT_APP_API_URL}/moods`, requestOptions)
        .then((response) => {
          if (!response.ok) {
            return Promise.reject("There was an error saving the mood");
          }
          this.props.history.push("/insights");
        })
        .catch((error) => {
          this.setState({ errors: [error.toString()] });
        });
    }
    event.preventDefault();
  };

  validateForm() {
    let data = this.state.data;
    let errors = [];
    let valid = true;

    if (!data["feeling"] || !data["mood"]) {
      errors.push(!data["mood"] ? "Must submit mood" : null);
      errors.push(!data["feeling"] ? "Must submit feeling" : null);
      valid = false;
    }

    this.setState({ errors });
    return valid;
  }

  handleChange(event, input) {
    let data = this.state.data;
    const name = input.name;
    const value = input.value;
    data[name] = value;
    this.setState({ data });
  }

  handleInputChange(event) {
    let data = this.state.data;
    data["comment"] = event.target.value;
    this.setState({ data });
  }

  renderErrors() {
    if (this.state.errors.length === 0) {
      return null;
    } else {
      return (
        <div className="ui warning message">
          <div className="header">Form Error:</div>
          {this.state.errors.map((error) => (
            <div key={error}>{error}</div>
          ))}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="ui segment">
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit} className="ui form">
          <h2 className="ui teal header">How are you feeling today?</h2>
          <Button className="ui button teal right floated" href="/insights">
            Insights
          </Button>
          <div className="field">
            <label>What's your mood? (1 = bad | 7 = excellent) </label>
            <Select
              className="mood"
              clearable
              name="mood"
              placeholder="Mood"
              options={MOODS}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label>How are you feeling?</label>
            <Select
              className="feeling"
              name="feeling"
              placeholder="Feeling"
              multiple
              selection
              options={FEELINGS}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label>Any other comments: </label>
            <input
              name="comment"
              placeholder="Comment"
              onChange={this.handleInputChange}
            />
          </div>
          <button className="ui button teal">Submit</button>
        </form>
      </div>
    );
  }
}

export default MoodForm;

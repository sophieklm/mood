import React from "react";
import { Select } from "semantic-ui-react";
import { MOODS, FEELINGS } from "../consts";
import { Button } from "semantic-ui-react";

class MoodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: undefined,
      feeling: "",
      comment: "",
      errors: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit = async (event, data) => {
    // TO DO: Get validations to work
    // this.validateForm(data);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mood: this.state.mood,
        feeling: this.state.feeling,
        comment: this.state.comment,
      }),
    };
    fetch("http://localhost:3001/moods", requestOptions)
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(
            "An error occured: please check you have entered the required fields"
          );
        }
        this.props.history.push("/insights");
      })
      .catch((error) => {
        this.setState({ errors: error.toString() });
      });
    event.preventDefault();
  };

  // validateForm(data) {
  //   const name = data.name;
  //   const value = data.value;
  //   let errors = this.state.errors;

  //   switch (name) {
  //     case "mood":
  //       errors.push(value === "" ? "Must submit mood" : "");
  //       break;
  //     case "feeling":
  //       errors.push(value === "" ? "Must submit feeling" : "");
  //       break;
  //     default:
  //       break;
  //   }

  //   this.setState({ errors });
  // }

  handleChange(event, data) {
    const name = data.name;
    const value = data.value;
    this.setState({ [name]: value });
  }

  handleInputChange(event) {
    this.setState({ comment: event.target.value });
  }

  renderErrors() {
    if (this.state.errors.length === 0) {
      return null;
    } else {
      return <div>{this.state.errors}</div>;
    }
  }

  render() {
    const { value } = this.state;
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
              name="mood"
              placeholder="Mood"
              options={MOODS}
              value={value}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label>How are you feeling?</label>
            <Select
              name="feeling"
              placeholder="Feeling"
              value={value}
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

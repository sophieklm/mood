import React from "react";
import { Redirect } from "react-router";
import { Select } from "semantic-ui-react";

const moods = [
  { key: "1", text: "1", value: "1" },
  { key: "2", text: "2", value: "2" },
  { key: "3", text: "3", value: "3" },
  { key: "4", text: "4", value: "4" },
  { key: "5", text: "5", value: "5" },
  { key: "6", text: "6", value: "6" },
  { key: "7", text: "7", value: "7" },
];
const feelings = [
  { key: "depressed", text: "Depressed", value: "depressed" },
  { key: "optimistic", text: "Optimistic", value: "optimistic" },
  { key: "happy", text: "Happy", value: "happy" },
  { key: "bored", text: "Bored", value: "bored" },
];

class MoodCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: undefined,
      feeling: undefined,
      comment: "",
      errors: [],
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = async () => {
    // this.validateForm();
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
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
      })
      .catch((error) => {
        this.setState({ errors: error.toString() });
        console.error("There was an error!", error);
      });
    this.setState(() => ({ redirect: true }));
  };

  handleChange(event, data) {
    const name = data.name;
    const value = data.value;
    this.setState({ [name]: value });
  }

  render() {
    const { value } = this.state;
    if (this.state.redirect === true) {
      return <Redirect to="/insights" />;
    }
    return (
      <form onSubmit={this.handleSubmit} className="ui form">
        <h2>How are you feeling today?</h2>
        <div className="field">
          <label>Mood: </label>
          <Select
            name="mood"
            placeholder="Mood"
            options={moods}
            value={value}
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <label>Feeling: </label>
          <Select
            name="feeling"
            placeholder="Feeling"
            options={feelings}
            value={value}
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <label>Comment: </label>
          <input
            name="comment"
            placeholder="Comment"
            value={value}
            onChange={this.handleChange}
          />
        </div>
        <button className="ui button teal">Submit</button>
      </form>
    );
  }
}

export default MoodCreate;

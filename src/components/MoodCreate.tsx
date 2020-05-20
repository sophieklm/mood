import React from "react";
import { Dropdown } from "semantic-ui-react";

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

interface MoodProps {
  action: string;
}

export interface Values {
  [key: string]: any;
}

export interface Errors {
  [key: string]: string;
}

export interface MoodState {
  values: Values;
  errors: Errors;
  submitSuccess?: boolean;
}

class MoodCreate extends React.Component<MoodProps, MoodState> {
  constructor(props: MoodProps) {
    super(props);

    const errors: Errors = {};
    const values: Values = {};
    this.state = {
      errors,
      values,
    };
  }

  handleSubmit = async (
    formValues: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    };
    fetch("http://localhost:3001/moods", requestOptions)
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        this.setState({ values: data.id });
      })
      .catch((error) => {
        this.setState({ errors: error.toString() });
        console.error("There was an error!", error);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ui form">
        <h2>How are you feeling today?</h2>
        <div className="field">
          <label>Mood: </label>
          <Dropdown
            name="mood"
            placeholder="Mood"
            fluid
            selection
            options={moods}
          />
        </div>
        <div className="field">
          <label>Feeling: </label>
          <Dropdown
            name="feeling"
            placeholder="Feeling"
            fluid
            selection
            options={feelings}
          />
        </div>
        <div className="field">
          <label>Comment: </label>
          <input name="comment" placeholder="Comment" />
        </div>
        <button className="ui button teal">Submit</button>
      </form>
    );
  }
}

export default MoodCreate;

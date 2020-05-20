import React from "react";

interface Mood {
  mood: number;
  feeling: Feeling;
  comment?: string;
}

enum Feeling {
  Depressed = "depressed",
  Optimistic = "optimistic",
  Bored = "bored",
  Happy = "happy",
}

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
    console.log(formValues);
    console.log(JSON.stringify(formValues));
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    };
    fetch("http://localhost:3001/moods", requestOptions)
      .then(async (response) => {
        console.log(response);
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
          <input name="mood" />
        </div>
        <div className="field">
          <label>Feeling: </label>
          <input name="feeling" />
        </div>
        <div className="field">
          <label>Comment: </label>
          <input name="comment" />
        </div>
        <button className="ui button teal">Submit</button>
      </form>
    );
  }
}

export default MoodCreate;

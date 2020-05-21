import React from "react";
import Insights from "./Insights";
import MoodForm from "./MoodForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={MoodForm} />
            <Route path="/insights" exact component={Insights} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

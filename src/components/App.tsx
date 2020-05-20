import React from "react";
import Insights from "./Insights";
import MoodCreate from "./MoodCreate";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={MoodCreate} />
            <Route path="/insights" exact component={Insights} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

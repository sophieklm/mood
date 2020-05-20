import React from "react";
import Insights from "./Insights";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="ui container">
        <Insights />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact />
            <Route path="/insights" exact />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

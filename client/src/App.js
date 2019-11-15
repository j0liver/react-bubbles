import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from '../src/components/PrivateRoute'
import BubblePage from '../src/components/BubblePage'
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <PrivateRoute exact path="/BubblePage" component={BubblePage} />
          <Route path="/" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

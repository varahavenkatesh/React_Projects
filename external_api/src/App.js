import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './navbar';
import Users from './users';
import UserCreate from './createuser';
import UserUpdate from './userupdate';

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
          <Route exact path='/' component={Users} />
          <Route exact path='/create' component={UserCreate} />
          <Route exact path='/update/:id' component={UserUpdate} />
        </Switch>
  </Router>
  );
}

export default App;

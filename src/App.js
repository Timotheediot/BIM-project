import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Homepage from './components/Homepage'
import Articles from './components/Articles'
import Contact from './components/Contact'


import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/articles" component={Articles} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

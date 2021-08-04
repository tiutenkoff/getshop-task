import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Banner } from './pages/Banner';
import { Final } from './pages/Final';
import { Main } from './pages/Main';

const App: React.FC = () => {
  return (
    <Router>
      <div className="wrapper">
        <div className="container">
          <Switch>
            <Route exact path="">
              <Main />
            </Route>
            <Route path="main">
              <Main />
            </Route>
            <Route path="final">
              <Final />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

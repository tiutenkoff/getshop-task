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
            <Route exact path="/" component={Banner}/>
            <Route exact path="/main" component={Main} />
            <Route exact path="/final" component={Final} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

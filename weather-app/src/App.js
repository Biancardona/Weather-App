import React from 'react';
import Home from'./Views/Home';
import SearchResult from'./Views/SearchResult';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header" />
        <Switch>
        <Route exact path="/" component={Home} />
          <Route path="/city/:id" component={SearchResult} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

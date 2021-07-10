import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login/Login.js';
import Register from './Pages/Register/Register.js';
import Forget from './Pages/Forget/Forget.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/register" exact component={ Register } />
        <Route path="/forget" exact component={ Forget } />
      </Switch>
    </Router>
  );
}

export default App;

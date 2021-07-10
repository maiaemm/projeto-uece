import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login/Login.js';
import Register from './Pages/Register/Register.js';
import Forget from './Pages/Forget/Forget.js';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/register" exact component={ Register } />
        <Route path="/forget" exact component={ Forget } />
        <Route path="/user" exact component={ Home } />
      </Switch>
    </Router>
  );
}

export default App;

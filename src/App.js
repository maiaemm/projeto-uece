import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Forget from './Pages/Forget/Forget';
import Home from './Pages/Home/Home';
import NewProduct from './Pages/New Product/NewProduct';
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route path="/" exact component={ Login } />
          <Route path="/register" exact component={ Register } />
          <Route path="/forget" exact component={ Forget } />
          <Route path="/user" exact component={ Home } />
          <Route path="/new-product" exact component={ NewProduct } />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

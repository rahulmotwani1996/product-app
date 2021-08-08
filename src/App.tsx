import React from 'react';
import './App.css';
import { Redirect, Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="app-container bg-white">
      <Router>
        <div className="link-list">
          <Link className="link" to="/home">Home</Link>
          <Link className="link" to="/addProduct">Add Product</Link>
        </div>
        <Switch>
          <Route path="/home" exact><Home /></Route>
          <Route path="/addProduct" exact><Product /></Route>
          <Redirect from="/" to="/home"></Redirect>
        </Switch>
      </Router>
      <footer className="app-footer bg-light">
        <div className="text-secondary">Copyright @ 2020 The example company</div>
        <div><a className={'text-primary'}>About</a> - <a className={'text-primary'}>Privacy Policy</a> - <a className={'text-primary'}>Contact Us</a></div>
      </footer>

    </div>
  );
}

export default App;

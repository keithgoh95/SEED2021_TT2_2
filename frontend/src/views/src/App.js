import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Balance from './components/pages/Balance';
import Transfer from './components/pages/Transfer';
import Logout from './components/pages/Logout';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/balance' component={Balance} />
          <Route path='/transfer' component={Transfer} />
          <Route path='/logout' component={Logout} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

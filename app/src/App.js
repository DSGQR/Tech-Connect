import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Organizations from './components/Organizations'

class App extends Component {
  render() {
    return (
    <>
    <Router>
      <div>
        <Navbar />
        <Route exact path='/' component={Dashboard}/>
        <Route path='/organizations' component={Organizations}/>
      </div>
      
      </Router>
    </>
    );
  }
}

export default App;

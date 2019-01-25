import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Dashboard from './Components/Dashboard'
import Navbar from './Components/Navbar'
import Organizations from './Components/Organizations';
import Onboarding from './Components/Onboarding'
import Home from './Components/Home'
import Loader from './Components/Loader'
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyANTWkjI1OJU4bLZAaA3fhMaXeMb630Sw8",
  authDomain: "p3-techconnect.firebaseapp.com",
  databaseURL: "https://p3-techconnect.firebaseio.com",
  projectId: "p3-techconnect",
  storageBucket: "p3-techconnect.appspot.com",
  messagingSenderId: "533101658893"
};
firebase.initializeApp(config);

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: './Dashboard',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
}

class App extends Component {
  state = {
    isSignedIn: false
  }

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
  
  render() {
    return (
      <>
      <Router>
        <div>
          <Navbar uiConfig={uiConfig} isSignedIn={this.state.isSignedIn} userName={this.state.name} />
          <Route exact path='/' component={() => <Home uiConfig={uiConfig} isSignedIn={this.state.isSignedIn} userName={this.state.name} />} />
          <Route path='/Dashboard' component={() => this.state.isSignedIn ? <Dashboard /> : <Loader uiConfig={uiConfig} isSignedIn={this.state.isSignedIn} userName={this.state.name}/>}/>
          <Route path='/Organizations' component={() => this.state.isSignedIn ? <Organizations /> : <Loader uiConfig={uiConfig} isSignedIn={this.state.isSignedIn} userName={this.state.name}/>}/>
          <Route path='/Onboarding' component={() => this.state.isSignedIn ? <Onboarding /> : <Loader uiConfig={uiConfig} isSignedIn={this.state.isSignedIn} userName={this.state.name}/>}/>
        </div>
      </Router>
      </>
    );
  }
}

export default App;
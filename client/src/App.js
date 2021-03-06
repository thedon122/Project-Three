import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import ExistingUser from './components/ExistingUser'
import UserProfile from './components/UserProfile'
import EventProfile from './components/EventProfile'
// import ActivityProfile from '.components/ActivityProfile'
// import ActivitiesToDoList from '.components/ActivitiesToDoList'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/existing" component={ExistingUser} />
            <Route path="/user/:userId" component={UserProfile} />
            <Route path="user/:userId/event/:eventId" component={EventProfile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

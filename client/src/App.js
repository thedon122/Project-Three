import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from '.components/HomePage'
import ExistingUser from '.components/ExistingUser'
import UserProfile from '.components/UseProfile'
import NewUser from '.components/NewUser'
import EventProfile from '.components/EventProfile'
import NewEvent from '.components/NewEvent'
import NewActivities from '.components/NewActivities'
import ActivityProfile from '.components/ActivityProfile'
import ActivitiesToDoList from '.components/ActivitiesToDoList'


  class App extends Component {
    render() {
      return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/:id" component={ExistingUser} />
              <Route path="/" component={NewUser} />
              <Route path="/:id" component={UserProfile} />
            </Switch>
          </div>
        </Router>
      );
    }
  }

export default App;

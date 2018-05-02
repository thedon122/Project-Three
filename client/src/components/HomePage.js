import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewUser from './NewUser'

class HomePage extends Component {
    state = {
        users: [],
        showNewForm: false,
        showMainImg: true
    }
    toggleShowNewForm = () => {
        this.setState({ showNewForm: !this.state.showNewForm })
    }
    toggleShowMainImg = () => {
        this.setState({ showMainImg: !this.state.showMainImg })
    }
    render() {
        return (
            <div>
            <nav>
            <div class="nav-wrapper">
              <a href="#" class="brand-logo right">Logo</a>
              <ul id="nav-mobile" class="left hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
              </ul>
            </div>
          </nav>
            
                <div class='Button'>
                    <button onClick ={this.toggleShowNewForm}>Create New User
                    </button>
                    {this.state.showNewForm ? <NewUser />: null}
                </div>
                
                <div class='Button'><button>
                    <Link to='/existing'>Existing User</Link>
                </button>
                </div>
                <div class='mainImg'>
                    <img src='/Users/donovan/GA/Project-Three/client/build/static/images/paximages.jpeg' />

                </div>
            </div>
        )
    }
}

export default HomePage
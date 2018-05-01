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
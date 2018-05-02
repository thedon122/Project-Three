import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewUser from './NewUser'

class ExistingUser extends Component {
    state = {users: [],
        user: {
            lastName: '',
            firstName: '',
            favorite: ''
        },
        showNewForm: false,
    }
    toggleShowNewForm = () => {
        this.setState({ showNewForm: !this.state.showNewForm })
    }
    componentDidMount (){
        this.getAllUser()
    }

    getAllUser = () => {
        axios.get('/api/users')
        .then(res => {
          console.log("Saving users to state", res.data)
          this.setState({ users: res.data })
        })
        .catch(err => {
          console.error(err)
        })
    }
    render() {
        const userLinks = this.state.users.map((user, i) => {
            return (
              <div key={i}>
                <Link to={`/user/${user._id}`}>{user.lastName}{user.firstName}{user.favorite}</Link>
              </div>)
          })
      
        return (
            <div>
                <div class='Button'>
                    <button onClick ={this.toggleShowNewForm}>Create New User
                    </button>
                    {this.state.showNewForm ? <NewUser />: null}
                </div>
        {userLinks}
            </div>
        )
    }
}

export default ExistingUser
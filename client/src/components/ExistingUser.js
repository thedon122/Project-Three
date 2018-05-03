import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewUser from './NewUser'
import { Button, Icon } from 'react-materialize'

class ExistingUser extends Component {
    state = {
        users: [],
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
    componentDidMount() {
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
                <div>
                    <Link key={i} to={`/user/${user._id}`}>
                        <h3>Name: {user.firstName} {user.lastName}</h3>
                        <h3>Favorites: {user.favorite}</h3></Link>
                </div>)
        })

        return (
            <div>
                    <Button waves='light' onClick={this.toggleShowNewForm}>
                        Create New User
                    </Button>

                    {this.state.showNewForm ? <NewUser /> : null}
                {userLinks}
            </div>
        )
    }
}

export default ExistingUser
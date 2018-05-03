import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import NewUser from './NewUser'

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
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="headline" color="inherit">
                            Title
                    </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
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
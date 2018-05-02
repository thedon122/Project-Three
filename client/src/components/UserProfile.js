import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class UserProfile extends Component {
    state = {
        user =[],
        event =[]
    }

    componentDidMount = () => {
        const userId = this.props.match.params.userId
        console.log("UserId from UserProfile component: ", userId)
        axios.get(`/api/users/${userId}`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    lastName: response.user.lastName,
                    firstName: response.user.firstName,
                    favorite: response.user.favorite,
                    imgUrl: response.user.imgUrl
                })
            })
    }

    render() {
        console.log("RENDERING", this.state.user)
        userIdividual = () => {

            <form>
                <input
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onBlur={() => this.updateUser(idea)}
                    onChange={(event) => this.handleChange(idea, event)} />

                <textarea
                    name="lastName"
                    value={this.state.lastName}
                    onBlur={() => this.updateUser(idea)}
                    onChange={(event) => this.handleChange(idea, event)} />

                <textarea
                    name="favorite"
                    value={this.state.favorite}
                    onBlur={() => this.updateUser(idea)}
                    onChange={(event) => this.handleChange(idea, event)} />

                <textarea
                    name="imgUrl"
                    value={this.state.imgUrl}
                    onBlur={() => this.updateUser(idea)}
                    onChange={(event) => this.handleChange(idea, event)} />
                <button
                    onClick={() => { this.deleteIdea(idea._id) }}>
                    Delete Idea
          </button>
            </form>
        }
        return (
            <div>

            </div >
        )
    }
}

export default UserProfile
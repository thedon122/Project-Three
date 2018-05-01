import React, { Component } from 'react'
import axios from 'axios'

class NewUser extends Component {
    state = {
        lastName: '',
        firstName: '',
        favorite: '',
        imgUrl: '',
    }

    handleChange = (event) => {
        const name = event.target.name
        const newState = { ...this.state }
        newState[name] = event.target.value
        this.setState(newState)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const payload = {
            lastName: this.state.lasNname,
            firstName: this.state.firstName,
            favorite: this.state.favorite,
            imgUrl: this.state.imgUrl,
        }
        axios.post('/api/users')
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.lastName} />
                </div>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.firstName} />
                </div>
                <div>
                    <label htmlFor="favorite">Favorite: </label>
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.favorite} />
                    <div>
                        <label htmlFor="imgUrl">imgUrl: </label>
                        <input onChange={this.handleChange} type="text" name="name" value={this.state.imgUrl} />
                    </div>
                </div>
            </form>
        )
    }
}

export default NewUser
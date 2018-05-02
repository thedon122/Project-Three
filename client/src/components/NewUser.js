import React, { Component } from 'react'
import axios from 'axios'

class NewUser extends Component {
    state = {
        lastName: '',
        firstName: '',
        favorite: '',
        imgUrl: ''
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
            lastName: this.state.lastName,
            firstName: this.state.firstName,
            favorite: this.state.favorite,
            imgUrl: this.state.imgUrl,
        }
        axios.post('/api/users', payload)
        .then((res) => {
            console.log("RESPONSE FROM NEW User", res.data)
        })
    }
    render() {
        return (
            <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s6">
                    <label htmlFor="lastName">Last Name: </label>
                    <input onChange={this.handleChange} type="text" name="lastName"  />
                </div>
                </div>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input onChange={this.handleChange} type="text" name="firstName"  />
                </div>
                <div>
                    <label htmlFor="favorite">Favorite: </label>
                    <input onChange={this.handleChange} type="text" name="favorite"  />
                </div>
                <div>
                    <label htmlFor="imgUrl">imgUrl: </label>
                    <input onChange={this.handleChange} type="text" name="imgUrl"  />
                </div>

                <div>
                    <button type="submit" value="Submit">Submit</button>
                </div>

            </form>
            </div>
        )
    }
}

export default NewUser
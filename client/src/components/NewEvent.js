import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types';
class NewEvent extends Component {
    state = {
        name: '',
        length: '',
        location: '',
        date: '',
        imgUrl: ''
    }
    handleChange = name => event => {
        const name = event.target.name
        const newState = {...this.state}
        newState[name] = event.target.value
        this.setState(newState)
    };
    handleSubmit = (event) => {
        event.preventDefault()
        const payload = {
            name: this.state.name,
            length: this.state.length,
            location: this.state.location,
            date: this.state.date,
            imgUrl: this.state.imgUrl,
        }
        axios.post('/api/users/:userId/event', payload)
            .then((res) => {
                console.log("RESPONSE FROM NEW User", res.data)
            })
    }
    render() {
        return (<div>
        </div>)
    }
}

export default NewEvent
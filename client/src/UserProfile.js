import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class UserProfile extends Component {
    state = {
        lastName: '',
        firstName: '',
        favorite: '',
        imgUrl: ''
    }

    componentDidMount() {
        const userId = this.params.userId
        console.log(userId)
        axios.get(`/api/users/${userId}`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    lastName: response.data.lastName,
                    firstName: response.data.firstName,
                    favorite: response.data.favorite,
                    imgUrl: response.data.imgUrl
                })
            })
    }
    render() {
        return (
            <div>
            </div >
        )
    }
}

export default UserProfile
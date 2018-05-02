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

    componentDidMount = () =>{
        const userId = this.props.match.params.userId
        console.log("UserId from UserProfile component: ", userId)
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
        console.log("RENDERING", this.state.lastName)
        // const userIdividual = {
        //     return (
        //         <form>
        //         </form>
        //     )
        // }
        return (
            <div>
                 Name: {this.state.firstName} 
            </div >
        )
    }
}

export default UserProfile
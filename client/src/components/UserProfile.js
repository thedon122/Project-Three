import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Hidden from 'material-ui/Hidden';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Footer from './Layouts/Footer'
import TextField from 'material-ui/TextField';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        minWidth: 200,
    },

    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 100,
        paddingTop: '30.25%', // 16:9
    },
    mainImg: {
        height: 300,
    }
});
class UserProfile extends Component {
    state = {
        user: [],
        events: []
    }

    componentDidMount = () => {

        this.getIdividualUser()
        this.getAllEvent()
    }
    getIdividualUser = () => {
        const userId = this.props.match.params.userId
        console.log("eventId from UserProfile component: ", userId)
        axios.get(`/api/users/${userId}`)
            .then(response => {
                console.log("Saving user to state", response.data)
                this.setState({
                    user: response.data
                })
            })
    }
    getAllEvent = () => {
        const userId = this.props.match.params.userId
        console.log("UserId from UserProfile component: ", userId)
        axios.get(`/api/users/${userId}/event`)
            .then(res => {
                console.log("Saving all events to state", res.data)
                this.setState({ events: res.data })
            })
            .catch(err => {
                console.error(err)
            })
    }
    handleChange = event => {
        const name = event.target.name
        const newState = { ...this.state }
        newState.user[name] = event.target.value
        this.setState(newState)
    };
    deleteUser = (userId) => {
        axios.delete(`/api/users/${this.state.user._id}`)
            .then((response) => {
                console.log(response)
                this.props.history.goBack()
            })
    }
    updateUser = (users) => {
        console.log("UPDATING User In Database")
        console.log("User Id being Updated", this.state.user._id)
        var userId = this.state.user._id
        axios.patch(`/api/users/${userId}`, { users })
            .then(res => {
                this.setState({ user: res.data })
            })
    }
    render() {
        const { classes } = this.props;
        console.log("RENDERING", this.state.user)
        const userIdividual = () => {
            return (

                <form className={classes.container} noValidate autoComplete="on" >
                    <TextField
                    name="lastName"
                    label="Last Name"
                    className={classes.textField}
                    value={this.state.user.firstName}
                    onChange={this.handleChange}
                    margin="normal"
                />
               <TextField
                    required
                    name="firstName"
                    label="First Name"
                    className={classes.textField}
                    value={this.state.user.lastName}
                    onChange={this.handleChange}
                    margin="normal"
                />
                <TextField
                    name="favorite"
                    label="Favorite"
                    className={classes.textField}
                    value={this.state.user.favorite}
                    onChange={this.handleChange}
                    margin="normal"
                />
                <TextField
                    name="imgUrl"
                    label="imgUrl"
                    value={this.state.name}
                    className={classes.textField}
                    value={this.state.user.imgUrl}
                    onChange={this.handleChange}
                    margin="normal"
                />
                    <button
                        onClick={() => { this.deleteUser(this.state.user._id) }}>
                        Delete User
                    </button>
                </form>
            )
        }
        const eventLinks = this.state.events.map((event, i) => {
            return (

                <div>
                    <Link key={i} to={`/event/${event._id}`}>
                        <h3>Name: {event.name}</h3>
                        <h3>Type: {event.type}</h3></Link>
                </div>)
        })
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="headline" color="white">
                            <Button size="large" waves='light'>
                                <Link to='/'>HomePage</Link>
                            </Button>
                        </Typography>

                    </Toolbar>
                </AppBar>
                {userIdividual()}
                {eventLinks}
                <Footer />
            </div >
        )
    }
}

UserProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserProfile) 
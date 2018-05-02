import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
});
class NewUser extends React.Component {
    state = {
        lastName: '',
        firstName: '',
        favorite: '',
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
        const { classes } = this.props;
        return (

            <form className={classes.container} noValidate autoComplete="on">
                <TextField
                    required
                    name="lastName"
                    label="Last Name"
                    
                    className={classes.textField}
                    onChange={this.handleChange('lastName')}
                    margin="normal"
                />
                <TextField
                    required
                    name="firstName"
                    label="First Name"
                    
                    className={classes.textField}
                    onChange={this.handleChange('firstName')}
                    margin="normal"
                />
                <TextField
                    name="favorite"
                    label="Favorite"
                    
                    className={classes.textField}
                    onChange={this.handleChange('favorite')}
                    margin="normal"
                />
                <TextField               
                name="imgUrl"
                label="imgUrl"
               
                className={classes.textField}
                onChange={this.handleChange('imgUrl')}
                margin="normal"
            />

                <div>
                    <button type="submit" value="Submit">Submit</button>
                </div>

            </form>

        )
    }
}
NewUser.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewUser)
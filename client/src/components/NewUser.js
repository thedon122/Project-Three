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
        this.setState({
            [name]: event.target.value,
        });
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
                    value={this.state.name}
                    className={classes.textField}
                    onChange={this.handleChange('name')}
                    margin="normal"
                />
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input onChange={this.handleChange} type="text" name="lastName" />
                </div>
                <TextField
                    required
                    name="firstName"
                    label="First Name"
                    value={this.state.name}
                    className={classes.textField}
                    onChange={this.handleChange('name')}
                    margin="normal"
                />
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input onChange={this.handleChange} type="text" name="firstName" />
                </div>
                <TextField
                
                    name="favorite"
                    label="Favorite"
                    value={this.state.name}
                    className={classes.textField}
                    onChange={this.handleChange('name')}
                    margin="normal"
                />
                <div>
                    <label htmlFor="favorite">Favorite: </label>
                    <input onChange={this.handleChange} type="text" name="favorite" />
                </div>
                <TextField
                
                name="imgUrl"
                label="imgUrl"
                value={this.state.name}
                className={classes.textField}
                onChange={this.handleChange('name')}
                margin="normal"
            />
                <div>
                    <label htmlFor="imgUrl">imgUrl: </label>
                    <input onChange={this.handleChange} type="text" name="imgUrl" />
                </div>

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
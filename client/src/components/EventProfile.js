import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';



class EventProfile extends Component {
    render() {
        return (<div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="headline" color="inherit">
                        Title
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>)
    }
}

export default EventProfile
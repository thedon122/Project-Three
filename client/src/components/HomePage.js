import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Footer from './Layouts/Footer'
import NewUser from './NewUser'

class HomePage extends Component {
    state = {
        users: [],
        showNewForm: false,
        showMainImg: true
    }
    toggleShowNewForm = () => {
        this.setState({ showNewForm: !this.state.showNewForm })
    }
    toggleShowMainImg = () => {
        this.setState({ showMainImg: !this.state.showMainImg })
    }
    const styles = theme => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing.unit * 2,
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      });
    render() {
        const styles = {
            root: {
                flexGrow: 1,
            },
            flex: {
                flex: 1,
            },
            menuButton: {
                marginLeft: -12,
                marginRight: 20,
            },
        };
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="headline" color="inherit">
                            Title
                    </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>

                <div class='Button'>
                    <button onClick={this.toggleShowNewForm}>Create New User
                    </button>
                    {this.state.showNewForm ? <NewUser /> : null}
                </div>

                <div class='Button'><button>
                    <Link to='/existing'>Existing User</Link>
                </button>
                </div>
                <div class='mainImg'>
                    <img src='/Users/donovan/GA/Project-Three/client/build/static/images/paximages.jpeg' />

                </div>
                <Footer/>
            </div>
        )
    }
}

export default HomePage
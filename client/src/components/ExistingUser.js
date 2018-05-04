import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
import NewUser from './NewUser'
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
    Usermedia: {
        minWidth: 275,
        height: 300,
        [theme.breakpoints.down('sm')]: {
            height: 200,
        },
    }
})
class ExistingUser extends Component {
    state = {
        users: [],
        user: {
            lastName: '',
            firstName: '',
            favorite: ''
        },
        showNewForm: false,
    }
    toggleShowNewForm = () => {
        this.setState({ showNewForm: !this.state.showNewForm })
    }
    componentDidMount() {
        this.getAllUser()
    }

    getAllUser = () => {
        axios.get('/api/users')
            .then(res => {
                console.log("Saving users to state", res.data)
                this.setState({ users: res.data })
            })
            .catch(err => {
                console.error(err)
            })
    }
    render() {
        const { classes } = this.props;
        const userLinks = this.state.users.map((user, i) => {
            return (

                <div>
                    <Card >
                        <Link key={i} to={`/user/${user._id}`}>
                            <CardMedia
                                className={classes.Usermedia}
                                image={user.imgUrl}
                            />
                            <CardContent>
                                <Typography component="p">
                                    Name: {user.firstName} {user.lastName}
                                    Favorites: {user.favorite}
                                </Typography>
                            </CardContent>
                        </Link>
                    </Card>
                </div>
            )
        })

        return (

            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="headline" color="white">
                            <Button size="large" waves='light'>
                                <Link to='/'>HomePage</Link>
                            </Button>
                            <Button size="large" waves='light'>
                                <Link to='/existing'>Existing User</Link>
                            </Button>
                        </Typography>

                    </Toolbar>
                </AppBar>
                <Grid container className={classes.root} spacing={24}>
                    <Grid item lg={2} md={3} sm={12} xs={12}>
                        <Card >
                            <CardContent>
                                <Typography component="p">
                                    Boredom, anger, sadness, or fear are not 'yours,' not personal.
                                          They are conditions of the human mind. They come and go.
                                          Nothing that comes and goes is you.

                                </Typography>
                            </CardContent>
                        </Card>
                        <Hidden smDown>
                            <Card className={classes.card} >
                                <CardMedia
                                    className={classes.media}
                                    image="http://conceptionsportsmanagement.com/wp-content/uploads/2014/08/bncc1.gif"
                                    title="Contemplative Reptile"
                                />
                            </Card>
                        </Hidden>
                    </Grid>
                    <Grid item lg={8} md={6} sm={12} xs={12}>
                        <Paper>
                            <Button waves='light' onClick={this.toggleShowNewForm}>
                                Create New User
                    </Button>

                            {this.state.showNewForm ? <NewUser /> : null}
                            {userLinks}
                        </Paper>
                    </Grid>
                    <Grid item lg={2} md={3} sm={12} xs={12}>
                        <Card >
                            <CardContent>
                                <Typography component="p">
                                    Boredom, anger, sadness, or fear are not 'yours,' not personal.
                                          They are conditions of the human mind. They come and go.
                                          Nothing that comes and goes is you.

                                </Typography>
                            </CardContent>
                        </Card>
                        <Hidden smDown>
                            <Card className={classes.card} >
                                <CardMedia
                                    className={classes.media}
                                    image="http://conceptionsportsmanagement.com/wp-content/uploads/2014/08/bncc1.gif"
                                    title="Contemplative Reptile"
                                />
                            </Card>
                        </Hidden>
                    </Grid>
                </Grid>
                <Footer />
            </div>
        )
    }
}
ExistingUser.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ExistingUser)
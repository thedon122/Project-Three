import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
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
        height: 50,
        paddingTop: '30.25%', // 16:9
    },
    mainImg: {
        height: 300,
    }
});
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

    render() {

        const { classes } = this.props;

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
                        <Card className={classes.card} >
                            <CardMedia
                                className={classes.media}
                                image="http://conceptionsportsmanagement.com/wp-content/uploads/2014/08/bncc1.gif"
                                title="Contemplative Reptile"
                            />
                        </Card>
                        <Card >
                            <CardMedia

                                image="http://conceptionsportsmanagement.com/wp-content/uploads/2014/08/bncc1.gif"
                                title="Contemplative Reptile"
                            />
                        </Card>

                    </Grid>
                    <Grid item lg={8} md={6} sm={12} xs={12}>
                        <Paper>
                            <Button size="large" waves='light' onClick={this.toggleShowNewForm}>
                                Create New User
                            </Button>
                            <Button size="large" waves='light'>
                                <Link to='/existing'>Existing User</Link>
                            </Button>
                            {this.state.showNewForm ? <NewUser /> : null}
                            <Card className={classes.mainImg}  >
                                <img src='https://res.cloudinary.com/simpleview/image/fetch/c_limit,f_auto,q_75,w_1200/https://res.cloudinary.com/simpleview/image/upload/crm/albuquerque/Convention-Center-60_be1055de-5056-a36a-09f41de46d0e817a.jpg' />

                            </Card>
                        </Paper>
                    </Grid>
                    <Grid item lg={2} md={3} sm={12} xs={12}>
                        <Card >
                            <CardContent>
                                <Typography component="p">
                                    There's no excuse to be bored. Sad, yes. Angry, yes.
                                    Depressed, yes. Crazy, yes. But there's no excuse for boredom, ever.

                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Footer />
            </div>
        )
    }
}
HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage) 
import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core' // overiding default css properties


/**
 * @description - This prop is a inbuilt prop we are modifying it
 */
const theme = createMuiTheme({
    overrides: {
        'MuiPaper': {
            'elevation1': {
                boxShadow: "0px 0px 3px 0px #888888",
            }
        },
        'MuiFormControl': {
            'marginNormal': {
                width: "100%"
            }
        },
        'MuiButton': {
            'containedPrimary': {
                top: "90%",
                left: "80%"
            }
        }
    }
})

const BootstrapButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 14,
        padding: '7px 24px 7px 24px',
        border: '1px solid',
        lineHeight: "20px",
        backgroundColor: '#287ae6',
        borderColor: '#287ae6',
        fontFamily: [
            "Google Sans", "arial", "sans-serif"
        ].join(','),
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
})(Button);


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    button: {
        margin: theme.spacing(1),
    }
}));


export class Login extends Component {
    constructor() {
        super()
        this.state = {
            toggle: false
        }
        this.classes = useStyles.bind(this);
    }
    handleToggle = () => {
        this.setState({ toggle: true })
    }
    render() {

        return (

            <div>
                <MuiThemeProvider theme={theme}>
                    <Card style={
                        {
                            marginTop: "13%",
                            marginLeft: "32.5%",
                            position: "absolute",
                            width: "35%",
                            height: "60%"
                        }
                    }>
                        <div className="Login"> <b> <span className="F">F</span>
                            <span className="U">u</span>
                            <span className="N">n</span>
                            <span className="F">d</span>
                            <span className="O">o</span>
                            <span className="U">o</span>
                            <span> </span>
                            <span className="F">N</span>
                            <span className="U">o</span>
                            <span className="N">t</span>
                            <span className="F">e</span>
                            <span className="O">s</span>
                        </b></div>
                        <div className="SignIn"> <br /> Sign in </div>

                        {this.state.toggle ?
                            <div className="EmailInput">
                                <TextField
                                    id="outlined-email-input"
                                    label="Password"
                                    className={this.classes.textField}
                                    type="password"
                                    name="Password"
                                    autoComplete="email"
                                    margin="normal"
                                    variant="outlined" /> <br />
                                <div className="HandleSubmit">
                                    <BootstrapButton variant="contained" color="primary" disableRipple className={this.classes.margin}>
                                       <b> Submit</b>
                                </BootstrapButton>
                                </div>
                                <br /><br />

                                <div className="Forgot" > Forgot password ? </div>
                            </div>
                            :
                            <div className="EmailInput">
                                <TextField
                                    id="outlined-email-input"
                                    label="Email"
                                    className={this.classes.textField}
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    margin="normal"
                                    variant="outlined" /><br />
                             <div className="HandleNext">   <BootstrapButton variant="contained" color="primary" disableRipple className={this.classes.margin} onClick={this.handleToggle}>
                                   <b> Next</b>
                                </BootstrapButton></div>
                                <div className="CreateAccount"> Create account </div>
                            </div>
                        }
                    </Card>
                </MuiThemeProvider>
            </div>


        )

    }
}
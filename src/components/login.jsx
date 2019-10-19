import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core' // overiding default css properties



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
        }
    }
})


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
        // this.classes = useStyles.bind(this);
        this.classes = useStyles.bind(this);
    }
    handleToggle = () => {
        console.log("in ddsf");
        
        this.setState({ toggle:true  })
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

                        { this.state.toggle ?
                        <div className="EmailInput">
                            {/* <form className={this.classes.container} noValidate autoComplete="off"> */}
                            <TextField
                                id="outlined-email-input"
                                label="Password"
                                className={this.classes.textField}
                                type="password"
                                name="Password"
                                autoComplete="email"
                                margin="normal"
                                variant="outlined" />
                                 <Button variant="contained" color="primary" className={this.classes.button} onClick={this.handleToggle}>
                            SUBMIT
                        </Button>
                        <div className="Forgot" > Forgot password ? </div>
                        </div>
                        :
                        <div className="EmailInput">
                            {/* <form className={this.classes.container} noValidate autoComplete="off"> */}
                            <TextField
                                id="outlined-email-input"
                                label="Email"
                                className={this.classes.textField}
                                type="email"
                                name="email"
                                autoComplete="email"
                                margin="normal"
                                variant="outlined" />
                                 <Button variant="contained" color="primary" className={this.classes.button} onClick={this.handleToggle}>
                            NEXT
                        </Button>
                        </div>
                        }

                        {/* <div className="PasswordInput">
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                className={this.classes.textField}
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                            />
                        </div> */}


                      
                        <div className="CreateAccount"> Create account </div>
                       
                    </Card>
                </MuiThemeProvider>
            </div>


        )

    }
}
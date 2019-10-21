import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core' // overiding default css properties
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import '../Registration.css'

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
        },
        'MuiOutlinedInput': {
            'input': {
                padding: "8.5px 11px"
            }
        },
        'MuiInputLabel': {
            'outlined': { transform: "translate(14px, 11px) scale(1)" }
        }
        ,
        "MuiInputBase": {
            "input": {
                fontSize: "14px"
            }
        }
    }
})

export class Registration extends Component {
    constructor() {
        super()
        this.state = {
            toggle: false
        }
        this.classes = useStyles.bind(this);
    }
    render() {
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <Card style={
                        {
                            marginTop: "11.8%",
                            marginLeft: "20.8%",
                            position: "absolute",
                            width: "58.4%",
                            height: "63.5%"
                        }
                    }>
                        <div className="Title"> <b> <span className="F">F</span>
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
                        <div className="Message">
                            Create your Google Account
                        </div>

                        <div className="FirstName" ><TextField
                            id="outlined-email-input"
                            label="First name"
                            className={this.classes.textField}
                            type="string"
                            name="First name"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined" />
                        </div>

                        <div className="LastName">
                        <TextField
                            id="outlined-email-input"
                            label="Last name"
                            className={this.classes.textField}
                            type="string"
                            name="Last name"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined" />
                         </div> 

                          <div className="UserName">
                        <TextField
                            id="outlined-email-input"
                            label="Username"
                            className={this.classes.textField}
                            type="string"
                            name="Username"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined" />
                         </div>

                        <div className="Password">
                         <TextField
                            id="outlined-email-input"
                            label="Password"
                            className={this.classes.textField}
                            type="string"
                            name="Password"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined" />
                         </div>
                      
                    </Card></MuiThemeProvider></div>
        )
    }
}

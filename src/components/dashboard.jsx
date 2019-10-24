import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core' // overiding default css properties
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
//<MDBIcon icon="th-large" />
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import DnsOutlinedIcon from '@material-ui/icons/DnsOutlined';
import KeepIcon from '../assets/keep.jpg'
import '../Dashboard.css'
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';

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
        "MuiFilledInput": {
            "inputHiddenLabel": {
                "margin": "0px 0px 0px 26px"
            },
            "root": {
                "background": "#f1f3f4",
                "padding": "0px 0px 0px 26px",
                backgroundColor: "#f1f3f4",
                "height": "40px",
                "top": "15px",
                "width": "260%",
                "left": "-91%",
                "borderRadius": "5px",
                "boxShadow": "2px",
                "transition": "background 100ms ease-in,width 100ms ease-out"
            },

        },
        "MuiSvgIcon": {
            "root": {
                "position": "absolute",
                "left": "17%",
                "cursor": "pointer",

            }
        },
        "MuiInputAdornment": {
            "root": {
                "position": "absolute",
                "left": "2%"
            }
        },
        "MuiAvatar": {
            "root": {
                position:"absolute",
                left:"40%",
                display:"flex",
                justifyContent:"flex-end"
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
        height: "20px",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }, dense: {
        marginTop: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1),
    },
    avatar: {
        margin: 10,
    },
    orangeAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepOrange[500],
    },
    purpleAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepPurple[500],
    },
}));

export class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            toggle: false
        }
        this.classes = useStyles.bind(this);
    }
    handleView = () => {
        this.setState({ toggle: true })
    }
    spoilView = () => {
        this.setState({ toggle: false })
    }
    render() {
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <Card style={
                        {
                            position: "absolute",
                            width: "100%",
                            height: "7.6%"
                        }
                    }>
                        {this.state.toggle ?
                            <div className="View" onClick={this.spoilView}><AppsRoundedIcon></AppsRoundedIcon></div>
                            :
                            <div className="View" onClick={this.handleView}><DnsOutlinedIcon></DnsOutlinedIcon></div>
                        }

                        <TextField
                            id="filled-hidden-label"
                            className={clsx(this.classes.textField, this.classes.dense)}
                            hiddenLabel
                            variant="filled"
                            placeholder="Search"
                            InputProps={{ 'aria-label': 'hidden label' }, {
                                endAdornment: (
                                    <InputAdornment position="10%">
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <img className="KeepIcon" src={KeepIcon} alt="keep pic"></img>
                        <div className="Keep">Fundoo</div>
                        <div className="alignMent">  <Grid container justify="flex-end" alignItems="flex-end">
                            <Avatar className={this.classes.orangeAvatar}>N</Avatar>
                        </Grid></div>
                    </Card>
                </MuiThemeProvider></div>
        )
    }
}
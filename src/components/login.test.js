import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import { makeStyles } from '@material-ui/core/styles';
import Adapter from 'enzyme-adapter-react-16'
import { Login } from './login'                     //this component will be tested
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core' // overiding default css properties
import Card from '@material-ui/core/Card';
import '../Login.css'

// import expect from 'expect.js'

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

const classes= useStyles

Enzyme.configure({ adapter: new Adapter() })


it('Checking title of login page !', () => {
    /**
     * @description - To test the component we need the instance of the component for assertions 
     *                'Shallow' helps us with this ... shallow allows us to render the react component
     *                into a object instead of DOM which makes it faster  ... it wraps that object into a wrapper 
     *                This now enables us to examine the component. 
     */
    const wrapper = shallow((

        <Login>
            <div>
                <MuiThemeProvider theme={theme}>
                    {/* <Card> */}
                        <div className="Login" />
                    {/* </Card> */}
                </MuiThemeProvider>
            </div>
        </Login>
    ));
    expect(wrapper.contains(<div className="Login"/>)).to.empty()
});



// test("next button",()=>{
//     expect()
// })
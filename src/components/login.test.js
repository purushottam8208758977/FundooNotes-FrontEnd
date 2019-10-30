import React from 'react'
import Enzyme, { shallow,mount } from 'enzyme'
import { makeStyles } from '@material-ui/core/styles';
import Adapter from 'enzyme-adapter-react-16'
import { Login } from './login'                     //this component will be tested
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core' // overiding default css properties
import Card from '@material-ui/core/Card';
import '../Login.css'




Enzyme.configure({ adapter: new Adapter() })

describe("checking component",()=>{
    let component = mount(<Login/>)

    it("Checking the presence of whole component",()=>{
        component.debug()
        console.log("\n\n\ttest result--> ",component.debug())
    })

    it("sdds",()=>{
        component.first()
    })
})
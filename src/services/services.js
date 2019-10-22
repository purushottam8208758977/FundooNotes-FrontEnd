import axios from 'axios'
const url = "http://localhost:4000"

export function registration(registrationData) {

    console.log("\n\n\tIn services --->", registrationData)
    return axios.post(url + "/registration", registrationData)

    //return userData
}
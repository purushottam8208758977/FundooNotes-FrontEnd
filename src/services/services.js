import axios from 'axios'
const url = "http://localhost:4000"

export function registration(registrationData) {

    console.log("\n\n\tIn services for registration --->", registrationData)
    return axios.post(url + "/registration", registrationData)
}

export function login(loginData) {
    console.log("\n\n\tIn service for login--->", loginData)
    return axios.post(url + "/login", loginData)
}

export function emailVerification(verificationToken) { // blank object is for data ... it understands second argument as headers
    console.log("\n\n\tIn services for email verification ",verificationToken)
    return axios.post(url + "/emailVerification",{}, {
        headers: {
            token: verificationToken
        }
    })
}
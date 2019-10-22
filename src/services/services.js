import axios from 'axios'
const url = "http://localhost:4000"

export function registration(registrationData){
    let userData = axios.post(url+"/registration",registrationData)

    return userData
}
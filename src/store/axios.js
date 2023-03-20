import axios from 'axios';
import config from "../config";
import router from '../router'

// creating custom instances
export const public_url = axios.create()
export const private_url = axios.create()

// configure baseURL
private_url.defaults.baseURL = config.baseURL
public_url.defaults.baseURL = config.baseURL

//define request interceptors
private_url.interceptors.request.use(request => {
    let access_token = '664|TZZ7zHnAkQRnVuY5wP0s2xQLoCKzZ7Kl1oLTjEeO'
    request.headers['Authorization'] = 'Bearer'.concat(' ', access_token);
    return request;
})

//define response interceptors
private_url.interceptors.response.use(response => {
    // Any status codes that falls in 2xx cause this function to trigger
  return response;
}, (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    //check for 401 unauthorized
    if (error.response.status === 401) {
        // remove cookies
        localStorage.remove('access_token')
        // push to login
        router.push({name: 'Login'})
    }
    // returning errors to then/catch for further use
    return error;
})





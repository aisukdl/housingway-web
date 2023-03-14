import axios from 'axios';
import { getAccessToken } from '../utils/local-storage';

axios.defaults.baseURL = process.env.REACT_APP_ENDPOINT_URL;
// Axios interceptor is a middleware for axios that allows for executing 
// a function for every request made with Axios, before the request is sent or after the response is received. 
// You can use Axios interceptors to add headers to all requests, set default headers, handle errors, 
// or log requests and responses. This can be useful for adding authentication tokens to all requests, 
// handling unauthorized responses, or logging all network requests in your application.
axios.interceptors.request.use(
  config => {
    if (getAccessToken()) {
      config.headers.authorization = `Bearer ${getAccessToken()}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default axios;
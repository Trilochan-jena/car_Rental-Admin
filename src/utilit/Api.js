import axios from 'axios';
let Api = null;
Api = axios.create({
    baseURL: 'http://localhost:5000/api/',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});
export default Api; 
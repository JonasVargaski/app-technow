import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api-technow.herokuapp.com',
});

export default api;

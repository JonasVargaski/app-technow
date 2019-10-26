import axios from 'axios';
import { store } from '~/store';
import { signOut } from '~/store/modules/auth/actions';
import { api_url } from '../config/endpoint';

const api = axios.create({
  baseURL: api_url,
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.data.error === 'Invalid token') {
      store.dispatch(signOut());
    }
    return error;
  }
);

export default api;

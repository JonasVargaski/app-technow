import axios from 'axios';
import { store } from '~/store';
import { signOut } from '~/store/modules/auth/actions';

const api = axios.create({
  baseURL: 'http://192.168.0.125:3333',
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.data.error === 'Invalid token') {
      store.dispatch(signOut());
    }
    return error;
  }
);

export default api;

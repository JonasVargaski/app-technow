import axios from 'axios';
import { store } from '~/store';
import { signOut } from '~/store/modules/auth/actions';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.response.use(
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

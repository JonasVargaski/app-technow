import axios from 'axios';
import { toast } from 'react-toastify';
import {} from 'styled-components';
import { store } from '~/store';
import { signOut } from '~/store/modules/auth/actions';
import { api_url } from '../config/endpoint';

const api = axios.create({
  baseURL: api_url,
});

api.interceptors.response.use(
  response => response,
  error => {
    const err = {
      message: error.message,
      status: null,
      statusText: '',
      url: '',
      data: {},
    };

    if (error.response) {
      err.status = error.response.status;
      err.statusText = error.response.statusText;
      err.url = error.response.config.url;
      err.data = error.response.data;
      err.axios = error.toJSON();
    }

    if (err.data.error === 'Invalid token') {
      store.dispatch(signOut());

      setTimeout(() => {
        toast.dismiss();

        toast.error(
          'Chave de sessão expirada, Por favor realize login novamente.',
          {
            autoClose: 6000,
            position: toast.POSITION.TOP_CENTER,
          }
        );
      }, 10);
    }

    return Promise.reject(err);
  }
);

export default api;

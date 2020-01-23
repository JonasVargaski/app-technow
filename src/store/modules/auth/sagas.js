import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { store } from '~/store';

import api from '~/services/api';
import history from '~/services/history';
import socket from '~/services/socket';

import { signed, signInSuccess, signFailure, signUpSuccess } from './actions';

function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user, routes } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user, routes));
    yield put(signed());

    history.push('/monitoring');
  } catch (err) {
    if (err.data.code === 'AUTH001') {
      history.push('/confirm', { email: err.data.email });
    } else {
      toast.warn('Falha na autenticação, verifique seus dados');
    }
    yield put(signFailure());
  }
}

function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    yield put(signUpSuccess());

    history.push('/confirm', { email });
  } catch (err) {
    toast.warn('Falha no cadastro, verifique seus dados');

    yield put(signFailure());
  }
}

function* restore({ payload }) {
  if (payload.auth && payload.auth.token) {
    api.defaults.headers.Authorization = `Bearer ${payload.auth.token}`;
    if (payload.auth.signed) {
      yield put(signed());
    }
  }
}

function connectWs() {
  const { auth } = store.getState();
  if (auth && auth.token) {
    socket.connect({ token: auth.token });
  }
}

function signOut() {
  history.push('/');
  socket.disconnect();
}

export default all([
  takeLatest('persist/REHYDRATE', restore),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/SIGNED', connectWs),
]);

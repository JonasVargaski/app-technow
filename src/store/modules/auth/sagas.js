import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import confirm from '~/components/Confirm';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signFailure, signUpSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user, routes } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user, routes));

    history.push('/monitoring');
  } catch (err) {
    if (err.data.code === 'AUTH001') {
      confirm({
        title: 'Confirmação de E-mail.',
        content:
          'Por favor, Acesse sua caixa de entrada e confirme seu e-mail clicando no botão "Confirmar e-mail."',
        showConfirm: false,
        cancelText: 'Fechar',
      });
    } else {
      history.push('/confirm', { email: 'mksdmdk' });
      toast.warn('Falha na autenticação, verifique seus dados');
    }
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    yield put(signUpSuccess());
    history.push('/');
  } catch (err) {
    toast.warn('Falha no cadastro, verifique seus dados');

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);

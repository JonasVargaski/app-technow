import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { saveDeviceSuccess, saveDeviceFailure } from './actions';

export function* saveDevice({ payload }) {
  try {
    const { serial, password, description } = payload.data;

    const device = {
      serial,
      password,
      description,
    };

    const response = yield call(api.post, 'device', device);

    toast.success('Controlador salvo com sucesso!');
    yield put(saveDeviceSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao salvar controlador, confira os dados.');
    yield put(saveDeviceFailure());
  }
}

export default all([takeLatest('@device/SAVE_DEVICE_REQUEST', saveDevice)]);

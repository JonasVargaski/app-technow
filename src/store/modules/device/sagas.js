import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  saveDeviceSuccess,
  getDevicesSuccess,
  updateDeviceSuccess,
  removeDeviceSuccess,
} from './actions';

export function* removeDevice({ payload }) {
  try {
    const { id } = payload;
    yield call(api.put, `devices/associate/${id}`, {
      situation: 'inactive',
    });

    yield put(removeDeviceSuccess(id));
  } catch (err) {
    toast.error('Erro ao remover controlador, tente novamente.');
  }
}

export function* updateDevice({ id, description }) {
  try {
    const { data } = yield call(api.put, `devices/associate/${id}`, {
      description,
    });

    const deviceStore = {
      id: data.device.id,
      description: data.description,
      serial: data.device.serial,
      updatedAt: data.updatedAt,
    };

    yield put(updateDeviceSuccess(deviceStore));
  } catch (err) {
    toast.error('Erro ao buscar controladores.');
  }
}

export function* getDevices() {
  try {
    const response = yield call(api.get, 'devices/associate');

    const devices = response.data.map(device => ({
      id: device.id,
      description: device.description,
      updatedAt: device.updatedAt,
      serial: device.device.serial,
    }));

    yield put(getDevicesSuccess(devices));
  } catch (err) {
    toast.error('Erro ao buscar controladores.');
  }
}

export function* saveDevice({ payload }) {
  try {
    const { data, resetForm } = payload;

    const response = yield call(api.post, 'devices/associate', data);

    const { device, description, updatedAt } = response.data;
    const deviceStore = {
      ...device,
      description,
      updatedAt,
    };

    resetForm();

    toast.success('Controlador adicionado com sucesso!');

    yield put(saveDeviceSuccess(deviceStore));
  } catch (err) {
    toast.warn('Erro ao salvar controlador, confira os dados.');
  }
}

export default all([
  takeLatest('@device/REMOVE_DEVICE_REQUEST', removeDevice),
  takeLatest('@device/SAVE_DEVICE_REQUEST', saveDevice),
  takeLatest('@device/GET_DEVICES_REQUEST', getDevices),
  takeLatest('@device/UPDATE_DEVICE_REQUEST', updateDevice),
]);

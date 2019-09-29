export function saveDeviceRequest(data) {
  return {
    type: '@device/SAVE_DEVICE_REQUEST',
    payload: { data },
  };
}

export function saveDeviceSuccess(device) {
  return {
    type: '@device/SAVE_DEVICE_SUCCESS',
    payload: { device },
  };
}

export function saveDeviceFailure() {
  return {
    type: '@device/SAVE_DEVICE_FAILURE',
  };
}

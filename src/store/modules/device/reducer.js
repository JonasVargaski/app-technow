import produce from 'immer';

const INITIAL_STATE = {
  devices: [],
};

export default function device(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@device/GET_DEVICES_SUCCESS': {
        draft.devices = action.payload.devices;
        break;
      }
      case '@device/SAVE_DEVICE_SUCCESS': {
        draft.devices.push(action.payload.device);
        break;
      }
      case '@device/UPDATE_DEVICE_SUCCESS': {
        const { device: newDevice } = action.payload;

        const index = draft.devices.findIndex(d => d.id === newDevice.id);
        if (index !== -1) {
          draft.devices.splice(index, 1, device);
        }
        break;
      }
      case '@device/REMOVE_DEVICE_SUCCESS': {
        const { id } = action.payload;
        draft.devices = draft.devices.filter(d => d.id !== id);
        break;
      }
      case '@auth/SIGN_OUT': {
        draft = INITIAL_STATE;
        break;
      }
      default:
    }
  });
}

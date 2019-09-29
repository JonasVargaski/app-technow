import produce from 'immer';

const INITIAL_STATE = {
  devices: [
    {
      id: 6,
      description: 'Estufa 01 (Grampo)',
    },
    {
      id: 5,
      description: 'Estufa 02 (Folha solta)',
    },
  ],
};

export default function device(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@device/SAVE_DEVICE_SUCCESS': {
        draft.devices.push(action.device);
        break;
      }
      default:
    }
  });
}

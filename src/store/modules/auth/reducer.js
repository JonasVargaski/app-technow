import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: true,
  loading: false,
  routes: ['/dashboard', '/device', '/profile'],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_UP_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_UP_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.routes = action.payload.routes;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        draft.routes = [];
        break;
      }
      default:
    }
  });
}

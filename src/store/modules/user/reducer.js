import produce from 'immer';

const INITIAL_STATE = {
  profile: {
    name: 'Jonas Vargaski',
    email: 'jonasvargaski@hotmail.com',
    avatar_url: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
    acessLabel: 'Administrador',
    acessLevel: 1,
  },
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      default:
    }
  });
}
